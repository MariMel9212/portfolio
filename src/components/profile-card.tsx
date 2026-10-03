import { asset } from "@/lib/asset"
import { MailIcon } from "@/components/mail-icon";
import { site } from "@/content/site";

const glow = "text-shadow-[0px_0px_1.46px_rgba(255,255,255,0.6)]";
const label = "font-display text-[12px] uppercase leading-[14px] tracking-[0.24px] text-black opacity-40 lg:text-[16px] lg:leading-[18px] lg:tracking-[0.32px]";
const value = "text-[16px] leading-[21px] tracking-[-0.01em] text-black opacity-90 sm:text-[18px] sm:leading-[24px] lg:text-[28px] lg:leading-[36px]";

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
      className="@container relative mx-4 mt-10 grid scroll-mt-6 grid-cols-[minmax(0,1fr)_132px] items-start gap-x-4 gap-y-6 overflow-clip rounded-[32px] bg-white p-5 sm:mx-auto sm:w-[600px] sm:grid-cols-[minmax(0,1fr)_220px] sm:gap-x-6 sm:p-8 md:mt-[52px] lg:flex lg:w-fit lg:flex-row lg:items-start lg:gap-[12px] lg:rounded-[46px] lg:px-[44px] lg:pb-[32px] lg:pt-[44px]"
    >
      <div className="contents lg:flex lg:h-[454px] lg:w-[291px] lg:shrink-0 lg:flex-col lg:gap-[24px] lg:border-r lg:border-black/5">
          <div className="pointer-events-none relative col-start-2 row-start-2 aspect-[800/896] w-full overflow-clip rounded-[14.595px] border-[0.73px] border-[#e5e7eb] drop-shadow-[0px_0px_1.46px_rgba(255,255,255,0.6)] lg:col-auto lg:row-auto lg:aspect-[272/407] lg:w-[272px]">
            <img
              alt="Мария Мельничук"
              className="size-full object-contain lg:hidden"
              src={asset("/figma/portrait.webp")}
            />
            <div className="absolute inset-0 hidden lg:block">
              <div className="absolute left-[-0.27%] top-[-0.18%] h-[88.75%] w-[100.34%] rounded-[14.595px]">
                <div aria-hidden className="absolute inset-0 rounded-[14.595px] bg-[#d9d9d9]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0.73px_0px_0px_rgba(255,255,255,0.7)]" />
              </div>
              <div className="absolute left-[-23.61%] top-[-7.89%] h-[109.82%] w-[146.64%]">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    alt=""
                    className="absolute left-0 top-[0.06%] h-[99.91%] w-full max-w-none"
                    src={asset("/figma/portrait.webp")}
                  />
                </div>
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0.73px_0px_0px_rgba(255,255,255,0.7)]" />
              </div>
            </div>
          </div>
          <div className="col-span-2 row-start-4 flex w-full items-center justify-between lg:col-auto lg:row-auto lg:w-[272px]">
            <p className={`text-[14px] leading-[18px] tracking-[-0.14px] text-black opacity-45 lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.18px] lg:opacity-80 ${glow}`}>Moscow, Russia</p>
            <div className="relative size-[14px] shrink-0 overflow-clip opacity-50 lg:size-[18px] lg:opacity-100">
              <div className="absolute left-[3px] top-[3px] size-[13.136px]">
                <div className="absolute inset-[-22.22%]">
                  <img alt="" className="block size-full max-w-none" src={asset("/figma/arrow-up-right.svg")} />
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="contents lg:flex lg:w-[550px] lg:shrink-0 lg:flex-col lg:items-end lg:gap-[24px]">
        <div className="contents lg:relative lg:flex lg:w-full lg:flex-col lg:items-start lg:gap-[48px]">
          <h1 className="font-display col-span-2 row-start-1 w-full whitespace-nowrap text-[length:14.45cqw] uppercase leading-none tracking-[0.01em] text-black opacity-50 text-shadow-[0px_0px_2.919px_rgba(255,255,255,0.6)] lg:col-auto lg:row-auto lg:w-[550px] lg:text-[78px] lg:leading-[0.77] lg:tracking-[0.02em]">
            product designer
          </h1>
          <div className="relative z-10 col-start-1 row-start-2 flex w-full min-w-0 flex-col gap-6 lg:col-auto lg:row-auto lg:w-[336.415px] lg:gap-[26px] lg:pl-[5px]">
            <div className="flex w-full items-start gap-3 uppercase lg:gap-[44px]">
              <Field title="name" className="shrink-0 lg:w-[108px]">
                <p className={`${value} font-medium`}>Мария</p>
              </Field>
              <Field title="First name" className="justify-center">
                <p className={`${value} font-medium`}>Мельничук</p>
              </Field>
            </div>
            <div className="flex w-full flex-col gap-5 lg:gap-[14px]">
              <Field title="focus">
                <p className={value}>Mobile &amp; Web Interfaces</p>
              </Field>
              <Field title="Tools">
                <p className={value}>Figma / Jira / Ai</p>
              </Field>
            </div>
          </div>
          <div className="relative z-10 col-span-2 row-start-3 flex items-center gap-[10px] drop-shadow-[0px_0px_1.095px_rgba(255,255,255,0.6)] lg:col-auto lg:row-auto lg:pl-[6px]">
            <a
              href={`mailto:${site.email}`}
              aria-label="Написать на почту"
              className="rounded-full transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#338ff5]"
            >
              <MailIcon className="size-9 lg:size-[50px]" />
            </a>
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Написать в Telegram"
              className="relative size-9 shrink-0 overflow-clip rounded-full transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#338ff5] lg:size-[50px]"
            >
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/telegram.svg")} />
            </a>
          </div>
          <div aria-hidden className="absolute left-[350px] top-[68px] hidden h-[347.242px] w-[336.75px] lg:block">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/pattern.svg")} />
          </div>
        </div>
        <div className="hidden items-center justify-end gap-[14.595px] drop-shadow-[0px_0px_0.73px_rgba(255,255,255,0.6)] lg:flex">
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
