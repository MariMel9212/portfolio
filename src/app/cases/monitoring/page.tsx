import type { Metadata } from "next";
import type { ReactNode } from "react";
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

const col = "ml-[clamp(16px,24.027vw,346px)] mr-4 max-w-[742px]";
const wide = "ml-[clamp(16px,24.027vw,346px)] mr-4 max-w-[834px]";
const h1 = "text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-white";
const h2 = "text-[22px] font-semibold leading-[1.3] tracking-[-0.005em] text-white";
const body = "text-[16px] leading-[1.65] text-white/80";
const caption = "text-[13px] leading-[1.5] text-white/50";

const mixedLinks = [
  {
    name: "Waymo",
    href: "https://medium.com/@michael.wishart1990/waymo-operations-center-3ac5862688d4",
    src: "/figma/case/mixed-e5dda.webp",
    style: { left: "10.12%", top: "4.29%", width: "15.34%", height: "42.63%" },
    imgStyle: { height: "93.3%" },
    overlay: true,
  },
  {
    name: "Tesla",
    href: "https://www.tesla.com/fsd/safety",
    src: "/figma/case/mixed-640d3.webp",
    style: { left: "28.35%", top: "4.29%", width: "14.93%", height: "42.63%" },
    imgStyle: { height: "95.3%" },
    overlay: true,
  },
  {
    name: "Cruise",
    href: "https://medium.com/@sanidhyacomnetinfo/what-digital-security-precautions-has-cruise-implemented-for-their-remote-access-software-caef1cddcb76",
    src: "/figma/case/mixed-cad7e.webp",
    style: { left: "10.07%", top: "52.77%", width: "15.27%", height: "42.78%" },
    imgStyle: { height: "92.3%" },
    overlay: false,
  },
  {
    name: "Zoox",
    href: "https://webbingsolutions.com/scaling-robotaxis-requires-more-than-autonomy/",
    src: "/figma/case/mixed-5334f.webp",
    style: { left: "28.35%", top: "52.77%", width: "15.3%", height: "42.3%" },
    imgStyle: { height: "90.1%" },
    overlay: true,
  },
] as const;

const mixedOverflow = [
  { src: "/figma/case/mixed-18ad6.webp", style: { left: "57.55%", top: "-34.34%", width: "25.54%", height: "38.64%" } },
  { src: "/figma/case/mixed-8672f.webp", style: { left: "57.07%", top: "6.82%", width: "26.02%", height: "35.1%" } },
  { src: "/figma/case/mixed-8f848.webp", style: { left: "84.29%", top: "-1.52%", width: "15.95%", height: "20.71%" } },
  { src: "/figma/case/mixed-d064a.webp", style: { left: "84.29%", top: "21.72%", width: "29.38%", height: "38.64%" } },
  { src: "/figma/case/mixed-4c3de.webp", style: { left: "61.75%", top: "44.44%", width: "21.34%", height: "28.03%" } },
  { src: "/figma/case/mixed-0e57f.webp", style: { left: "84.53%", top: "62.88%", width: "19.3%", height: "21.72%" } },
  { src: "/figma/case/mixed-a3b8b.webp", style: { left: "59.71%", top: "75%", width: "23.62%", height: "31.82%" } },
  { src: "/figma/case/mixed-18ad6.webp", style: { left: "84.53%", top: "87.12%", width: "24.58%", height: "37.37%" } },
] as const;

function Board({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <div
      className={`relative h-[min(396px,27.5vw)] min-h-[220px] w-[min(834px,100%)] shrink-0 overflow-hidden rounded-[22px] bg-white/8 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function MixedBoard() {
  return (
    <Board>
      {mixedOverflow.map((item, i) => (
        <img
          key={`${item.src}-${i}`}
          alt=""
          src={asset(item.src)}
          className="pointer-events-none absolute max-w-none object-cover"
          style={item.style}
        />
      ))}
      {mixedLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="absolute flex flex-col"
          style={item.style}
        >
          <span className="relative block min-h-0 flex-1 overflow-hidden" style={item.imgStyle}>
            <img alt="" src={asset(item.src)} className="absolute inset-0 size-full object-cover" />
            {item.overlay ? <span className="absolute inset-0 bg-black/27" /> : null}
          </span>
          <span className="mt-auto pt-1 text-[7.5px] leading-none tracking-[0.075px] text-[#0682da] underline">
            Подробнее
          </span>
        </a>
      ))}
    </Board>
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

          <div className="relative mt-10 flex min-h-[173px] w-[min(632px,100%)] items-center gap-[57px] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-4 max-[700px]:pl-4 min-[701px]:ml-[max(16px,calc(clamp(16px,24.027vw,346px)-99px))]">
            <div className="relative hidden h-[173px] w-[42px] shrink-0 min-[701px]:block" aria-hidden>
              <p className="font-bracket absolute top-[-34px] left-[-10px] text-[158.733px] leading-none tracking-[3.17px] text-[#fffbfb] opacity-[0.06]">
                (
              </p>
            </div>
            <div className="flex w-full max-w-[434px] flex-col gap-4">
              <h2 className={h2}>Сервис должен помогать:</h2>
              <ul className={`${body} space-y-1`}>
                {duties.map((item) => (
                  <li key={item}>– {item}</li>
                ))}
              </ul>
            </div>
            <div className="relative hidden h-[173px] w-[42px] shrink-0 min-[701px]:block" aria-hidden>
              <p className="font-bracket absolute top-[-34px] left-0 text-[158.733px] leading-none tracking-[3.17px] text-[#fffbfb] opacity-[0.06]">
                )
              </p>
            </div>
          </div>

          <hr className="mx-auto mt-12 h-px w-[min(1248px,calc(100%-32px))] border-0 bg-white/20" />

          <div className={`${col} mt-12`}>
            <h1 className={h1}>Исследование</h1>

            <h2 className={`${h2} mt-8`}>Кто такие инженеры мониторинга</h2>
            <p className={`${body} mt-3`}>
              Первым делом я решила изучить, кто же такие инженеры центра мониторинга, из чего состоит их работа, с какими задачами они сталкиваются каждый день и какая информация нужна им, чтобы быстро понимать, что происходит с&nbsp;автомобилем
            </p>
          </div>
          <div className={`${wide} mt-6`}>
            <img
              alt="Вакансии и описания специальности инженера мониторинга"
              className="aspect-[834/396] w-full rounded-[22px] object-cover"
              src={asset("/figma/case/jobs.webp")}
            />
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

          <div className="mt-6" style={{ marginInline: "calc(50% - 50vw)" }}>
            <DragCarousel>
              <div className="flex w-max gap-[25px] pl-[max(16px,calc((100vw-1440px)/2+346px),24.027vw)] pr-8 [&>*]:snap-start">
                <img
                  alt="Логотипы Tesla, Samsara, ГдеМои, Waymo, Zoox и Cruise"
                  className="h-[min(396px,27.5vw)] min-h-[220px] w-[min(834px,calc(100vw-48px))] shrink-0 rounded-[22px] object-cover"
                  src={asset("/figma/case/logos.webp")}
                />
                <Board>
                  <img
                    alt="Интерфейс разметки сцены для автономного автомобиля"
                    src={asset("/figma/case/ui.webp")}
                    className="absolute object-cover"
                    style={{ left: "8.15%", top: "0.5%", width: "83.69%", height: "99.24%" }}
                  />
                </Board>
                <MixedBoard />
              </div>
            </DragCarousel>
          </div>
          <div className={col}>
            <p className={`${caption} mt-3`}>При поиске смотрела не только на конкретные системы мониторинга</p>
          </div>

          <div className={`${col} mt-12`}>
            <h2 className={h2}>Что я поняла</h2>
            <p className={`${body} mt-3`}>
              <strong className="font-semibold text-white">
                В таких системах особенно важно быстро отделять нормальное состояние от проблемного.
              </strong>{" "}
              При большом количестве машин оператор не должен искать проблему — система сама должна подсказывать, куда смотреть в первую очередь
            </p>
            <div className="mt-6 rounded-[14px] bg-white/[0.06] px-5 py-4">
              <p className={body}>
                <strong className="font-semibold text-white">Подробности — на втором уровне.</strong> Подробная информация нужна уже после того, как проблема найдена. На первом уровне достаточно самого важного: что произошло, с какой машиной и насколько это критично
              </p>
            </div>
          </div>

          <hr className="mx-auto mt-14 h-px w-[min(1248px,calc(100%-32px))] border-0 bg-white/20" />
        </div>
      </div>
    </div>
  );
}
