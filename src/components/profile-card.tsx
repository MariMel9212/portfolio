import { asset } from "@/lib/asset"
import { MailIcon } from "@/components/mail-icon";
import { site } from "@/content/site";

const glow = "text-shadow-[0px_0px_1.46px_rgba(255,255,255,0.6)]";
const label = "font-display text-[16px] uppercase leading-normal tracking-[0.32px] text-black opacity-40";
const value = "text-[22px] leading-normal tracking-[-0.01em] text-black opacity-90 sm:text-[28px]";

function Field({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-[1.46px] ${className ?? ""}`}>
      <p className={label}>{title}</p>
      {children}
    </div>
  );
}

export function ProfileCard() {
  return (
    <section
      id="about"
      aria-label="Обо мне"
      className="relative mx-4 mt-10 flex scroll-mt-6 flex-col gap-6 overflow-clip rounded-[32px] bg-white p-5 sm:mx-auto sm:w-[600px] sm:p-8 md:mt-[52px] lg:w-fit lg:flex-row lg:items-center lg:gap-[26px] lg:rounded-[46px] lg:px-[44px] lg:pb-[32px] lg:pt-[44px]"
    >
      <div className="border-black/5 max-lg:border-b max-lg:pb-6 lg:h-[454px] lg:w-[298px] lg:shrink-0 lg:border-r">
        <div className="flex flex-col gap-[24px] lg:w-[272px]">
          <div className="pointer-events-none relative aspect-[272/407] w-full overflow-clip rounded-[14.595px] border-[0.73px] border-[#e5e7eb] drop-shadow-[0px_0px_1.46px_rgba(255,255,255,0.6)] max-lg:mx-auto max-lg:max-w-[340px]">
            <div className="absolute left-[-0.27%] top-[-0.18%] h-[88.75%] w-[100.34%] rounded-[14.595px]">
              <div aria-hidden className="absolute inset-0 rounded-[14.595px] bg-[#d9d9d9]" />
              <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0.73px_0px_0px_rgba(255,255,255,0.7)]" />
            </div>
            <div className="absolute left-[-23.61%] top-[-7.89%] h-[109.82%] w-[146.64%]">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt="Мария Мельничук"
                  className="absolute left-0 top-[0.06%] h-[99.91%] w-full max-w-none"
                  src={asset("/figma/portrait.webp")}
                />
              </div>
              <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0.73px_0px_0px_rgba(255,255,255,0.7)]" />
            </div>
          </div>
          <div className="flex w-full items-center justify-between max-lg:mx-auto max-lg:max-w-[340px]">
            <p className={`text-[18px] leading-normal tracking-[-0.18px] text-black opacity-80 ${glow}`}>Moscow, Russia</p>
            <div className="relative size-[18px] shrink-0 overflow-clip">
              <div className="absolute left-[3px] top-[3px] size-[13.136px]">
                <div className="absolute inset-[-22.22%]">
                  <img alt="" className="block size-full max-w-none" src={asset("/figma/arrow-up-right.svg")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-[24px] lg:w-[550px] lg:shrink-0">
        <div className="relative flex w-full flex-col items-start gap-8 sm:gap-[48px]">
          <h1 className="font-display w-full text-[42px] uppercase leading-[0.77] tracking-[0.02em] text-black opacity-50 text-shadow-[0px_0px_2.919px_rgba(255,255,255,0.6)] sm:text-[62px] lg:text-[78px]">
            product designer
          </h1>
          <div className="relative z-10 flex w-full flex-col gap-[26px] pl-[5px] sm:w-[336.415px]">
            <div className="flex w-full items-center gap-8 uppercase sm:gap-[44px]">
              <Field title="name" className="sm:w-[108px]">
                <p className={`${value} font-medium`}>Мария</p>
              </Field>
              <Field title="First name" className="justify-center">
                <p className={`${value} font-medium`}>Мельничук</p>
              </Field>
            </div>
            <div className="flex w-full flex-col gap-[14px]">
              <Field title="focus">
                <p className={value}>Mobile &amp; Web Interfaces</p>
              </Field>
              <Field title="Tools">
                <p className={value}>Figma / Jira / Ai</p>
              </Field>
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-[10px] pl-[6px] drop-shadow-[0px_0px_1.095px_rgba(255,255,255,0.6)]">
            <a
              href={`mailto:${site.email}`}
              aria-label="Написать на почту"
              className="rounded-full transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#338ff5]"
            >
              <MailIcon />
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
          <div aria-hidden className="absolute left-[350px] top-[68px] hidden h-[347.242px] w-[336.75px] lg:block">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/pattern.svg")} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-[14.595px] drop-shadow-[0px_0px_0.73px_rgba(255,255,255,0.6)]">
          <p className="font-label whitespace-pre text-[8.027px] font-medium leading-normal tracking-[1.3136px] text-[rgba(26,33,46,0.42)]">
            {"ID / 0426   •   VALID   •   DESIGN DEPT"}
          </p>
          <div className="relative size-[17.514px] shrink-0">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/globe.svg")} />
          </div>
        </div>
      </div>
    </section>
  );
}
