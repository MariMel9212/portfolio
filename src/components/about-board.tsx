"use client";

import { useRef, useState } from "react";
import { asset } from "@/lib/asset";

const W = 1420;
const H = 660;
const u = (px: number) => `${(px / W) * 100}cqw`;

type Card = {
  id: string;
  /** центр карточки внутри группы */
  cx: number;
  cy: number;
  rot: number;
  /** v — вертикальная, h — горизонтальная: у всех карточек одного вида один размер */
  o: "v" | "h";
  /** положение кадра внутри карточки */
  pos?: string;
};

type Group = {
  id: string;
  /** центр группы на доске */
  x: number;
  y: number;
  w: number;
  h: number;
  cover: string;
  cards: Card[];
  title: string;
  text: string;
};

// Два шаблона карточки: одинаковые размеры, скругление и обводка.
const SIZE = { v: { w: 200, h: 275 }, h: { w: 275, h: 200 } } as const;
const RADIUS = 18;
const BORDER = 1.5;
const BORDER_COLOR = "rgba(168, 214, 244, 0.7)";

const groups: Group[] = [
  {
    id: "dogs",
    x: 250,
    y: 320,
    w: 440,
    h: 430,
    cover: "d-3274",
    title: "Дом",
    text: "Уже 4 года занимаюсь воспитанием своенравной Итальянки",
    cards: [
      { id: "d-3270", cx: 330, cy: 140, rot: 4, o: "v", pos: "50% 40%" },
      { id: "d-3272", cx: 225, cy: 290, rot: 1, o: "v", pos: "50% 40%" },
      { id: "d-3274", cx: 142, cy: 130, rot: -5, o: "h" },
    ],
  },
  {
    id: "f1",
    x: 710,
    y: 320,
    w: 440,
    h: 430,
    cover: "f-3280",
    title: "Выходные",
    text: "Выходные стабильно заняты просмотром квалификации и гран-при",
    cards: [
      { id: "f-3280", cx: 315, cy: 145, rot: 3, o: "v", pos: "50% 60%" },
      { id: "f-3282", cx: 145, cy: 305, rot: 4, o: "h" },
      { id: "f-3284", cx: 130, cy: 110, rot: -7, o: "h" },
      { id: "f-3286", cx: 320, cy: 300, rot: -4, o: "v" },
    ],
  },
  {
    id: "tlou",
    x: 1170,
    y: 320,
    w: 440,
    h: 430,
    cover: "t-3288",
    title: "Ритуал",
    text: "Ежегодный ритуал — speedrun по Last of us",
    cards: [
      { id: "t-3292", cx: 110, cy: 290, rot: -7, o: "v", pos: "50% 40%" },
      { id: "t-3290", cx: 300, cy: 305, rot: -8, o: "h" },
      { id: "t-3288", cx: 230, cy: 135, rot: 8, o: "v", pos: "50% 60%" },
    ],
  },
];

// Как лежат карточки «в стопке» (относительно обложки): сдвиг, поворот.
const DECK = [
  { dx: 0, dy: 0, r: 0 },
  { dx: 15, dy: -9, r: 6 },
  { dx: -13, dy: -4, r: -7 },
  { dx: 24, dy: 12, r: 11 },
];

function CardView({ card, g, open, order }: { card: Card; g: Group; open: boolean; order: number }) {
  const e = (v: number) => `${v}em`;
  const { w, h } = SIZE[card.o];
  const isCover = card.id === g.cover;
  const deck = DECK[order] ?? DECK[DECK.length - 1];

  // Стопка стоит по центру рамки группы.
  const gx = g.w / 2 - card.cx + (isCover ? 0 : deck.dx);
  const gy = g.h / 2 - card.cy + (isCover ? 0 : deck.dy);
  const rest = `translate(${e(gx)}, ${e(gy)}) rotate(${card.rot + (isCover ? 0 : deck.r)}deg)`;
  const fanned = `translate(0, 0) rotate(${card.rot}deg)`;

  return (
    <div
      className="absolute overflow-hidden bg-white"
      style={{
        left: e(card.cx - w / 2),
        top: e(card.cy - h / 2),
        width: e(w),
        height: e(h),
        borderRadius: e(RADIUS),
        border: `${e(BORDER)} solid ${BORDER_COLOR}`,
        boxShadow: open ? "0 14px 26px -8px rgba(0,0,0,0.22)" : "0 6px 14px -6px rgba(0,0,0,0.2)",
        transform: open ? fanned : rest,
        transition: "transform 520ms cubic-bezier(0.22, 1.2, 0.36, 1), box-shadow 300ms",
        transitionDelay: open ? `${order * 35}ms` : "0ms",
        zIndex: open ? g.cards.findIndex((c) => c.id === card.id) + 1 : isCover ? 10 : 10 - order,
      }}
    >
      <img
        alt=""
        draggable={false}
        loading="lazy"
        src={asset(`/figma/about/${card.id}.webp`)}
        className="pointer-events-none absolute inset-0 size-full max-w-none select-none object-cover"
        style={{ objectPosition: card.pos ?? "50% 50%" }}
      />
    </div>
  );
}

export function AboutBoard() {
  const [hover, setHover] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = pinned ?? hover;

  const enter = (id: string) => {
    if (timer.current) clearTimeout(timer.current);
    setHover(id);
  };
  const leave = (id: string) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setHover((h) => (h === id ? null : h)), 140);
  };
  const toggle = (id: string) => setPinned((p) => (p === id ? null : id));

  return (
    <div
      className="@container relative w-full text-[#161616]"
      style={{ aspectRatio: `${W} / ${H}`, fontSize: u(1) }}
      onClick={() => setPinned(null)}
    >
      <h2
        className="absolute font-medium tracking-[-0.01em] text-[#161616]/90"
        style={{ left: u(70), top: u(16), fontSize: u(28), lineHeight: u(34) }}
      >
        Пару фактов обо мне
      </h2>
      <p className="absolute text-[#161616]/40" style={{ right: u(70), bottom: u(20), fontSize: u(12), lineHeight: u(16) }}>
        Наведи или нажми на карточки
      </p>

      {groups.map((g) => {
        const open = active === g.id;
        const dim = active !== null && !open;
        const ordered = [...g.cards].sort((a, b) => (a.id === g.cover ? -1 : b.id === g.cover ? 1 : 0));
        return (
          <div
            key={g.id}
            className="pointer-events-none absolute transition-opacity duration-300"
            style={{
              left: u(g.x - g.w / 2),
              top: u(g.y - g.h / 2),
              width: `${g.w}em`,
              height: `${g.h}em`,
              zIndex: open ? 20 : 1,
              opacity: dim ? 0.45 : 1,
            }}
          >
            {/* карточки: интерактивны сами, а не вся рамка группы */}
            <div
              role="button"
              tabIndex={0}
              aria-expanded={open}
              aria-label={`${g.title}: ${g.text}`}
              className="pointer-events-none absolute inset-0 cursor-pointer outline-none"
              onMouseEnter={() => enter(g.id)}
              onMouseLeave={() => leave(g.id)}
              onFocus={() => enter(g.id)}
              onBlur={() => leave(g.id)}
              onClick={(e) => {
                e.stopPropagation();
                toggle(g.id);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(g.id);
                }
              }}
            >
              {ordered.map((c, i) => (
                <div key={c.id} className="pointer-events-auto contents">
                  <CardView card={c} g={g} open={open} order={i} />
                </div>
              ))}
            </div>

            {/* записка с текстом */}
            <div
              aria-hidden={!open}
              className="pointer-events-none absolute transition duration-300 ease-out"
              style={{
                left: `calc(50% - ${u(140)})`,
                top: `calc(100% + ${u(10)})`,
                width: u(280),
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0) rotate(-1deg)" : "translateY(-8px) rotate(-1deg)",
                zIndex: 30,
              }}
            >
              <div
                className="bg-[#fff6a8] text-[#161616]"
                style={{
                  borderRadius: u(14),
                  padding: `${u(14)} ${u(18)}`,
                  boxShadow: "0 12px 28px rgba(0,0,0,0.16)",
                }}
              >
                                <p className="font-medium" style={{ fontSize: u(16), lineHeight: u(21), letterSpacing: u(-0.1) }}>
                  {g.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
