import { asset } from "@/lib/asset";
import { MailIcon } from "@/components/mail-icon";
import { site } from "@/content/site";

const label =
  "font-display text-[clamp(10px,2.25cqw,18px)] uppercase leading-[1.125] tracking-[0.02em] text-black/40";
const value =
  "text-[clamp(14px,4.35cqw,34px)] leading-[1.286] tracking-[-0.01em] text-black/90";

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
      <p className="text-[clamp(12px,2.53cqw,20px)] leading-none tracking-[-0.01em] text-black/80">Moscow, Russia</p>
      <img alt="" className="size-[clamp(12px,2.53cqw,20px)] shrink-0" src={asset("/figma/arrow-up-right.svg")} />
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
    <div className="mt-auto hidden items-center justify-end gap-[clamp(8px,2cqw,15px)] @min-[560px]:flex">
      <p className="font-label whitespace-pre text-[clamp(7px,1.13cqw,8.5px)] font-medium leading-normal tracking-[0.16em] text-[rgba(26,33,46,0.42)]">
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
        <div className="flex flex-col gap-[3.52cqw] overflow-clip rounded-[3.4cqw] bg-white p-[3.094cqw]">
          <h1 className="font-display w-full whitespace-nowrap text-[clamp(28px,11.5cqw,110px)] uppercase leading-[0.77] tracking-[0.02em] text-black/50 text-shadow-[0px_0px_2.919px_rgba(255,255,255,0.6)]">
            product designer
          </h1>
          <div className="flex items-stretch gap-[1.69cqw]">
            <div className="flex w-[42.47cqw] shrink-0 flex-col gap-[2.67cqw] border-r border-black/[0.06] pr-[1.4cqw]">
              <Portrait />
              <Moscow />
            </div>
            <div className="flex min-w-0 flex-1 flex-col pt-[1.4cqw]">
              <div className="flex flex-col gap-[3.66cqw]">
                <div className="flex items-start gap-[clamp(12px,8.7cqw,62px)] uppercase">
                  <Field title="name" className="shrink-0">
                    <p className={`${value} font-medium`}>Мария</p>
                  </Field>
                  <Field title="First name" className="min-w-0">
                    <p className={`${value} font-medium`}>Мельничук</p>
                  </Field>
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
              <div className="mt-[9.1cqw]">
                <Contacts />
              </div>
              <IdLine />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
