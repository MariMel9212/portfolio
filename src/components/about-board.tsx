"use client";

import { useRef, useState } from "react";
import { asset } from "@/lib/asset";

const W = 1420;
const H = 780;
const u = (px: number) => `${(px / W) * 100}cqw`;

/** Фото внутри карточки (координаты как в макете Figma). */
type Photo = {
  src: string;
  /** положение и размер области фото внутри карточки */
  l: number;
  t: number;
  w: number;
  h: number;
  /** если фото повёрнуто внутри карточки */
  rot?: number;
  /** размер самой картинки, когда она повёрнута */
  iw?: number;
  ih?: number;
};

type Card = {
  id: string;
  /** габарит (bbox) карточки в системе группы */
  l: number;
  t: number;
  w: number;
  h: number;
  rot: number;
  /** размер самой карточки до поворота */
  cw: number;
  ch: number;
  border: number;
  borderColor: string;
  radius: number;
  photo: Photo;
};

type Group = {
  id: string;
  x: number;
  y: number;
  /** масштаб группы относительно макета */
  k: number;
  w: number;
  h: number;
  cover: string;
  cards: Card[];
  title: string;
  text: string;
};

const BLUE = "#a8d6f4";
const PURPLE = "#b8a8f4";

// Позиции карточек — один в один из Figma («Обо мне», node 10:3263), координаты внутри группы.
const groups: Group[] = [
  {
    id: "dogs",
    x: 250,
    y: 420,
    k: 0.8,
    w: 500,
    h: 484,
    cover: "d-3274",
    title: "Дом",
    text: "Уже 4 года занимаюсь воспитанием своенравной Итальянки",
    cards: [
      {
        id: "d-3270",
        l: 260.4, t: 0, w: 239.5, h: 324.4, rot: 4.29,
        cw: 216.97, ch: 309.03, border: 2.743, borderColor: BLUE, radius: 16.69,
        photo: { src: "/figma/about/d-3270.webp", l: -30.39, t: -73.41, w: 253.2, h: 450.14 },
      },
      {
        id: "d-3272",
        l: 116.34, t: 171.36, w: 222.56, h: 312.92, rot: 1.04,
        cw: 216.97, ch: 309.03, border: 2.743, borderColor: BLUE, radius: 16.69,
        photo: { src: "/figma/about/d-3272.webp", l: -29.06, t: -62.2, w: 270.91, h: 442.85, rot: -4.29, iw: 239.68, ih: 426.1 },
      },
      {
        id: "d-3274",
        l: 0, t: 21.14, w: 290.6, h: 215.3, rot: -5.15,
        cw: 274.54, ch: 191.45, border: 1.699, borderColor: PURPLE, radius: 58.9,
        photo: { src: "/figma/about/d-3274.webp", l: -60.39, t: -22.36, w: 375.08, h: 230.9, rot: 4.64, iw: 359.87, ih: 202.43 },
      },
    ],
  },
  {
    id: "f1",
    x: 710,
    y: 420,
    k: 0.8,
    w: 458.2,
    h: 443.5,
    cover: "f-3280",
    title: "Выходные",
    text: "Выходные стабильно заняты просмотром квалификации и гран-при",
    cards: [
      {
        id: "f-3280",
        l: 197.73, t: 4.53, w: 251.06, h: 357.58, rot: 0,
        cw: 251.06, ch: 357.58, border: 3.174, borderColor: BLUE, radius: 19.31,
        photo: { src: "/figma/about/f-3280.webp", l: -116.56, t: -140.14, w: 532.1, h: 869.82, rot: -4.29, iw: 470.77, ih: 836.93 },
      },
      {
        id: "f-3282",
        l: 32.07, t: 254.87, w: 245, h: 188.6, rot: -7.5,
        cw: 225.97, ch: 160.47, border: 1.745, borderColor: BLUE, radius: 10.6,
        photo: { src: "/figma/about/f-3282.webp", l: -11.68, t: -6.63, w: 281.1, h: 170.07, rot: -1.04, iw: 278.14, ih: 165.03 },
      },
      {
        id: "f-3284",
        l: 0, t: 0, w: 228.6, h: 218.3, rot: 12.05,
        cw: 194.97, ch: 181.63, border: 1.505, borderColor: BLUE, radius: 9.16,
        photo: { src: "/figma/about/f-3284.webp", l: -1.51, t: -8.49, w: 201.32, h: 201.32 },
      },
      {
        id: "f-3286",
        l: 313.14, t: 254.7, w: 145.1, h: 164.1, rot: 5.48,
        cw: 131.14, ch: 152.3, border: 1.448, borderColor: BLUE, radius: 8.8,
        photo: { src: "/figma/about/f-3286.webp", l: -38.27, t: -27.04, w: 197.94, h: 197.94, rot: 10.15, iw: 170.56, ih: 170.56 },
      },
    ],
  },
  {
    id: "tlou",
    x: 1170,
    y: 420,
    k: 0.8,
    w: 532.3,
    h: 509.6,
    cover: "t-3288",
    title: "Ритуал",
    text: "Ежегодный ритуал — speedrun по Last of us",
    cards: [
      {
        id: "t-3288",
        l: 125, t: 0, w: 290.74, h: 329.72, rot: 8.19,
        cw: 251, ch: 297, border: 3.174, borderColor: BLUE, radius: 19.31,
        photo: { src: "/figma/about/t-3288.webp", l: -58.18, t: -16.17, w: 389, h: 438 },
      },
      {
        id: "t-3290",
        l: 193.76, t: 248.36, w: 338.56, h: 261.24, rot: -9.13,
        cw: 308.34, ch: 215.02, border: 1.908, borderColor: PURPLE, radius: 66.16,
        photo: { src: "/figma/about/t-3290.webp", l: -71, t: -0.64, w: 392.73, h: 222.38, rot: -0.32, iw: 391.53, ih: 220.23 },
      },
      {
        id: "t-3292",
        l: 0, t: 263, w: 223.45, h: 250.63, rot: -7.47,
        cw: 195.59, ch: 227.14, border: 2.16, borderColor: BLUE, radius: 13.15,
        photo: { src: "/figma/about/t-3292.webp", l: -25.18, t: -35.6, w: 252.1, h: 403.52, rot: -5.48, iw: 216.35, ih: 384.62 },
      },
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

// Обводка тоньше и мягче, чем в макете.
const BORDER_SCALE = 0.5;

function CardView({ card, g, open, order }: { card: Card; g: Group; open: boolean; order: number }) {
  const { k } = g;
  const e = (v: number) => `${v * k}em`;
  const cover = g.cards.find((c) => c.id === g.cover)!;
  const isCover = card.id === g.cover;

  // Положение «в стопке»: центр карточки уезжает в центр обложки.
  const deck = DECK[order] ?? DECK[DECK.length - 1];
  // стопка стоит по центру рамки группы
  const gx = g.w / 2 - (card.l + card.w / 2);
  const gy = g.h / 2 - (card.t + card.h / 2);
  const dx = gx + deck.dx;
  const dy = gy + deck.dy;
  const s = Math.min(1.1, Math.max(0.55, Math.min(cover.w / card.w, cover.h / card.h))) * 0.98;

  const rest = isCover
    ? `translate(${e(gx)}, ${e(gy)})`
    : `translate(${e(dx)}, ${e(dy)}) rotate(${deck.r}deg) scale(${s})`;

  const p = card.photo;
  const img = (
    <img
      alt=""
      draggable={false}
      loading="lazy"
      src={asset(p.src)}
      className="pointer-events-none absolute inset-0 size-full max-w-none select-none object-cover"
    />
  );

  return (
    <div
      className="absolute flex items-center justify-center"
      data-card={card.id}
      style={{
        left: e(card.l),
        top: e(card.t),
        width: e(card.w),
        height: e(card.h),
        transform: open ? "translate(0,0) rotate(0deg) scale(1)" : rest,
        transition: "transform 520ms cubic-bezier(0.22, 1.2, 0.36, 1)",
        transitionDelay: open ? `${order * 35}ms` : "0ms",
        zIndex: open ? g.cards.findIndex((c) => c.id === card.id) + 1 : isCover ? 10 : 10 - order,
        filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.14))",
      }}
    >
      <div className="flex-none" style={{ transform: `rotate(${card.rot}deg)` }}>
        <div
          className="relative overflow-clip bg-white"
          style={{
            width: e(card.cw),
            height: e(card.ch),
            borderRadius: e(card.radius),
            border: `${e(card.border * BORDER_SCALE)} solid ${card.borderColor}99`,
          }}
        >
          {p.rot !== undefined ? (
            <div
              className="absolute flex items-center justify-center"
              style={{ left: e(p.l), top: e(p.t), width: e(p.w), height: e(p.h) }}
            >
              <div className="flex-none" style={{ transform: `rotate(${p.rot}deg)` }}>
                <div className="relative" style={{ width: e(p.iw!), height: e(p.ih!) }}>
                  {img}
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute" style={{ left: e(p.l), top: e(p.t), width: e(p.w), height: e(p.h) }}>
              {img}
            </div>
          )}
        </div>
      </div>
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
        style={{ left: u(70), top: u(64), fontSize: u(36), lineHeight: u(44) }}
      >
        Пару фактов обо мне
      </h2>
      <p className="absolute text-[#161616]/40" style={{ right: u(60), bottom: u(36), fontSize: u(16) }}>
        Наведи или нажми на карточки
      </p>

      {groups.map((g) => {
        const open = active === g.id;
        const dim = active !== null && !open;
        const ordered = [...g.cards].sort((a, b) => (a.id === g.cover ? -1 : b.id === g.cover ? 1 : 0));
        const cover = g.cards.find((c) => c.id === g.cover)!;
        const hidden = g.cards.length - 1;

        return (
          <div
            key={g.id}
            className="pointer-events-none absolute transition-opacity duration-300"
            style={{
              left: u(g.x - (g.w * g.k) / 2),
              top: u(g.y - (g.h * g.k) / 2),
              width: `${g.w * g.k}em`,
              height: `${g.h * g.k}em`,
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

              {/* значок «внутри ещё фото» */}
              <span
                aria-hidden
                className="absolute rounded-full bg-white font-medium text-[#161616]/70 shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-opacity duration-200"
                style={{
                  left: `${(cover.l + cover.w - 40) * g.k}em`,
                  top: `${(cover.t + cover.h - 30) * g.k}em`,
                  padding: `${u(3)} ${u(9)}`,
                  fontSize: u(13),
                  zIndex: 30,
                  opacity: open ? 0 : 1,
                }}
              >
                +{hidden}
              </span>
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
                <p className="uppercase tracking-[0.04em] text-[#161616]/45" style={{ fontSize: u(11), lineHeight: u(14) }}>
                  {g.title}
                </p>
                <p className="font-medium" style={{ marginTop: u(4), fontSize: u(16), lineHeight: u(21), letterSpacing: u(-0.1) }}>
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
