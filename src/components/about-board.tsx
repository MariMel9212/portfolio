"use client";

import { useState } from "react";
import { asset } from "@/lib/asset";

const W = 1420;
const H = 780;
const u = (px: number) => `${(px / W) * 100}cqw`;

type Part = { src: string; x: number; y: number; w: number; h: number };
type Group = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  parts: Part[];
  title: string;
  text: string;
  tilt: number;
};

// Размеры в «макетных» пикселях (рамка 1420 × 780). Для тлоу части лежат в системе координат группы.
const groups: Group[] = [
  {
    id: "dogs",
    x: 70,
    y: 190,
    w: 500,
    h: 484,
    parts: [{ src: "/figma/about/dogs.webp", x: 0, y: 0, w: 500, h: 484 }],
    title: "Дом",
    text: "Уже 4 года занимаюсь воспитанием своенравной Итальянки",
    tilt: -1.5,
  },
  {
    id: "f1",
    x: 560,
    y: 70,
    w: 458,
    h: 443,
    parts: [{ src: "/figma/about/f1.webp", x: 0, y: 0, w: 458, h: 443 }],
    title: "Выходные",
    text: "Выходные стабильно заняты просмотром квалификации и гран-при",
    tilt: 1.2,
  },
  {
    id: "tlou",
    x: 1010,
    y: 150,
    w: 360,
    h: 380,
    parts: [
      { src: "/figma/about/tlou-c.webp", x: 0, y: 194, w: 150, h: 169 },
      { src: "/figma/about/tlou-b.webp", x: 131, y: 200, w: 228, h: 176 },
      { src: "/figma/about/tlou-a.webp", x: 112, y: 0, w: 196, h: 222 },
    ],
    title: "Ритуал",
    text: "Ежегодный ритуал — speedrun по Last of us",
    tilt: -0.8,
  },
];

export function AboutBoard() {
  const [hover, setHover] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const active = pinned ?? hover;

  return (
    <div
      className="@container relative w-full overflow-hidden bg-[#fcfcfc] text-[#161616]"
      style={{
        aspectRatio: `${W} / ${H}`,
        borderRadius: u(56),
        backgroundImage: "radial-gradient(rgba(0,0,0,0.13) 1.3px, transparent 1.3px)",
        backgroundSize: "26px 26px",
      }}
      onClick={() => setPinned(null)}
    >
      <h2 className="absolute font-medium tracking-[-0.01em] text-[#161616]/90" style={{ left: u(70), top: u(64), fontSize: u(36), lineHeight: u(44) }}>
        Пару фактов обо мне
      </h2>
      <p className="absolute text-[#161616]/40" style={{ right: u(60), bottom: u(36), fontSize: u(16) }}>
        Наведи или нажми на карточки
      </p>

      {groups.map((g) => {
        const open = active === g.id;
        const dim = active !== null && !open;
        return (
          <div
            key={g.id}
            className="absolute"
            style={{ left: u(g.x), top: u(g.y), width: u(g.w), height: u(g.h), zIndex: open ? 20 : 1 }}
          >
            <div
              role="button"
              tabIndex={0}
              aria-expanded={open}
              aria-label={g.title}
              onMouseEnter={() => setHover(g.id)}
              onMouseLeave={() => setHover((h) => (h === g.id ? null : h))}
              onFocus={() => setHover(g.id)}
              onBlur={() => setHover((h) => (h === g.id ? null : h))}
              onClick={(e) => {
                e.stopPropagation();
                setPinned((p) => (p === g.id ? null : g.id));
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setPinned((p) => (p === g.id ? null : g.id));
                }
              }}
              className="absolute inset-0 cursor-pointer outline-none transition duration-300 ease-out"
              style={{
                transform: `rotate(${open ? 0 : g.tilt}deg) scale(${open ? 1.04 : 1})`,
                opacity: dim ? 0.45 : 1,
                filter: open ? "drop-shadow(0 18px 30px rgba(0,0,0,0.22))" : "drop-shadow(0 6px 14px rgba(0,0,0,0.10))",
              }}
            >
              {g.parts.map((p) => (
                <img
                  key={p.src}
                  alt=""
                  draggable={false}
                  loading="lazy"
                  src={asset(p.src)}
                  className="pointer-events-none absolute max-w-none select-none"
                  style={{ left: u(p.x), top: u(p.y), width: u(p.w), height: u(p.h) }}
                />
              ))}
            </div>

            {/* записка с текстом */}
            <div
              aria-hidden={!open}
              className="pointer-events-none absolute transition duration-300 ease-out"
              style={{
                left: u(10),
                top: `calc(100% + ${u(14)})`,
                width: u(Math.max(300, Math.min(g.w, 360))),
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0) rotate(-1deg)" : "translateY(-8px) rotate(-1deg)",
              }}
            >
              <div
                className="bg-[#fff6a8] text-[#161616]"
                style={{
                  borderRadius: u(14),
                  padding: `${u(18)} ${u(22)}`,
                  boxShadow: "0 12px 28px rgba(0,0,0,0.16)",
                }}
              >
                <p className="uppercase tracking-[0.04em] text-[#161616]/45" style={{ fontSize: u(12), lineHeight: u(16) }}>
                  {g.title}
                </p>
                <p className="font-medium" style={{ marginTop: u(6), fontSize: u(21), lineHeight: u(28), letterSpacing: u(-0.2) }}>
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
