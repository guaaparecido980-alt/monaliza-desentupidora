import { Emblema } from "./Emblema";

/** Logo horizontal para o cabeçalho: emblema + MONALIZA / DESENTUPIDORA. */
export function Assinatura({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid size-11 place-items-center bg-[#F4F5F8] chanfro-duplo [--chanfro:6px] sm:size-12">
        <Emblema className="size-10 sm:size-11" titulo="" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.6rem] font-bold uppercase tracking-[0.01em] text-agua sm:text-[1.8rem]">
          Monaliza
        </span>
        <span className="mt-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.28em] text-nevoa">
          Desentupidora
        </span>
      </span>
    </span>
  );
}
