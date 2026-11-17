"use client";

import { useEffect } from "react";

/**
 * Animação do corte de solo: as linhas se desenham, um pulso de água percorre o cano,
 * a obstrução se desfaz e o fluxo segue. GSAP carregado sob demanda.
 * Com movimento reduzido, mostra o estado final parado.
 */
export function AnimaCorte({ alvo }: { alvo: string }) {
  useEffect(() => {
    const svg = document.getElementById(alvo) as unknown as SVGSVGElement | null;
    if (!svg) return;
    const q = <T extends Element>(sel: string) => Array.from(svg.querySelectorAll<T>(sel));
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      q<SVGElement>("[data-obstrucao], [data-pulso]").forEach((el) => (el.style.opacity = "0"));
      q<SVGElement>("[data-ok]").forEach((el) => el.setAttribute("opacity", "1"));
      return;
    }
    let ctx: { revert: () => void } | undefined;
    let cancelado = false;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelado) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const linhas = q<SVGGeometryElement>("[data-linha]");
        linhas.forEach((el) => {
          const len = el.getTotalLength();
          gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
        });
        const pulso = svg.querySelector<SVGPathElement>("[data-pulso]")!;
        const lenP = pulso.getTotalLength();
        gsap.set(pulso, { strokeDasharray: `70 ${lenP}`, strokeDashoffset: 70, opacity: 1 });
        gsap.set("[data-fluxo-hero]", { opacity: 0 });

        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to(linhas, { strokeDashoffset: 0, duration: 1.3, stagger: 0.06 })
          .from("[data-cota-hero]", { opacity: 0, duration: 0.5, stagger: 0.05 }, "-=0.6")
          .to(pulso, { strokeDashoffset: -lenP * 0.47, duration: 1.1, ease: "power1.in" }, "-=0.2")
          .to("[data-obstrucao]", { x: 6, duration: 0.06, repeat: 5, yoyo: true, ease: "none" })
          .to("[data-obstrucao]", { scale: 0, opacity: 0, transformOrigin: "50% 50%", duration: 0.45, ease: "back.in(2)" })
          .to(pulso, { strokeDashoffset: -lenP - 70, duration: 1.2, ease: "power1.out" }, "<")
          .to("[data-fluxo-hero]", { opacity: 1, duration: 0.6 }, "-=0.6")
          .to("[data-ok]", { opacity: 1, duration: 0.4 }, "-=0.3");

        gsap.to("[data-fluxo-hero]", { strokeDashoffset: -48, duration: 1.6, ease: "none", repeat: -1 });

        gsap.to(svg, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: svg, start: "top top+=80", end: "bottom top", scrub: true },
        });
      }, svg);
    })();
    return () => {
      cancelado = true;
      ctx?.revert();
    };
  }, [alvo]);

  return null;
}
