import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

const pill =
  "h-auto rounded-[18px] border-0 pt-[10px] pb-[8px] text-[13px] font-medium uppercase leading-normal tracking-[-0.01em] sm:text-[16px]";
const lightPill = cn(pill, "bg-white text-[#181818]/90 hover:bg-white/70");

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1308px] items-center justify-between gap-2 px-4 pt-6 sm:px-6 md:pt-[80px]">
      <nav aria-label="Разделы" className="flex items-center gap-[6px] sm:gap-[10px]">
        <Button render={<a href="#cases" />} nativeButton={false} className={cn(lightPill, "px-3 sm:px-4")}>
          Кейсы
        </Button>
        <Button render={<a href="#about" />} nativeButton={false} className={cn(lightPill, "px-3 sm:px-4")}>
          Обо мне
        </Button>
      </nav>
      <div className="flex items-center gap-[6px] sm:gap-[10px]">
        <Button render={<a href={site.cvUrl} />} nativeButton={false} className={cn(lightPill, "px-4 sm:px-8")}>
          Резюме
        </Button>
        <Button
          render={<a href={site.telegramUrl} target="_blank" rel="noreferrer" />}
          nativeButton={false}
          className={cn(pill, "bg-[#338ff5] px-3 text-[#f6f6f6] hover:bg-[#338ff5]/85 sm:px-[10px]")}
        >
          Написать в тг
        </Button>
      </div>
    </header>
  );
}
