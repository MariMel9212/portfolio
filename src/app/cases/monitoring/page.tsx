import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Мониторинг беспилотного автопарка — Мария Мельничук",
  description: "Кейс: сервис мониторинга беспилотного транспорта для инженеров центра мониторинга.",
};

function Bracket({ side, className }: { side: "left" | "right"; className?: string }) {
  return (
    <svg viewBox="0 0 42 173" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        d={side === "left" ? "M34 8C10 36 8 70 10 86c2 18 4 52 24 80" : "M8 8C32 36 34 70 32 86c-2 18-4 52-24 80"}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

const duties = [
  "Отслеживать состояние автомобилей",
  "Выявлять проблемы",
  "Быстро реагировать на инциденты",
  "Принимать решение о дальнейших действиях",
];

export default function MonitoringCasePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#161616] text-[#fffbfb]">
      <main>
        <section
          className="relative w-full overflow-x-hidden bg-[#161616]"
          style={{ aspectRatio: "1440 / 1356.84" }}
          aria-label="Обложка кейса"
        >
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: "9.224%",
              width: "127.368%",
              height: "85.618%",
            }}
          >
            <div
              className="absolute left-0 overflow-hidden"
              style={{ top: "53.475%", width: "100%", height: "46.525%" }}
            >
              <img
                alt=""
                src={asset("/figma/case-desk.webp")}
                className="pointer-events-none absolute max-w-none"
                style={{ height: "191.07%", width: "100.05%", left: "-0.02%", top: "-49.54%" }}
              />
            </div>
            <div
              className="absolute"
              style={{
                left: "23.403%",
                top: 0,
                width: "52.711%",
                height: "59.956%",
              }}
            >
              <div
                aria-hidden
                className="absolute rounded-[19px] opacity-70 blur-[15px]"
                style={{
                  left: 0,
                  top: "95.796%",
                  width: "99.083%",
                  height: "3.392%",
                  background:
                    "radial-gradient(ellipse at center, rgb(28 24 24) 0%, rgb(88 63 52 / 0.72) 100%)",
                }}
              />
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt="Монитор с интерфейсом центра мониторинга"
                  src={asset("/figma/case-monitor.webp")}
                  className="pointer-events-none absolute max-w-none"
                  style={{ height: "100%", width: "128.01%", left: "-14.01%", top: 0 }}
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-0 z-10">
            <SiteHeader tone="case" />
          </div>
        </section>

        <div className="mx-auto flex w-full max-w-[834px] flex-col px-4 pb-24 pt-10 sm:px-6 sm:pt-16">
          <h1 className="font-display text-[40px] leading-[0.77] tracking-[0.02em] sm:text-[54px]">Задача</h1>
          <p className="mt-6 max-w-[694px] text-[16px] font-medium leading-snug opacity-95 sm:text-[18px]">
            Спроектировать сервис мониторинга беспилотного транспорта для инженеров центра мониторинга
          </p>

          <div className="relative mt-12 max-w-[434px] sm:mt-16">
            <Bracket side="left" className="absolute top-1/2 -left-14 hidden h-[118%] w-9 -translate-y-1/2 text-white/25 sm:block" />
            <Bracket side="right" className="absolute top-1/2 -right-16 hidden h-[118%] w-9 -translate-y-1/2 text-white/25 sm:block" />
            <h2 className="font-display text-[28px] leading-[0.77] tracking-[0.02em] sm:text-[34px]">Сервис должен помогать:</h2>
            <ul className="mt-5 space-y-1 text-[16px] font-medium leading-snug opacity-95 sm:text-[18px]">
              {duties.map((item) => (
                <li key={item}>– {item}</li>
              ))}
            </ul>
          </div>

          <hr className="mt-16 border-0 border-t border-white/20 sm:mt-20" />

          <p className="mt-12 text-[16px] font-medium leading-snug opacity-95 sm:mt-14 sm:text-[18px]">
            Первым делом я решила изучить, кто же такие инженеры центра мониторинга, из чего состоит их работа, с какими задачами они сталкиваются каждый день и какая информация нужна им, чтобы быстро понимать, что происходит с&nbsp;автомобилем
          </p>

          <img
            alt="Вакансии и описания специальности инженера мониторинга"
            className="mt-8 w-full rounded-[22px]"
            src={asset("/figma/case-jobs.webp")}
          />
          <p className="mt-4 text-[12px] font-medium leading-snug opacity-60">
            Пообщаться с реальными специалистами не удалось, поэтому я изучала целевых пользователей через вакансии и&nbsp;описания профильных специальностей в вузах и колледжах
          </p>

          <h2 className="mt-16 font-display text-[28px] leading-[0.77] tracking-[0.02em] sm:mt-20 sm:text-[34px]">Основные</h2>
          <ul className="mt-5 space-y-1 text-[16px] font-medium leading-snug opacity-95 sm:text-[18px]">
            {duties.map((item) => (
              <li key={`main-${item}`}>– {item}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
