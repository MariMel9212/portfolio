import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

const pill =
  "h-auto rounded-[18px] border-0 px-2 pt-[10px] pb-[8px] text-[11px] font-medium uppercase leading-normal tracking-[-0.01em] @min-[360px]:px-2.5 @min-[360px]:text-[12px] @min-[430px]:px-3 @min-[430px]:text-[13px] @min-[640px]:px-4 @min-[640px]:text-[16px]";
const lightPill = cn(pill, "bg-white text-[#181818]/90 hover:bg-white/70");

export function SiteHeader({ tone = "home" }: { tone?: "home" | "case" }) {
  const navPill = tone === "case" ? cn(pill, "bg-transparent text-white/90 hover:bg-white/10") : lightPill;
  return (
    <header className="@container mx-auto flex w-full max-w-[1308px] items-center justify-between gap-1 px-2.5 pt-6 min-[360px]:gap-1.5 min-[360px]:px-3 min-[430px]:px-4 sm:gap-[10px] sm:px-6 md:pt-[80px]">
      <nav aria-label="Разделы" className="flex items-center gap-1 @min-[360px]:gap-[6px] @min-[640px]:gap-[10px]">
        <Button render={<a href="/#cases" />} nativeButton={false} className={navPill}>
          Кейсы
        </Button>
        <Button render={<a href="/#about" />} nativeButton={false} className={navPill}>
          Обо мне
        </Button>
      </nav>
      <div className="flex items-center gap-1 @min-[360px]:gap-[6px] @min-[640px]:gap-[10px]">
        <Button render={<a href={site.cvUrl} />} nativeButton={false} className={cn(lightPill, "@min-[640px]:px-8")}>
          Резюме
        </Button>
        <a
          href={site.telegramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Написать в Telegram"
          className={tone === "case" ? "inline-flex shrink-0" : "inline-flex shrink-0 lg:hidden"}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 41 41"
            className="block h-[35px] w-[35px] @min-[360px]:h-[36px] @min-[360px]:w-[36px] @min-[430px]:h-[38px] @min-[430px]:w-[38px] @min-[640px]:h-[42px] @min-[640px]:w-[42px]"
            aria-hidden="true"
          >
            <circle cx="20.5" cy="20.5" r="20.5" fill="#338FF5" />
            <path
              transform="translate(7.749 12.341)"
              fill="#fff"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.53047 7.9426C7.50663 5.33888 11.4917 3.62235 13.4856 2.79301C19.1787 0.425064 20.3616 0.0137274 21.1327 0.000144821C21.3023 -0.00284252 21.6815 0.0391853 21.9271 0.238485C22.1345 0.406769 22.1915 0.634098 22.2188 0.79365C22.2461 0.953203 22.2801 1.31667 22.2531 1.60067C21.9446 4.8422 20.6097 12.7086 19.9305 16.3391C19.6432 17.8754 19.0774 18.3904 18.5296 18.4409C17.3391 18.5504 16.4351 17.6541 15.2821 16.8983C13.4778 15.7156 12.4585 14.9793 10.7072 13.8252C8.68316 12.4914 9.99523 11.7584 11.1487 10.5603C11.4506 10.2468 16.6958 5.47582 16.7973 5.04301C16.81 4.98889 16.8218 4.78712 16.702 4.68058C16.5821 4.57404 16.4052 4.61047 16.2775 4.63944C16.0965 4.68052 13.2142 6.58564 7.63049 10.3548C6.81235 10.9166 6.0713 11.1903 5.40735 11.176C4.67539 11.1602 3.2674 10.7621 2.22071 10.4219C0.936894 10.0046 -0.0834562 9.78393 0.00539342 9.0752C0.0516718 8.70605 0.560029 8.32851 1.53047 7.9426Z"
            />
          </svg>
        </a>
        <Button
          render={<a href={site.telegramUrl} target="_blank" rel="noreferrer" />}
          nativeButton={false}
          className={cn(
            pill,
            tone === "case" ? "hidden" : "hidden bg-[#338ff5] text-[#f6f6f6] hover:bg-[#338ff5]/85 @min-[640px]:px-[10px] lg:inline-flex",
          )}
        >
          Написать в тг
        </Button>
      </div>
    </header>
  );
}
