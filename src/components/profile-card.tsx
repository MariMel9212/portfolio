import { asset } from "@/lib/asset";
import { MailIcon } from "@/components/mail-icon";
import { site } from "@/content/site";

const label =
  "font-display text-[clamp(10px,2.25cqw,18px)] uppercase leading-[1.125] tracking-[0.02em] text-black/40";
const value =
  "max-w-full break-words text-[clamp(13px,3.7cqw,28px)] leading-[1.286] tracking-[-0.01em] text-black/80";
const name =
  "max-w-full break-words text-[clamp(20px,5.4cqw,42px)] font-normal uppercase leading-[1.15] tracking-[-0.01em] text-black/80";

function Field({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-[0.2cqw] ${className ?? ""}`}>
      <p className={label}>{title}</p>
      {children}
    </div>
  );
}

function Portrait() {
  return (
    <div className="pointer-events-none relative aspect-[272/407] w-full overflow-clip rounded-[2.05cqw] border-[0.73px] border-[#e5e7eb]">
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

function Moscow() {
  return (
    <div className="flex w-full items-center justify-between gap-[1cqw]">
      <p className="text-[clamp(12px,2.2cqw,16px)] leading-none tracking-[-0.01em] text-black/40">Moscow, Russia</p>
      <img alt="" className="size-[clamp(11px,2.2cqw,16px)] shrink-0 opacity-40" src={asset("/figma/arrow-up-right.svg")} />
    </div>
  );
}

function Contacts() {
  const button =
    "size-[clamp(32px,7.03cqw,56px)] shrink-0 rounded-full transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#338ff5]";
  return (
    <div className="flex items-center gap-[clamp(8px,1.4cqw,10px)]">
      <a href={`mailto:${site.email}`} aria-label="Написать на почту" className={button}>
        <MailIcon className="size-full" />
      </a>
      <a
        href={site.telegramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в Telegram"
        className={`relative overflow-clip ${button}`}
      >
        <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/telegram.svg")} />
      </a>
    </div>
  );
}

function IdLine() {
  return (
    <div className="ml-auto hidden items-center justify-end gap-[clamp(8px,2cqw,15px)] @min-[560px]:flex">
      <p className="font-label whitespace-pre text-[clamp(7px,1.13cqw,8.5px)] font-medium leading-normal tracking-[0.16em] text-[rgba(26,33,46,0.42)]">
        {"ID / 0426   •   VALID   •   DESIGN DEPT"}
      </p>
      <img alt="" className="size-[clamp(12px,2.46cqw,18px)] shrink-0" src={asset("/figma/globe.svg")} />
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
    <section id="about" aria-label="Обо мне" className="scroll-mt-6">
      <div className="px-4 md:px-6 lg:hidden">
      <div className="@container mx-auto mt-10 w-full max-w-[760px] md:mt-[52px]">
        <div className="flex flex-col gap-[2cqw] overflow-clip rounded-[3.4cqw] bg-white px-[3.094cqw] pb-[3.094cqw] pt-[5.6cqw]">
          <h1 className="font-display w-full whitespace-nowrap text-[clamp(28px,11.5cqw,110px)] uppercase leading-[0.77] tracking-[0.02em] text-black/50 text-shadow-[0px_0px_2.919px_rgba(255,255,255,0.6)]">
            product designer
          </h1>
          <div className="grid grid-cols-[42.47cqw_minmax(0,1fr)] gap-x-[1.69cqw]">
            <div>
              <Portrait />
            </div>
            <div className="min-w-0 self-start pt-[1.4cqw] pr-[clamp(8px,1.8cqw,16px)]">
              <div className="flex min-w-0 flex-col gap-[3.66cqw]">
                <div className="flex flex-col gap-[0.3cqw]">
                  <p className={name}>Мария</p>
                  <p className={name}>Мельничук</p>
                </div>
                <div className="flex flex-col gap-[1.97cqw]">
                  <Field title="focus">
                    <p className={value}>Mobile &amp; Web Interfaces</p>
                  </Field>
                  <Field title="Tools">
                    <p className={value}>Figma / Jira / Ai</p>
                  </Field>
                </div>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-subgrid items-center pt-[clamp(4px,1cqw,8px)]">
              <Moscow />
              <div className="flex items-center pr-[clamp(8px,1.8cqw,16px)]">
                <div className="-translate-y-[12px]">
                  <Contacts />
                </div>
                <IdLine />
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
