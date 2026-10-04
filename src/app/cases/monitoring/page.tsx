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
      <SiteHeader tone="case" />
      <main>
        <section className="mt-2 w-full sm:mt-4" aria-label="Обложка кейса">
          <img
            alt="Монитор с интерфейсом центра мониторинга на деревянной столешнице"
            className="mx-auto block w-full max-w-[1440px]"
            src={asset("/figma/case-hero.webp")}
          />
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
