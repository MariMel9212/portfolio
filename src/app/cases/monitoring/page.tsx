import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { asset } from "@/lib/asset";
import { DragCarousel } from "@/components/cases/drag-carousel";
import { CaseOutline } from "@/components/cases/case-outline";
import { DragPan } from "@/components/cases/drag-pan";

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


const hrCls = "ml-[clamp(16px,24.027vw,346px)] mr-4 max-w-[834px] border-0 h-px bg-white/15";

function Slot({ label, hint, ratio = "834 / 396" }: { label: string; hint?: string; ratio?: string }) {
  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-1 rounded-[22px] border border-dashed border-white/20 bg-white/[0.04] px-6 text-center"
      style={{ aspectRatio: ratio }}
    >
      <span className="text-[14px] font-medium text-white/70">{label}</span>
      {hint ? <span className="max-w-[460px] text-[12px] leading-[1.5] text-white/40">{hint}</span> : null}
    </div>
  );
}

function Pair({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

function Takeaway({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[14px] bg-white/[0.06] px-5 py-4">
      <p className={body}>
        <strong className="font-semibold text-white">{title}</strong> {children}
      </p>
    </div>
  );
}

function Label({ children, draft }: { children: ReactNode; draft?: boolean }) {
  return (
    <p className="text-[12px] font-medium uppercase tracking-wide text-white/45">
      {children}
      {draft ? <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-[10px] normal-case tracking-normal text-white/50">черновик</span> : null}
    </p>
  );
}

function Draft() {
  return (
    <span className="ml-3 inline-block translate-y-[-4px] rounded-full bg-white/10 px-2.5 py-1 align-middle text-[11px] font-medium uppercase tracking-wide text-white/55">
      Черновик
    </span>
  );
}

function Facts({ items }: { items: { k: string; v: string }[] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-3">
      {items.map((it) => (
        <div key={it.k} className="rounded-[14px] bg-white/[0.06] px-4 py-4">
          <dt className="text-[12px] uppercase tracking-wide text-white/45">{it.k}</dt>
          <dd className="mt-1.5 text-[15px] font-medium leading-snug text-white">{it.v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Rows({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-white/10 text-[14px] leading-[1.5]">
      <div className="grid grid-cols-[1.1fr_2fr_1fr] gap-4 bg-white/[0.06] px-4 py-2.5 text-[12px] uppercase tracking-wide text-white/45">
        {head.map((h) => (
          <span key={h}>{h}</span>
        ))}
      </div>
      {rows.map((r) => (
        <div key={r[0]} className="grid grid-cols-[1.1fr_2fr_1fr] gap-4 border-t border-white/10 px-4 py-3 text-white/80">
          <span className="font-medium text-white">{r[0]}</span>
          <span>{r[1]}</span>
          <span className="text-white/60">{r[2]}</span>
        </div>
      ))}
    </div>
  );
}

type IANode = { label: string; children?: IANode[] };

const leaf = (label: string): IANode => ({ label });

const iaRoot: IANode = {
  label: "Алерт",
  children: [
    {
      label: "Автомобиль",
      children: [
        { label: "Идентификация", children: ["ID", "Город", "Госномер"].map(leaf) },
        { label: "Состояние", children: ["Заряд батареи", "Пробег", "Скорость", "Температура систем"].map(leaf) },
        { label: "Сенсоры", children: ["Лидары"].map(leaf) },
        { label: "Камеры", children: ["Stream", "Quality"].map(leaf) },
        { label: "Навигация", children: ["GPS Signal"].map(leaf) },
      ],
    },
    {
      label: "Поездка",
      children: [
        { label: "Пассажир", children: ["В салоне", "Тип клиента", "Тариф", "Контакт"].map(leaf) },
        { label: "Маршрут", children: ["Точка А", "Точка Б", "ETA", "Статус"].map(leaf) },
      ],
    },
    {
      label: "Диагностика",
      children: [
        { label: "Тип ошибки", children: ["Категория", "Severity", "Время возникновения"].map(leaf) },
        { label: "Видео-поток", children: ["Front Camera", "LiDAR View"].map(leaf) },
        { label: "Логи системы", children: ["Error Log", "Last Reboot"].map(leaf) },
      ],
    },
    {
      label: "Решение",
      children: [
        {
          label: "Удалённое управление",
          children: ["Перезагрузить систему", "Разблокировать двери", "Включить сирену / свет"].map(leaf),
        },
        { label: "Логистика", children: ["Отправить замену", "Вызвать эвакуатор / механика"].map(leaf) },
        { label: "Коммуникация", children: ["Включить связь с салоном", "Отправить Push"].map(leaf) },
      ],
    },
  ],
};

const levelStyle = [
  "bg-[#ff4d4d] px-4 py-2 text-[14px] font-semibold text-white",
  "bg-white/15 px-3.5 py-1.5 text-[14px] font-semibold text-white",
  "bg-white/10 px-3 py-1.5 text-[13px] font-medium text-white/85",
  "bg-transparent px-0 py-0.5 text-[12.5px] text-white/60",
];

function IANodeView({ node, depth }: { node: IANode; depth: number }) {
  const label = (
    <span className={`inline-block whitespace-nowrap rounded-full ${levelStyle[Math.min(depth, 3)]}`}>
      {node.label}
    </span>
  );
  if (!node.children) return label;
  return (
    <div className="tree-row">
      {label}
      <span className="tree-link" />
      <div className="tree-children">
        {node.children.map((c) => (
          <div key={c.label} className="tree-child">
            <IANodeView node={c} depth={depth + 1} />
          </div>
        ))}
      </div>
    </div>
  );
}

function IATree() {
  return (
    <div className="no-scrollbar overflow-x-auto rounded-[22px] bg-white/[0.06] p-6">
      <div className="w-max">
        <IANodeView node={iaRoot} depth={0} />
      </div>
    </div>
  );
}

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
          <CaseOutline
            items={[
              { id: "task", label: "Задача", level: 1, desc: "Спроектировать сервис мониторинга беспилотного транспорта для инженеров центра мониторинга" },
              { id: "research", label: "Исследование", level: 1, desc: "Кто такие инженеры центра мониторинга, из чего состоит их работа и какая информация нужна им, чтобы быстро понимать, что происходит с автомобилем" },
              { id: "design", label: "Проектирование", level: 1, desc: "Гипотезы, информационная архитектура и сценарий работы оператора" },
              { id: "hypotheses", label: "Гипотезы", level: 2, desc: "Если показывать проблемные машины выше остальных, то оператор быстрее заметит инцидент" },
              { id: "solution", label: "Решение", level: 1, desc: "Сценарий в экранах: от общей картины парка до закрытого инцидента" },
              { id: "result", label: "Итог", level: 1, desc: "Что получилось в итоге" },
            ]}
          />
        </div>

        <div className="relative z-10 pb-[120px] pt-[max(520px,calc(var(--s)*0.68472))]">
          {/* 1. Задача */}
          <div className={col}>
            <h1 id="task" className={h1+" w-fit scroll-mt-24"}>Задача</h1>
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

          <hr className={`${hrCls} mt-12`} />

          {/* 2. Исследование */}
          <div className={`${col} mt-12`}>
            <h1 id="research" className={h1+" w-fit scroll-mt-24"}>Исследование</h1>
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
            <p className={body}>
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


          <div className={`${col} mt-10`}>
            <p className={body}>
              <strong className="font-semibold text-white">Подробности — на втором уровне.</strong> Подробная информация нужна уже после того, как проблема найдена. На первом уровне достаточно самого важного: что произошло, с какой машиной и насколько это критично
            </p>
          </div>

          <hr className={`${hrCls} mt-14`} />

          {/* 3. Проектирование */}
          <div className={`${col} mt-12`}>
            <h1 id="design" className={h1+" w-fit scroll-mt-24"}>Проектирование</h1>
          </div>

          <div className={`${col} mt-8`}>
            <h2 id="hypotheses" className={h2+" w-fit scroll-mt-24"}>Гипотезы</h2>
          </div>
          <div className={`${wide} mt-4 grid gap-4 sm:grid-cols-2`}>
            {[
              ["Если показывать проблемные машины выше остальных, то оператор быстрее заметит инцидент, потому что ему не придётся искать его среди нормальных."],
              ["Если оставить на первом экране только суть, а детали открывать по клику, то оператор не потеряется в данных, потому что поймёт, что случилось, ещё до деталей."],
              ["Если состояние машины читается по цвету и иконке, то оператор распознает его без чтения текста, потому что статус виден периферийным зрением."],
            ].map(([d]) => (
              <div key={d} className="rounded-[20px] bg-[#1f1f1f] p-6 last:odd:sm:col-span-2">
                <p className="text-[15px] leading-[1.6] text-white/80">{d}</p>
              </div>
            ))}
          </div>

          <div className={`${col} mt-12`}>
            <p className={body}>
              Данных в сервисе много, поэтому сначала я разложила их по группам и по вопросам, которые оператор задаёт по порядку: что за машина, что с поездкой, что сломалось. Так стало видно, что показывать сразу, а что убрать на второй уровень.
            </p>
          </div>
          <div className={`${wide} mt-5`}>
            <IATree />
          </div>


          <div className={`${col} mt-12`}>
            <p className={body}>
              Потом прошла путь оператора по шагам и нашла места, где ему нужно выбрать: помогла ли перезагрузка, есть ли в машине пассажир. Из этих развилок получились действия в карточке машины.
            </p>
          </div>
          <div className={`${wide} mt-5`}>
            <div className="overflow-hidden rounded-[22px] bg-white/[0.06] p-4">
              <DragPan>
                <img
                  alt="User Flow: реакция на инцидент"
                  src={asset("/figma/case/user-flow-dark.webp?v=2")}
                  className="block h-[560px] w-auto max-w-none select-none"
                  draggable={false}
                />
              </DragPan>
            </div>
          </div>


          <hr className={`${hrCls} mt-14`} />

          {/* 4. Решение */}
          <div className={`${col} mt-12`}>
            <h1 id="solution" className={h1+" w-fit scroll-mt-24"}>Решение</h1>
            <p className={`${body} mt-4`}>
              Сценарий в экранах: от общей картины парка до закрытого инцидента.
            </p>
          </div>
          <div className={`${wide} mt-6 space-y-10`}>
            {[
              ["dashboard", "Дашборд", "Карта парка и состояние машин"],
              ["trigger", "Триггер", "На карте появляется проблемная машина"],
              ["quickview", "Быстрый просмотр", "Главное о машине, не уходя с карты"],
              ["alert", "Карточка инцидента", "Что случилось, с какой машиной и что можно сделать"],
              ["modal", "Подтверждение действия", "Перед важным шагом оператор подтверждает выбор"],
              ["resolution", "Решение инцидента", "Шаги, которые оператор проходит по сценарию"],
              ["confirmation", "Проверка решения", "Итог действий перед закрытием"],
              ["loading", "Загрузка", "Система применяет решение"],
              ["success", "Инцидент закрыт", "Результат и запись в журнале"],
            ].map(([key, title, text], i) => (
              <div key={key} className="space-y-3">
                <img
                  alt={`Экран «${title}»`}
                  loading="lazy"
                  className="block w-full rounded-[16px] bg-white/[0.06]"
                  src={asset(`/figma/case/screens/${i + 1}-${key}.webp`)}
                />
                <div>
                  <h3 className="text-[16px] font-semibold text-white">{title}</h3>
                  <p className={`${caption} mt-1`}>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className={`${hrCls} mt-14`} />

          {/* 5. Итог */}
          <div className={`${col} mt-12`}>
            <h1 id="result" className={h1+" w-fit scroll-mt-24"}>Итог</h1>
            <p className={`${body} mt-4`}>
              [Что получилось и что бы сделала дальше.]
            </p>
          </div>
          <div className={`${wide} mt-6`}>
            <Slot label="Финальный экран / сцена" hint="Эффектный кадр для финала кейса" ratio="834 / 470" />
          </div>

          <div className={`${col} mt-10`}>
            <Label draft>Что измерим после релиза</Label>
          </div>
          <div className={`${wide} mt-3`}>
            <Rows
              head={["Метрика", "Как измеряем", "Ориентир"]}
              rows={[
                ["Время до реакции", "От сигнала до первого действия", "[до / после]"],
                ["Пропущенные инциденты", "Доля инцидентов без реакции в срок", "[до / после]"],
                ["Ошибочные действия", "Откаты и повторные открытия", "[до / после]"],
              ]}
            />
          </div>

          <div className={`${col} mt-10`}>
            <Label draft>Что дальше</Label>
            <ul className={`${body} mt-3 space-y-1`}>
              <li>– Проверить сценарий на реальных операторах и сменах</li>
              <li>– Добавить очередь инцидентов и передачу другому оператору</li>
              <li>– Продумать работу при плохой связи и устаревших данных</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
