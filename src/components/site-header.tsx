import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

const pill =
  "h-auto rounded-[18px] border-0 px-2 pt-[10px] pb-[8px] text-[11px] font-medium uppercase leading-normal tracking-[-0.01em] @min-[360px]:px-2.5 @min-[360px]:text-[12px] @min-[430px]:px-3 @min-[430px]:text-[13px] @min-[640px]:px-4 @min-[640px]:text-[16px]";
const lightPill = cn(pill, "bg-white text-[#181818]/90 hover:bg-white/70");

export function SiteHeader() {
  return (
    <header className="@container mx-auto flex w-full max-w-[1308px] items-center justify-between gap-1 px-2.5 pt-6 min-[360px]:gap-1.5 min-[360px]:px-3 min-[430px]:px-4 sm:gap-[10px] sm:px-6 md:pt-[80px]">
      <nav aria-label="Разделы" className="flex items-center gap-1 @min-[360px]:gap-[6px] @min-[640px]:gap-[10px]">
        <Button render={<a href="#cases" />} nativeButton={false} className={lightPill}>
          Кейсы
        </Button>
        <Button render={<a href="#about" />} nativeButton={false} className={lightPill}>
          Обо мне
        </Button>
      </nav>
      <div className="flex items-center gap-1 @min-[360px]:gap-[6px] @min-[640px]:gap-[10px]">
        <Button render={<a href={site.cvUrl} />} nativeButton={false} className={cn(lightPill, "@min-[640px]:px-8")}>
          Резюме
        </Button>
        <Button
          render={<a href={site.telegramUrl} target="_blank" rel="noreferrer" />}
          nativeButton={false}
          className={cn(pill, "bg-[#338ff5] text-[#f6f6f6] hover:bg-[#338ff5]/85 @min-[640px]:px-[10px]")}
        >
          Написать в тг
        </Button>
      </div>
    </header>
  );
}
