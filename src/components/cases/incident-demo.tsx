"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

type Target = { x: number; y: number; w: number; h: number; r: number; kind: "card" | "btn" | "check" };
type Act = { cursor: [number, number]; target?: Target; check?: [number, number] };
type Scene = "plain" | "alert" | "modal-connect" | "onair" | "modal-restart";

type Step = {
  src: string;
  h: number; // page height in 1440px space
  scene: Scene;
  scroll?: boolean; // scroll the middle column to the end and back before the cursor starts
  actStart?: number; // delay before the first cursor action
  acts: Act[];
  dur: number;
  title: string;
  sub: string;
  text: string;
};

const STATE_VARS = {
  card: { "--h-bg": "rgba(0,0,0,0.04)", "--p-bg": "rgba(0,0,0,0.09)", boxShadow: "0 6px 18px rgba(0,0,0,0.10), inset 0 0 0 1px rgba(0,0,0,0.12)" },
  btn: { "--h-bg": "rgba(0,0,0,0.12)", "--p-bg": "rgba(0,0,0,0.24)", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" },
  check: { "--h-bg": "rgba(51,144,255,0.16)", "--p-bg": "rgba(51,144,255,0.32)", boxShadow: "0 0 0 3px rgba(51,144,255,0.18)" },
} as const;

const W = 1440;
const VIEW_H = 1024;
const SCROLL_START = 4300;
const SLOW = 1900;
const FAST = 1300;

// checkbox centres and click targets on the "Alert detail" screen (1440px space)
const CB: [number, number][] = [
  [998, 308],
  [998, 340],
  [998, 372],
];
const cbTarget = (c: [number, number]): Target => ({ x: c[0] - 14, y: c[1] - 14, w: 28, h: 28, r: 6, kind: "check" });
const CONNECT: Target = { x: 988, y: 498, w: 367, h: 43, r: 10, kind: "btn" };
const HANGUP: Target = { x: 1004, y: 552, w: 335, h: 36, r: 8, kind: "btn" };

const ALERT = "/figma/case/screens/4-alert.webp";

const steps: Step[] = [
  {
    src: "/figma/case/screens/1-dashboard.webp",
    h: 1024,
    scene: "plain",
    acts: [{ cursor: [760, 560] }],
    dur: 2600,
    title: "Сводная панель",
    sub: "Мониторинг парка в реальном времени",
    text: "Оператор видит общую картину: сколько машин в работе, сколько на зарядке. Список инцидентов пуст — всё в штатном режиме.",
  },
  {
    src: "/figma/case/screens/2-trigger.webp",
    h: 1024,
    scene: "plain",
    acts: [{ cursor: [1194, 300], target: { x: 989, y: 221, w: 410, h: 157, r: 14, kind: "card" } }],
    dur: 3200,
    title: "Событие",
    sub: "Мгновенное оповещение об инциденте",
    text: "Система зафиксировала сбой LiDAR. Алерт появляется в списке справа с приоритетом Critical и привлекает внимание цветом.",
  },
  {
    src: "/figma/case/screens/3-quickview.webp",
    h: 1024,
    scene: "plain",
    acts: [{ cursor: [1192, 904], target: { x: 987, y: 882, w: 412, h: 45, r: 8, kind: "btn" } }],
    dur: 3400,
    title: "Быстрый контекст",
    sub: "Детализация без потери фокуса",
    text: "По клику открывается боковая панель: фото машины, локация и суть проблемы. Инженер не уходит с карты и может сразу принять решение.",
  },
  {
    src: ALERT,
    h: 1541,
    scene: "alert",
    scroll: true,
    acts: [
      { cursor: CB[0], target: cbTarget(CB[0]), check: CB[0] },
      { cursor: [1171, 520], target: CONNECT },
    ],
    dur: 7600,
    title: "Детализация инцидента",
    sub: "Единый контекст для принятия решений",
    text: "Видеопотоки, телеметрия и хронология в одном окне. Инженер отмечает первый пункт чек-листа и подключается к салону.",
  },
  {
    src: ALERT,
    h: 1541,
    scene: "modal-connect",
    actStart: 1200,
    acts: [{ cursor: [834, 634], target: { x: 757, y: 611, w: 155, h: 45, r: 10, kind: "btn" } }],
    dur: 3500,
    title: "Подтверждение безопасности",
    sub: "Защита от случайных действий",
    text: "Перед подключением к салону система спрашивает согласие: оператор не должен слышать пассажира без явного решения.",
  },
  {
    src: ALERT,
    h: 1541,
    scene: "onair",
    actStart: 2800,
    acts: [
      { cursor: [1171, 570], target: HANGUP },
      { cursor: CB[1], target: cbTarget(CB[1]), check: CB[1] },
      { cursor: CB[2], target: cbTarget(CB[2]), check: CB[2] },
      { cursor: [1171, 659], target: { x: 988, y: 637, w: 367, h: 44, r: 10, kind: "btn" } },
    ],
    dur: 10800,
    title: "Активный процесс",
    sub: "Пошаговый протокол",
    text: "Идёт разговор, время в эфире тикает. После завершения звонка оператор отмечает остальные пункты чек-листа, и и открывается перезапуск LiDAR. Инженер нажимает «Перезапустить LiDAR».",
  },
  {
    src: ALERT,
    h: 1541,
    scene: "modal-restart",
    actStart: 1200,
    acts: [{ cursor: [834, 654], target: { x: 755, y: 632, w: 157, h: 45, r: 10, kind: "btn" } }],
    dur: 3500,
    title: "Подтверждение действия",
    sub: "Предупреждение о последствиях",
    text: "Перед перезапуском сказано, что машина будет неподвижна около 15 секунд. Инженер осознаёт риск и простой.",
  },
  {
    src: "/figma/case/screens/8-loading.webp",
    h: 1541,
    scene: "plain",
    acts: [{ cursor: [1171, 620] }],
    dur: 3000,
    title: "Процесс",
    sub: "Обратная связь в реальном времени",
    text: "Статус «Перезагрузка…» с ожиданием 12–20 секунд снижает тревожность: оператор видит, что команда принята.",
  },
  {
    src: "/figma/case/screens/9-success.webp",
    h: 1541,
    scene: "plain",
    acts: [{ cursor: [1183, 983], target: { x: 960, y: 960, w: 447, h: 47, r: 8, kind: "btn" } }],
    dur: 3600,
    title: "Успех",
    sub: "Восстановление и закрытие",
    text: "Датчик вернулся в сеть, главное действие меняется на «Закрыть инцидент». Сценарий завершён.",
  },
];

function actStarts(st: Step): number[] {
  let t = (st.scroll ? SCROLL_START : 0) + (st.actStart ?? 0);
  return st.acts.map((_, k) => {
    const at = t;
    t += k === 0 ? SLOW : FAST;
    return at;
  });
}

const PATCH = { x: 930, y: 240, w: 510, h: 600 }; // right-panel patches, 1440px space
const MODAL_CONNECT = { x: 505, y: 432, w: 431 };
const MODAL_RESTART = { x: 505, y: 432, w: 431 };

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

function CheckMark({ c, delay }: { c: [number, number]; delay?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-[4] flex items-center justify-center ${delay ? "demo-check" : "demo-check-static"}`}
      style={{
        left: pct(c[0] - 9, W),
        top: pct(c[1] - 9, VIEW_H),
        width: pct(18, W),
        height: pct(18, VIEW_H),
        ...(delay ? { animationDelay: delay } : {}),
      }}
    >
      <svg viewBox="0 0 12 12" width="70%" height="70%" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 6.3l2.4 2.4 4.6-5" />
      </svg>
    </span>
  );
}

export function IncidentDemo() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [phase, setPhase] = useState(0);
  const [a, setA] = useState(-1);
  const [hungUp, setHungUp] = useState(false);
  const [finalOn, setFinalOn] = useState(false);
  const [sec, setSec] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !inView || reduce) return;
    const t = window.setTimeout(() => setIdx((i) => (i + 1) % steps.length), steps[idx].dur);
    return () => window.clearTimeout(t);
  }, [idx, playing, inView, reduce]);

  // timeline of the current step: scroll phases, cursor acts, scene events
  useEffect(() => {
    setPhase(0);
    setA(-1);
    setHungUp(false);
    setFinalOn(false);
    setSec(0);
    const st = steps[idx];
    const ts: number[] = [];
    if (st.scroll) {
      ts.push(window.setTimeout(() => setPhase(1), 400));
      ts.push(window.setTimeout(() => setPhase(2), 2700));
    }
    const starts = actStarts(st);
    starts.forEach((at, k) => ts.push(window.setTimeout(() => setA(k), at)));
    if (st.scene === "onair") {
      ts.push(window.setTimeout(() => setHungUp(true), starts[0] + 1600));
      ts.push(window.setTimeout(() => setFinalOn(true), starts[2] + 900));
    }
    return () => ts.forEach(window.clearTimeout);
  }, [idx]);

  // live timer while the call is on air
  const onAirNow = steps[idx].scene === "onair" && !hungUp;
  useEffect(() => {
    if (!onAirNow) return;
    const t = window.setInterval(() => setSec((v) => v + 1), 1000);
    return () => window.clearInterval(t);
  }, [onAirNow, idx]);

  const s = steps[idx];
  const started = a >= 0;
  const prev = steps[(idx + steps.length - 1) % steps.length];
  const curAct = started ? s.acts[Math.min(a, s.acts.length - 1)] : undefined;
  const [cx, cy] = curAct ? curAct.cursor : prev.acts[prev.acts.length - 1].cursor;
  const fast = a > 0;
  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");

  return (
    <div ref={rootRef}>
      <div
        className="relative w-full overflow-hidden rounded-[18px] bg-white [container-type:inline-size] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        style={{ aspectRatio: `${W} / ${VIEW_H}` }}
      >
        {steps.map((st, i) => {
          const active = i === idx;
          // the new screen fades in on top while the old one stays underneath, so identical frames never flash white
          const fade = active
            ? { opacity: 1, zIndex: 2, transition: "opacity 450ms ease-out" }
            : { opacity: 0, zIndex: 1, transition: "opacity 0ms linear 450ms" };

          if (!st.scroll) {
            return (
              <div key={`${i}-${st.src}`} className="absolute inset-0" style={fade}>
                <img alt={st.title} src={asset(st.src)} draggable={false} className="absolute left-0 top-0 w-full select-none" />
                {active && st.scene === "onair" && !hungUp && (
                  <>
                    <img
                      alt=""
                      src={asset("/figma/case/solution/patch-onair.webp")}
                      draggable={false}
                      className="absolute z-[3] select-none"
                      style={{ left: pct(PATCH.x, W), top: pct(PATCH.y, VIEW_H), width: pct(PATCH.w, W) }}
                    />
                    <span
                      aria-hidden
                      className="absolute z-[3] tabular-nums"
                      style={{
                        right: pct(W - 1338, W),
                        top: pct(512, VIEW_H),
                        fontSize: "1.04cqw",
                        lineHeight: "1.5",
                        color: "#111",
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", Inter, system-ui, sans-serif',
                      }}
                    >
                      {mm}:{ss}
                    </span>
                  </>
                )}
                {active && ((st.scene === "onair" && finalOn) || st.scene === "modal-restart") && (
                  <img
                    alt=""
                    src={asset("/figma/case/solution/patch-final.webp")}
                    draggable={false}
                    className={`absolute z-[3] select-none ${st.scene === "onair" ? "outline-fade" : ""}`}
                    style={{ left: pct(PATCH.x, W), top: pct(PATCH.y, VIEW_H), width: pct(PATCH.w, W) }}
                  />
                )}
                {active && (st.scene === "modal-connect" || st.scene === "onair") && <CheckMark c={CB[0]} />}
                {active && st.scene === "onair" && !finalOn && st.acts.map((ac, k) => (ac.check && k > 0 && a >= k ? <CheckMark key={k} c={ac.check} delay={k === 1 ? "800ms" : "800ms"} /> : null))}
                {active && (st.scene === "modal-connect" || st.scene === "modal-restart") && (
                  <>
                    <div aria-hidden className="demo-dim pointer-events-none absolute inset-0 z-[6]" />
                    <img
                      alt=""
                      src={asset(`/figma/case/solution/${st.scene}.webp`)}
                      draggable={false}
                      className="demo-pop pointer-events-none absolute z-[7] select-none"
                      style={{
                        left: pct((st.scene === "modal-connect" ? MODAL_CONNECT : MODAL_RESTART).x, W),
                        top: pct((st.scene === "modal-connect" ? MODAL_CONNECT : MODAL_RESTART).y, VIEW_H),
                        width: pct((st.scene === "modal-connect" ? MODAL_CONNECT : MODAL_RESTART).w, W),
                      }}
                    />
                  </>
                )}
              </div>
            );
          }

          // fixed chrome (sidebar, top bar, right panel) stays; only the middle column scrolls
          const L = 117;
          const R = 928;
          const T = 78;
          const winW = R - L;
          const maxScroll = st.h - VIEW_H;
          const cur = active && phase === 1 ? maxScroll : 0;
          const ty = -((T + cur) / st.h) * 100;
          return (
            <div key={`${i}-${st.src}`} className="absolute inset-0" style={fade}>
              <img alt={st.title} src={asset(st.src)} draggable={false} className="absolute left-0 top-0 w-full select-none" />
              <div
                className="absolute overflow-hidden"
                style={{
                  left: pct(L, W),
                  width: pct(winW, W),
                  top: pct(T, VIEW_H),
                  height: pct(VIEW_H - T, VIEW_H),
                }}
              >
                <img
                  alt=""
                  src={asset(st.src)}
                  draggable={false}
                  className="absolute top-0 max-w-none select-none"
                  style={{
                    left: `-${(L / winW) * 100}%`,
                    width: `${(W / winW) * 100}%`,
                    transform: `translateY(${ty}%)`,
                    transition: active ? `transform ${phase === 1 ? 1900 : 1400}ms cubic-bezier(0.45,0,0.2,1)` : "none",
                  }}
                />
              </div>
              {active && st.acts.map((ac, k) => (ac.check && a >= k ? <CheckMark key={k} c={ac.check} delay={k === 0 ? "1450ms" : "800ms"} /> : null))}
            </div>
          );
        })}

        {curAct?.target && (
          <div
            key={`t-${idx}-${a}`}
            aria-hidden
            className={`demo-state pointer-events-none absolute z-[8] ${fast ? "demo-fast" : ""}`}
            style={
              {
                left: pct(curAct.target.x, W),
                top: pct(curAct.target.y, VIEW_H),
                width: pct(curAct.target.w, W),
                height: pct(curAct.target.h, VIEW_H),
                borderRadius: `${(curAct.target.r / W) * 100}cqw`,
                ...STATE_VARS[curAct.target.kind],
              } as React.CSSProperties
            }
          />
        )}

        {/* cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute z-10"
          style={{
            left: pct(cx, W),
            top: pct(cy, VIEW_H),
            transition: fast
              ? "left 500ms cubic-bezier(0.45,0,0.2,1), top 500ms cubic-bezier(0.45,0,0.2,1)"
              : "left 900ms cubic-bezier(0.45,0,0.2,1) 200ms, top 900ms cubic-bezier(0.45,0,0.2,1) 200ms",
          }}
        >
          {curAct?.target && <span key={`r-${idx}-${a}`} className={`demo-ripple ${fast ? "demo-fast" : ""}`} />}
          <svg width="22" height="22" viewBox="0 0 24 24" className="relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]">
            <path d="M5 3l14 8-6.2 1.6L9.6 19 5 3z" fill="#111" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div key={idx} className="outline-fade min-w-0 flex-1">
          <div className="text-[12px] tabular-nums text-white/40">
            {String(idx + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[18px] font-semibold text-white">{s.title}</div>
          <div className="mt-0.5 text-[13px] text-white/50">{s.sub}</div>
          <p className="mt-2 max-w-[640px] text-[15px] leading-[1.6] text-white/75">{s.text}</p>
        </div>
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Пауза" : "Играть"}
          className="mt-1 shrink-0 rounded-full bg-white/10 px-3 py-1.5 text-[12px] text-white/70 transition-colors hover:bg-white/20"
        >
          {playing && !reduce ? "Пауза" : "Играть"}
        </button>
      </div>

      <div className="mt-4 flex gap-[6px]">
        {steps.map((st, i) => (
          <button key={st.title} type="button" aria-label={st.title} onClick={() => setIdx(i)} className="flex h-5 items-center">
            <span
              className={`block h-[3px] rounded-full transition-all duration-300 ${
                i === idx ? "w-8 bg-white" : i < idx ? "w-4 bg-white/50" : "w-4 bg-white/20"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
