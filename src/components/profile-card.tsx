import { asset } from "@/lib/asset";
import { MailIcon } from "@/components/mail-icon";
import { site } from "@/content/site";

function Portrait() {
  return (
    <div className="pointer-events-none relative aspect-[272/407] w-full overflow-clip rounded-[4.08cqw] border-[0.73px] border-[#e5e7eb]">
      <div className="absolute left-[-0.27%] top-[-0.18%] h-[88.75%] w-[100.34%] rounded-[2.05cqw]">
        <div aria-hidden className="absolute inset-0 rounded-[inherit] bg-[#d9d9d9]" />
      </div>
      <div className="absolute left-[-23.61%] top-[-7.89%] h-[109.82%] w-[146.64%]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt="Мария Мельничук"
            className="absolute left-0 top-[0.06%] h-[99.91%] w-full max-w-none"
            src={asset("/figma/portrait.webp")}
          />
        </div>
      </div>
    </div>
  );
}

const desktopLabel =
  "font-display text-[16px] uppercase leading-[18px] tracking-[0.32px] text-black/40";
const desktopValue = "text-[28px] leading-[36px] tracking-[-0.28px] text-black/90";

function DesktopField({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-[1.46px] ${className ?? ""}`}>
      <p className={desktopLabel}>{title}</p>
      {children}
    </div>
  );
}

function DesktopCard() {
  return (
    <div className="mx-auto mt-[52px] hidden w-fit items-start gap-3 overflow-clip rounded-[46px] bg-white px-11 pt-11 pb-8 lg:flex">
      <div className="flex h-[454px] w-[291px] shrink-0 flex-col gap-6 border-r border-black/5">
        <div className="pointer-events-none relative aspect-[272/407] w-[272px] overflow-clip rounded-[14.595px] border-[0.73px] border-[#e5e7eb]">
          <div className="absolute left-[-0.27%] top-[-0.18%] h-[88.75%] w-[100.34%] rounded-[14.595px] bg-[#d9d9d9]" />
          <div className="absolute left-[-23.61%] top-[-7.89%] h-[109.82%] w-[146.64%]">
            <img
              alt="Мария Мельничук"
              className="absolute left-0 top-[0.06%] h-[99.91%] w-full max-w-none"
              src={asset("/figma/portrait.webp")}
            />
          </div>
        </div>
        <div className="flex w-[272px] items-center justify-between">
          <p className="text-[18px] leading-[23px] tracking-[-0.18px] text-black/80">Moscow, Russia</p>
          <img alt="" className="size-[18px]" src={asset("/figma/arrow-up-right.svg")} />
        </div>
      </div>
      <div className="flex w-[550px] shrink-0 flex-col items-end gap-6">
        <div className="relative flex w-full flex-col items-start gap-12">
          <h1 className="font-display w-full text-[78px] uppercase leading-[0.77] tracking-[0.02em] text-black/50">
            product designer
          </h1>
          <div className="flex w-[336px] flex-col gap-[26px] pl-[5px]">
            <div className="flex items-start gap-11 uppercase">
              <DesktopField title="name" className="w-[108px] shrink-0">
                <p className={`${desktopValue} font-medium`}>Мария</p>
              </DesktopField>
              <DesktopField title="First name">
                <p className={`${desktopValue} font-medium`}>Мельничук</p>
              </DesktopField>
            </div>
            <div className="flex flex-col gap-3.5">
              <DesktopField title="focus">
                <p className={desktopValue}>Mobile &amp; Web Interfaces</p>
              </DesktopField>
              <DesktopField title="Tools">
                <p className={desktopValue}>Figma / Jira / Ai</p>
              </DesktopField>
            </div>
          </div>
          <div className="flex items-center gap-2.5 pl-1.5">
            <a
              href={`mailto:${site.email}`}
              aria-label="Написать на почту"
              className="rounded-full transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#338ff5]"
            >
              <MailIcon className="size-[50px]" />
            </a>
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Написать в Telegram"
              className="relative size-[50px] shrink-0 overflow-clip rounded-full transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#338ff5]"
            >
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/telegram.svg")} />
            </a>
          </div>
          <div aria-hidden className="pointer-events-none absolute top-[68px] left-[350px] h-[347px] w-[337px]">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/pattern.svg")} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3.5">
          <p className="font-label text-[8px] font-medium tracking-[1.31px] whitespace-pre text-[rgba(26,33,46,0.42)]">
            {"ID / 0426   •   VALID   •   DESIGN DEPT"}
          </p>
          <img alt="" className="size-[18px]" src={asset("/figma/globe.svg")} />
        </div>
      </div>
    </div>
  );
}

export function ProfileCard() {
  return (
    <section id="profile" aria-label="Профиль" className="scroll-mt-6">
      <div className="px-4 lg:hidden">
        <div className="@container mx-auto mt-10 w-full max-w-[720px]">
          <div className="flex flex-col gap-[2.79cqw] overflow-clip rounded-[5.03cqw] bg-white px-[3.35cqw] pt-[4.47cqw] pb-[3.35cqw]">
            <h1 className="font-display w-full text-[clamp(34px,12.85cqw,72px)] uppercase leading-[0.77] tracking-[0.02em] text-black/50">
              product designer
            </h1>
            <div className="flex items-stretch gap-[2.23cqw]">
              <div className="flex w-[48.32cqw] shrink-0 flex-col gap-[1.12cqw]">
                <Portrait />
                <div className="flex items-center justify-between">
                  <p className="text-[clamp(10px,2.79cqw,14px)] leading-none tracking-[-0.01em] text-black/60">Moscow, Russia</p>
                  <img alt="" className="size-[clamp(11px,3.2cqw,16px)] shrink-0" src={asset("/figma/arrow-up-right.svg")} />
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex flex-col gap-[3.63cqw] pt-[1.68cqw]">
                  <div className="flex flex-col gap-1.5 text-[clamp(18px,6.7cqw,28px)] font-medium leading-none tracking-[-0.01em] text-[#1a1a1a]/90">
                    <p>Мария</p>
                    <p>Мельничук</p>
                  </div>
                  <div className="flex flex-col gap-[2.23cqw] text-[clamp(13px,4.19cqw,18px)] font-medium leading-normal tracking-[-0.01em] text-black/60">
                    <div className="flex flex-col gap-px">
                      <p className="font-display text-[clamp(11px,3.35cqw,14px)] uppercase leading-none tracking-[0.02em] text-black/40">focus</p>
                      <p>Mobile &amp; Web Interfaces</p>
                    </div>
                    <div className="flex flex-col gap-px">
                      <p className="font-display text-[clamp(11px,3.35cqw,14px)] uppercase leading-none tracking-[0.02em] text-black/40">Tools</p>
                      <p>Figma / Jira / Ai</p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto flex flex-col gap-[2.2cqw] pt-[2.2cqw]">
                  <div className="flex items-center gap-[2.23cqw]">
                    <a
                      href={`mailto:${site.email}`}
                      aria-label="Написать на почту"
                      className="block size-[clamp(26px,8.38cqw,40px)] shrink-0 rounded-full"
                    >
                      <MailIcon className="size-full" />
                    </a>
                    <a
                      href={site.telegramUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Написать в Telegram"
                      className="relative size-[clamp(26px,8.38cqw,40px)] shrink-0 overflow-clip rounded-full"
                    >
                      <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/telegram.svg")} />
                    </a>
                  </div>
                  <div className="flex justify-end">
                    <img alt="" className="size-[clamp(12px,3.71cqw,16px)]" src={asset("/figma/globe.svg")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DesktopCard />
    </section>
  );
}
