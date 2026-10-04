import { asset } from "@/lib/asset";
import { MailIcon } from "@/components/mail-icon";
import { site } from "@/content/site";

const label =
  "font-display text-[clamp(11px,1.5cqw,12px)] uppercase leading-none tracking-[0.06em] text-black/40";
const value =
  "max-w-full break-words text-[clamp(15px,2.8cqw,22px)] leading-snug tracking-[-0.01em] text-black/80";

function Field({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-1 ${className ?? ""}`}>
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
    <div className="flex items-center gap-2">
      <p className="text-[clamp(13px,1.7cqw,15px)] leading-none tracking-[-0.01em] text-black/45">Moscow, Russia</p>
      <img alt="" className="size-3.5 shrink-0 opacity-40" src={asset("/figma/arrow-up-right.svg")} />
    </div>
  );
}

function Contacts() {
  const button =
    "size-11 shrink-0 rounded-full transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#338ff5]";
  return (
    <div className="flex items-center gap-2.5">
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
      <p className="font-label whitespace-pre text-[11px] font-medium leading-none tracking-[0.14em] text-[rgba(26,33,46,0.42)]">
        {"ID / 0426   •   VALID   •   DESIGN DEPT"}
      </p>
      <img alt="" className="size-[clamp(12px,2.46cqw,18px)] shrink-0" src={asset("/figma/globe.svg")} />
    </div>
  );
}

export function ProfileCard() {
  return (
    <section id="about" aria-label="Обо мне" className="scroll-mt-6 px-4 md:px-6">
      <div className="@container mx-auto mt-10 w-full max-w-[760px] md:mt-[52px]">
        <div className="flex flex-col gap-5 overflow-clip rounded-[3.4cqw] bg-white p-[clamp(16px,3.2cqw,28px)] sm:gap-6">
          <h1 className="font-display w-full whitespace-nowrap text-[clamp(32px,8.4cqw,64px)] uppercase leading-none tracking-[0.02em] text-black/50 text-shadow-[0px_0px_2.919px_rgba(255,255,255,0.6)]">
            product designer
          </h1>
          <div className="grid grid-cols-[minmax(0,42%)_minmax(0,1fr)] gap-x-4 sm:gap-x-6">
            <div>
              <Portrait />
            </div>
            <div className="flex min-w-0 items-center">
              <div className="flex w-full min-w-0 flex-col gap-5">
                <div className="flex min-w-0 flex-wrap items-start gap-x-6 gap-y-3 uppercase">
                  <Field title="name" className="shrink-0">
                    <p className={`${value} font-medium`}>Мария</p>
                  </Field>
                  <Field title="First name" className="min-w-0">
                    <p className={`${value} font-medium`}>Мельничук</p>
                  </Field>
                </div>
                <div className="flex flex-col gap-4">
                  <Field title="focus">
                    <p className={value}>Mobile &amp; Web Interfaces</p>
                  </Field>
                  <Field title="Tools">
                    <p className={value}>Figma / Jira / Ai</p>
                  </Field>
                </div>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-subgrid items-center pt-4">
              <Moscow />
              <div className="flex items-center gap-4">
                <div className="-translate-y-[12px]">
                  <Contacts />
                </div>
                <IdLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
