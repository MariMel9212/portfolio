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
          render={<a href={site.telegramUrl} target="_blank" rel="noreferrer" aria-label="Написать в Telegram" />}
          nativeButton={false}
          className={cn(
            pill,
            "aspect-square h-auto w-auto items-center justify-center self-stretch bg-[#338ff5] p-0 text-[#f6f6f6] hover:bg-[#338ff5]/85 lg:hidden",
          )}
        >
          <svg viewBox="9 14 28 25" className="h-[52%] w-auto" aria-hidden="true">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3166 24.7361C18.6046 21.5608 23.4644 19.4675 25.896 18.4561C32.8388 15.5684 34.2814 15.0667 35.2217 15.0502C35.4285 15.0465 35.8909 15.0978 36.1905 15.3408C36.4434 15.546 36.513 15.8233 36.5463 16.0178C36.5796 16.2124 36.621 16.6557 36.5881 17.002C36.2118 20.9551 34.5839 30.5482 33.7557 34.9757C33.4052 36.8492 32.7152 37.4774 32.0472 37.5388C30.5954 37.6724 29.4929 36.5794 28.0868 35.6576C25.8865 34.2153 24.6434 33.3174 22.5076 31.91C20.0394 30.2834 21.6394 29.3894 23.0461 27.9284C23.4142 27.546 29.8109 21.7278 29.9347 21.2C29.9502 21.134 29.9646 20.8879 29.8184 20.758C29.6722 20.6281 29.4565 20.6725 29.3008 20.7078C29.0801 20.7579 25.565 23.0812 18.7556 27.6778C17.7579 28.3629 16.8542 28.6967 16.0445 28.6792C15.1518 28.6599 13.4348 28.1745 12.1583 27.7596C10.5927 27.2507 9.34837 26.9816 9.45672 26.1173C9.51316 25.6671 10.1331 25.2067 11.3166 24.7361Z"
            />
          </svg>
        </Button>
        <Button
          render={<a href={site.telegramUrl} target="_blank" rel="noreferrer" />}
          nativeButton={false}
          className={cn(pill, "hidden bg-[#338ff5] text-[#f6f6f6] hover:bg-[#338ff5]/85 @min-[640px]:px-[10px] lg:inline-flex")}
        >
          Написать в тг
        </Button>
      </div>
    </header>
  );
}
