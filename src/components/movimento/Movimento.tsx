"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Orquestra o movimento de cada página (refeito a cada troca de rota).
 * Vocabulário único, ligado à ideia de água passando:
 *  - [data-mascara]  títulos sobem por trás de um recorte (clip-path)
 *  - [data-revela]   blocos entram com deslocamento curto (só onde marcado, não em tudo)
 *  - .ilustra[data-anima]  traços das pranchas se desenham ao entrar na tela
 *  - [data-linha-agua] cano que enche conforme a rolagem (scrub)
 *  - [data-paralaxe] deslocamento discreto
 * Só começa depois que a página terminou de carregar/hidratar (evita alterar HTML
 * que o React ainda vai conferir). Com prefers-reduced-motion: reduce nada é criado.
 */
export function Movimento() {
  const pathname = usePathname();

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let cancelado = false;
    let timer: number | undefined;
    const html = document.documentElement;

    // GSAP é carregado só depois que a página apareceu (fora do caminho crítico)
    const iniciar = async () => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelado) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
          const revelas = gsap.utils.toArray<HTMLElement>("[data-revela]");
          gsap.set(revelas, { opacity: 0, y: 26 });
          html.classList.add("gsap-ok");

          ScrollTrigger.batch(revelas, {
            start: "top 90%",
            once: true,
            onEnter: (lote) =>
              gsap.to(lote, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", stagger: 0.08, overwrite: true }),
          });

          gsap.utils.toArray<HTMLElement>("[data-mascara]").forEach((el) => {
            gsap.fromTo(
              el,
              { clipPath: "inset(0 0 100% 0)", yPercent: 18 },
              {
                clipPath: "inset(0 0 -10% 0)",
                yPercent: 0,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: { trigger: el, start: "top 92%", once: true },
              },
            );
          });

          gsap.utils.toArray<SVGSVGElement>(".ilustra[data-anima]").forEach((svg) => {
            const tracos = Array.from(svg.querySelectorAll<SVGGeometryElement>("[data-desenha] path, path.t"));
            tracos.forEach((p) => {
              const len = p.getTotalLength();
              gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
            });
            gsap.to(tracos, {
              strokeDashoffset: 0,
              duration: 1.2,
              ease: "power2.inOut",
              stagger: 0.04,
              scrollTrigger: { trigger: svg, start: "top 88%", once: true },
              onComplete: () => gsap.set(tracos, { clearProps: "strokeDasharray,strokeDashoffset" }),
            });
          });

          gsap.utils.toArray<HTMLElement>("[data-linha-agua]").forEach((el) => {
            const horizontal = el.parentElement!.offsetWidth > el.parentElement!.offsetHeight;
            gsap.fromTo(
              el,
              horizontal ? { scaleX: 0 } : { scaleY: 0 },
              {
                ...(horizontal ? { scaleX: 1 } : { scaleY: 1 }),
                ease: "none",
                transformOrigin: horizontal ? "0% 50%" : "50% 0%",
                scrollTrigger: {
                  trigger: el.parentElement!.parentElement!,
                  start: "top 75%",
                  end: horizontal ? "top 25%" : "bottom 60%",
                  scrub: 0.6,
                },
              },
            );
          });

          gsap.utils.toArray<HTMLElement>("[data-paralaxe]").forEach((el) => {
            const forca = Number(el.dataset.paralaxe || 10);
            gsap.fromTo(
              el,
              { yPercent: -forca / 2 },
              { yPercent: forca / 2, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
            );
          });

          ScrollTrigger.refresh();
          return () => html.classList.remove("gsap-ok");
        });
      });
    };

    // Espera a hidratação terminar: depois do "load", no primeiro momento ocioso do navegador.
    let idle: number | undefined;
    const agendar = () => {
      timer = window.setTimeout(() => {
        if ("requestIdleCallback" in window) idle = window.requestIdleCallback(() => void iniciar(), { timeout: 1200 });
        else void iniciar();
      }, 30);
    };
    if (document.readyState === "complete") agendar();
    else window.addEventListener("load", agendar, { once: true });

    return () => {
      cancelado = true;
      window.removeEventListener("load", agendar);
      window.clearTimeout(timer);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
