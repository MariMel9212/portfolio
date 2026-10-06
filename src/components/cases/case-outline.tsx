"use client";

import { useEffect, useRef, useState } from "react";

export type OutlineItem = { id: string; label: string; desc: string; level: 1 | 2 };

const SHOW_DELAY = 80;
const HIDE_DELAY = 180;
const BASE_W = 14;
const MAX_W = 36;
const PITCH = 13;
const SIGMA = 22;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 96;
  const from = window.scrollY;
  const dist = top - from;
  const flash = () => {
    el.classList.remove("outline-flash");
    void el.offsetWidth;
    el.classList.add("outline-flash");
    window.setTimeout(() => el.classList.remove("outline-flash"), 1500);
  };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || Math.abs(dist) > window.innerHeight * 2.5) {
    window.scrollTo({ top, behavior: "auto" });
    flash();
    return;
  }
  const dur = 340;
  const t0 = performance.now();
  const step = (now: number) => {
    const p = Math.min(1, (now - t0) / dur);
    const e = 1 - Math.pow(1 - p, 3);
    window.scrollTo(0, from + dist * e);
    if (p < 1) requestAnimationFrame(step);
    else flash();
  };
  requestAnimationFrame(step);
}

export function CaseOutline({ items }: { items: OutlineItem[] }) {
  const [visible, setVisible] = useState<string[]>([items[0]?.id]);
  const [hover, setHover] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [y, setY] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const visRef = useRef<string[]>(visible);
  const hoverRef = useRef<string | null>(null);
  const openRef = useRef(false);
  const showT = useRef<number | undefined>(undefined);
  const hideT = useRef<number | undefined>(undefined);
  const raf = useRef<number | undefined>(undefined);

  visRef.current = visible;

  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight;
      const tops = items.map((it) => document.getElementById(it.id)?.getBoundingClientRect().top ?? Infinity);
      const docEnd = document.documentElement.scrollHeight - window.scrollY;
      const vis: string[] = [];
      items.forEach((it, i) => {
        const start = tops[i];
        const end = i + 1 < items.length ? tops[i + 1] : docEnd;
        if (start < vh * 0.92 && end > vh * 0.08) vis.push(it.id);
      });
      const next = vis.length ? vis : [items[items.length - 1].id];
      setVisible((prev) => (prev.join() === next.join() ? prev : next));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  // resting look of the ticks (width + brightness) when the mouse is not over them
  const paintRest = () => {
    items.forEach((it, i) => {
      const b = barRefs.current[i];
      if (!b) return;
      b.style.width = `${BASE_W}px`;
      b.style.opacity = visRef.current.includes(it.id) ? "0.7" : "0.3";
    });
  };
  useEffect(() => {
    if (hoverRef.current === null) paintRest();
  });

  const paintMouse = (clientY: number) => {
    const track = trackRef.current;
    if (!track) return;
    const top = track.getBoundingClientRect().top;
    const padTop = 16;
    let best = 0;
    let bestD = Infinity;
    items.forEach((it, i) => {
      const center = top + padTop + i * PITCH + PITCH / 2;
      const d = clientY - center;
      if (Math.abs(d) < bestD) {
        bestD = Math.abs(d);
        best = i;
      }
      const f = Math.exp(-Math.pow(d / SIGMA, 2));
      const b = barRefs.current[i];
      if (!b) return;
      const base = visRef.current.includes(it.id) ? 0.7 : 0.3;
      b.style.width = `${BASE_W + (MAX_W - BASE_W) * f}px`;
      b.style.opacity = `${base + (1 - base) * f}`;
    });
    return best;
  };

  const onMove = (e: React.MouseEvent) => {
    const cy = e.clientY;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const idx = paintMouse(cy);
      if (idx === undefined) return;
      const id = items[idx].id;
      window.clearTimeout(hideT.current);
      if (hoverRef.current !== id) {
        hoverRef.current = id;
        setHover(id);
        setY(16 + idx * PITCH + PITCH / 2);
      }
      if (!openRef.current) {
        window.clearTimeout(showT.current);
        showT.current = window.setTimeout(() => {
          openRef.current = true;
          setOpen(true);
        }, SHOW_DELAY);
      }
    });
  };

  const onLeave = () => {
    window.clearTimeout(showT.current);
    window.clearTimeout(hideT.current);
    if (raf.current) cancelAnimationFrame(raf.current);
    paintRest();
    hideT.current = window.setTimeout(() => {
      openRef.current = false;
      hoverRef.current = null;
      setOpen(false);
      setHover(null);
    }, HIDE_DELAY);
  };

  const onEnterNav = () => window.clearTimeout(hideT.current);

  const shown = items.find((i) => i.id === hover);

  return (
    <nav
      aria-label="Навигация по кейсу"
      onMouseEnter={onEnterNav}
      onMouseLeave={onLeave}
      className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <div
        ref={trackRef}
        onMouseMove={onMove}
        onMouseLeave={paintRest}
        className="flex flex-col items-end py-4"
      >
        {items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            aria-label={it.label}
            onClick={() => scrollToId(it.id)}
            className="flex items-center justify-end"
            style={{ width: MAX_W + 4, height: PITCH }}
          >
            <span
              ref={(el) => {
                barRefs.current[i] = el;
              }}
              className="block h-[2px] rounded-full bg-white"
              style={{ width: BASE_W, opacity: 0.3, transition: "width 90ms ease-out, opacity 90ms ease-out" }}
            />
          </button>
        ))}
      </div>

      <div
        className="absolute right-full top-0 pr-1"
        style={{
          transform: `translateY(${y}px) translateY(-50%) translateX(${open ? 0 : 6}px)`,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: `opacity 150ms ease-out, transform ${open ? "130ms" : "150ms"} cubic-bezier(0.22,1,0.36,1)`,
          willChange: "transform, opacity",
        }}
      >
        <div className="w-[300px] rounded-[20px] bg-[#262626] px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          {shown && (
            <button
              key={shown.id}
              type="button"
              onClick={() => scrollToId(shown.id)}
              className="outline-fade block w-full text-left"
            >
              <div className="truncate text-[15px] font-medium text-white">{shown.label}</div>
              <div className="mt-1.5 line-clamp-3 text-[14px] leading-[1.5] text-white/50">{shown.desc}</div>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
