import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { asset } from "@/lib/asset";
import { DragCarousel } from "@/components/cases/drag-carousel";

export const metadata: Metadata = {
  title: "Мониторинг беспилотного автопарка — Мария Мельничук",
  description: "Кейс: сервис мониторинга беспилотного транспорта для инженеров центра мониторинга.",
};

const duties = [
  "Отслеживать состояние автомобилей",
  "Выявлять проблемы",
  "Быстро реагировать на инциденты",
  "Принимать решение о дальнейших действиях",
];

const col = "ml-[clamp(16px,24.027vw,346px)] mr-4 max-w-[834px]";
const wide = "ml-[clamp(16px,24.027vw,346px)] mr-4 max-w-[834px]";
const h1 = "text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-white";
const h2 = "text-[22px] font-semibold leading-[1.3] tracking-[-0.005em] text-white";
const body = "text-[16px] leading-[1.65] text-white/80";
const caption = "text-[13px] leading-[1.5] text-white/50";

const sources = [
  {
    name: "Waymo",
    note: "Центр удалённой помощи",
    href: "https://medium.com/@michael.wishart1990/waymo-operations-center-3ac5862688d4",
    src: "/figma/case/mixed-e5dda.webp",
  },
  {
    name: "Tesla",
    note: "Данные с автомобиля",
    href: "https://www.tesla.com/fsd/safety",
    src: "/figma/case/mixed-640d3.webp",
  },
  {
    name: "Cruise",
    note: "Мониторинг парка",
    href: "https://medium.com/@sanidhyacomnetinfo/what-digital-security-precautions-has-cruise-implemented-for-their-remote-access-software-caef1cddcb76",
    src: "/figma/case/mixed-cad7e.webp",
  },
  {
    name: "Zoox",
    note: "Удалённые подсказки машине",
    href: "https://webbingsolutions.com/scaling-robotaxis-requires-more-than-autonomy/",
    src: "/figma/case/mixed-5334f.webp",
  },
] as const;

const cardBase = "w-[var(--cw)] shrink-0 snap-start";
const visual = "relative aspect-[834/396] w-full overflow-hidden rounded-[22px] bg-white/[0.07]";

function CardText({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-4 pr-2">
      <h3 className="text-[16px] font-semibold leading-snug text-white">{title}</h3>
      <p className="mt-1 text-[13px] leading-[1.5] text-white/55">{text}</p>
    </div>
  );
}

function SourcesGrid() {
  return (
    <div className={`${visual} grid grid-cols-2 gap-2 p-2`}>
      {sources.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-[16px] bg-black/40"
        >
          <img
            alt={`${item.name}: пример интерфейса`}
            src={asset(item.src)}
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10">
            <span>
              <span className="block text-[15px] font-semibold leading-tight text-white">{item.name}</span>
              <span className="block text-[12px] leading-tight text-white/65">{item.note}</span>
            </span>
            <span className="text-[12px] text-white/70 transition group-hover:text-white">Источник ↗</span>
          </span>
        </a>
      ))}
    </div>
  );
}

export default function MonitoringCasePage() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-[#161616] text-[#fffbfb]"
      style={{ ["--s" as string]: "100vw" }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden"
        style={{ height: "calc(var(--s) * 0.9423)" }}
        aria-hidden
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 overflow-hidden"
          style={{
            top: "calc(var(--s) * 0.51836)",
            width: "calc(var(--s) * 1.27368)",
            height: "calc(var(--s) * 0.37535)",
          }}
        >
          <img
            alt=""
            src={asset("/figma/case-desk.webp")}
            className="pointer-events-none absolute max-w-none"
            style={{ height: "191.07%", width: "100.05%", left: "-0.02%", top: "-49.54%" }}
          />
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[1440px]">
        <section
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 overflow-x-hidden"
          style={{ width: "var(--s)", aspectRatio: "1440 / 1356.84" }}
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
        </section>

        <div className="absolute inset-x-0 top-0 z-20">
          <SiteHeader tone="case" />
        </div>

        <div className="relative z-10 pb-[120px] pt-[max(520px,calc(var(--s)*0.68472))]">
          <div className={col}>
            <h1 className={h1}>Задача</h1>
            <p className={`${body} mt-4`}>
              Спроектировать сервис мониторинга беспилотного транспорта для инженеров центра мониторинга
            </p>
          </div>

          <div className={`${col} mt-10`}>
            <div className="flex w-full flex-col gap-3">
              <h2 className={h2}>Сервис должен помогать:</h2>
              <ul className={`${body} space-y-1`}>
                {duties.map((item) => (
                  <li key={item}>– {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="ml-[clamp(16px,24.027vw,346px)] mr-4 mt-12 h-px max-w-[834px] border-0 bg-white/45" />

          <div className={`${col} mt-12`}>
            <h1 className={h1}>Исследование</h1>

            <p className={`${body} mt-6`}>
              Первым делом я решила изучить, кто же такие инженеры центра мониторинга, из чего состоит их работа, с какими задачами они сталкиваются каждый день и какая информация нужна им, чтобы быстро понимать, что происходит с&nbsp;автомобилем
            </p>
          </div>
          <div className={`${wide} mt-6`}>
            <div className="relative aspect-[834/396] w-full overflow-hidden rounded-[22px] bg-white/[0.08]">
              {[1, 2, 3, 4].map((n) => (
                <img
                  key={n}
                  alt={`Вакансия инженера мониторинга ${n}`}
                  src={asset(`/figma/case/vac-${n}.webp`)}
                  className="absolute h-auto"
                  style={{ left: `${((n - 1) * 200 + 20) / 8.34}%`, top: "6.3%", width: `${194 / 8.34}%` }}
                />
              ))}
            </div>
            <p className={`${caption} mt-3`}>
              Пообщаться с реальными специалистами не удалось, поэтому я изучала целевых пользователей через вакансии и&nbsp;описания профильных специальностей в вузах и колледжах
            </p>
          </div>

          <div className={`${col} mt-12`}>
            <h2 className={h2}>Бенчмарки</h2>
            <p className={`${body} mt-3`}>
              Следующим шагом я посмотрела, как похожие задачи решают другие продукты, и собрала бенчмарки. Мне было важно понять, как в таких системах показывают большое количество данных, выделяют проблемные состояния и помогают пользователю быстро перейти от общей картины к конкретной ситуации
            </p>
          </div>

          <div
            className="mt-6"
            style={
              {
                ["--left" as string]: "clamp(16px, 24.027vw, 346px)",
                ["--sw" as string]: "min(870px, calc(min(100vw, 1440px) - var(--left)))",
                ["--cw" as string]: "calc(var(--sw) - 36px)",
                marginLeft: "var(--left)",
                width: "var(--sw)",
              } as CSSProperties
            }
          >
            <DragCarousel count={3}>
              <div className="flex w-max gap-[25px]" style={{ paddingRight: "calc(var(--sw) - var(--cw))" }}>
                <article data-card className={cardBase}>
                  <div className={visual}>
                    <img
                      alt="Логотипы Tesla, Samsara, ГдеМои, Waymo, Zoox и Cruise"
                      className="absolute inset-0 size-full object-cover"
                      src={asset("/figma/case/logos.webp")}
                    />
                  </div>
                  <CardText
                    title="Кого я изучала"
                    text="Tesla, Waymo, Cruise, Zoox, Samsara и «ГдеМои» — продукты, где оператор следит за большим парком машин"
                  />
                </article>
                <article data-card className={cardBase}>
                  <div className={visual}>
                    <img
                      alt="Интерфейс разметки сцены для автономного автомобиля"
                      className="absolute inset-0 size-full object-cover"
                      src={asset("/figma/case/ui.webp")}
                    />
                  </div>
                  <CardText
                    title="Как выглядит рабочее место оператора"
                    text="Вопрос по ситуации, фрагмент с камеры и один понятный ответ — без лишних элементов"
                  />
                </article>
                <article data-card className={cardBase}>
                  <SourcesGrid />
                  <CardText
                    title="Как это делают роботакси"
                    text="Четыре подробных разбора — нажми на карточку, чтобы открыть источник"
                  />
                </article>
              </div>
            </DragCarousel>
          </div>

          <div className={`${col} mt-12`}>
            <div className="rounded-[14px] bg-white/[0.06] px-5 py-4">
              <p className={body}>
                <strong className="font-semibold text-white">Подробности — на втором уровне.</strong> Подробная информация нужна уже после того, как проблема найдена. На первом уровне достаточно самого важного: что произошло, с какой машиной и насколько это критично
              </p>
            </div>
          </div>

          <hr className="ml-[clamp(16px,24.027vw,346px)] mr-4 mt-14 h-px max-w-[834px] border-0 bg-white/45" />
        </div>
      </div>
    </div>
  );
}
