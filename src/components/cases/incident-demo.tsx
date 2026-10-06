"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

type Step = {
  src: string;
  h: number; // page height in 1440px space
  scroll?: number; // simulated scroll, px in 1440 space
  cursor: [number, number]; // target in 1440px space
  click?: boolean;
  dur: number;
  title: string;
  sub: string;
  text: string;
};

const W = 1440;
const VIEW_H = 1024;

const steps: Step[] = [
  { src: "/figma/case/screens/1-dashboard.webp", h: 1024, cursor: [760, 560], dur: 2600, title: "Сводная панель", sub: "Мониторинг парка в реальном времени", text: "Оператор видит общую картину: сколько машин в работе, сколько на зарядке. Список инцидентов пуст — всё в штатном режиме." },
  { src: "/figma/case/screens/2-trigger.webp", h: 1024, cursor: [1192, 290], click: true, dur: 3200, title: "Событие", sub: "Мгновенное оповещение об инциденте", text: "Система зафиксировала сбой LiDAR. Алерт появляется в списке справа с приоритетом Critical и привлекает внимание цветом." },
  { src: "/figma/case/screens/3-quickview.webp", h: 1024, cursor: [1192, 904], click: true, dur: 3400, title: "Быстрый контекст", sub: "Детализация без потери фокуса", text: "По клику открывается боковая панель: фото машины, локация и суть проблемы. Инженер не уходит с карты и может сразу принять решение." },
  { src: "/figma/case/screens/4-alert.webp", h: 1541, scroll: 420, cursor: [996, 305], click: true, dur: 4200, title: "Детализация инцидента", sub: "Единый контекст для принятия решений", text: "Видеопотоки, телеметрия и хронология в одном окне. Инженер проходит чек-лист обстановки и ничего не пропускает." },
  { src: "/figma/case/screens/5-modal.webp", h: 1541, cursor: [832, 634], click: true, dur: 3400, title: "Подтверждение безопасности", sub: "Защита от случайных действий", text: "Перед подключением к салону система спрашивает согласие: оператор не должен слышать пассажира без явного решения." },
  { src: "/figma/case/screens/6-resolution.webp", h: 1541, cursor: [1171, 659], click: true, dur: 3000, title: "Активный процесс", sub: "Пошаговый протокол", text: "Чек-лист пройден, аудиосвязь активна. Кнопка «Перезапустить LiDAR» разблокирована только после проверки обстановки." },
  { src: "/figma/case/screens/7-confirmation.webp", h: 1541, cursor: [834, 654], click: true, dur: 3400, title: "Подтверждение действия", sub: "Предупреждение о последствиях", text: "Перед перезапуском сказано, что машина будет неподвижна около 15 секунд. Инженер осознаёт риск и простой." },
  { src: "/figma/case/screens/8-loading.webp", h: 1541, cursor: [1171, 620], dur: 3000, title: "Процесс", sub: "Обратная связь в реальном времени", text: "Статус «Перезагрузка…» с ожиданием 12–20 секунд снижает тревожность: оператор видит, что команда принята." },
  { src: "/figma/case/screens/9-success.webp", h: 1541, cursor: [1183, 983], click: true, dur: 3600, title: "Успех", sub: "Восстановление и закрытие", text: "Датчик вернулся в сеть, главное действие меняется на «Закрыть инцидент». Сценарий завершён." },
];

export function IncidentDemo() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [reduce, setReduce] = useState(false);
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

  const s = steps[idx];
  const [cx, cy] = s.cursor;

  return (
    <div ref={rootRef}>
      <div
        className="relative w-full overflow-hidden rounded-[18px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        style={{ aspectRatio: `${W} / ${VIEW_H}` }}
      >
        {steps.map((st, i) => {
          const active = i === idx;
          const fade = { opacity: active ? 1 : 0, zIndex: active ? 2 : 1 };
          const fadeT = "opacity 450ms ease-out";
          if (!st.scroll) {
            return (
              <img
                key={st.src}
                alt={st.title}
                src={asset(st.src)}
                draggable={false}
                className="absolute left-0 top-0 w-full select-none"
                style={{ ...fade, transition: fadeT }}
              />
            );
          }
          // fixed chrome (sidebar, top bar, right panel) stays; only the middle column scrolls
          const L = 117;
          const R = 928;
          const T = 78;
          const winW = R - L;
          const ty = active ? -((T + st.scroll) / st.h) * 100 : -(T / st.h) * 100;
          return (
            <div key={st.src} className="absolute inset-0" style={{ ...fade, transition: fadeT }}>
              <img alt={st.title} src={asset(st.src)} draggable={false} className="absolute left-0 top-0 w-full select-none" />
              <div
                className="absolute overflow-hidden"
                style={{
                  left: `${(L / W) * 100}%`,
                  width: `${(winW / W) * 100}%`,
                  top: `${(T / VIEW_H) * 100}%`,
                  height: `${((VIEW_H - T) / VIEW_H) * 100}%`,
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
                    transition: active ? "transform 1600ms cubic-bezier(0.45,0,0.2,1) 700ms" : "none",
                  }}
                />
              </div>
            </div>
          );
        })}

        {/* cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute z-10"
          style={{
            left: `${(cx / W) * 100}%`,
            top: `${(cy / VIEW_H) * 100}%`,
            transition: "left 900ms cubic-bezier(0.45,0,0.2,1) 200ms, top 900ms cubic-bezier(0.45,0,0.2,1) 200ms",
          }}
        >
          {s.click && <span key={idx} className="demo-ripple" />}
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
