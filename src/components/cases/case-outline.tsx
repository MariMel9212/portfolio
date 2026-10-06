"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type OutlineItem = { id: string; label: string; desc: string; level: 1 | 2 };

const SHOW_DELAY = 100;
const HIDE_DELAY = 200;
const STORAGE_KEY = "case-outline-bookmarks";

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

function Bookmark({ on }: { on: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={on ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1z" />
    </svg>
  );
}

export function CaseOutline({ items }: { items: OutlineItem[] }) {
  const [visible, setVisible] = useState<string[]>([items[0]?.id]);
  const [mouseY, setMouseY] = useState<number | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [marks, setMarks] = useState<string[]>([]);
  const [pop, setPop] = useState<string | null>(null);
  const tickRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const navRef = useRef<HTMLElement>(null);
  const [y, setY] = useState(0);
  const showT = useRef<number | undefined>(undefined);
  const hideT = useRef<number | undefined>(undefined);

  useEffect(() => {
    try {
      setMarks(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
    } catch {}
  }, []);

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
      setVisible(vis.length ? vis : [items[items.length - 1].id]);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  const trackRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const track = trackRef.current;
    const nav = navRef.current;
    if (!track || !nav) return;
    const my = e.clientY;
    setMouseY(my);
    let best: string | null = null;
    let bestD = Infinity;
    let bestY = 0;
    for (const it of items) {
      const b = tickRefs.current[it.id];
      if (!b) continue;
      const r = b.getBoundingClientRect();
      const c = r.top + r.height / 2;
      const d = Math.abs(my - c);
      if (d < bestD) {
        bestD = d;
        best = it.id;
        bestY = c - nav.getBoundingClientRect().top;
      }
    }
    if (best) {
      window.clearTimeout(hideT.current);
      setHover(best);
      setY(bestY);
      if (!open) {
        window.clearTimeout(showT.current);
        showT.current = window.setTimeout(() => setOpen(true), SHOW_DELAY);
      }
    }
  };

  const enterArea = () => {
    window.clearTimeout(hideT.current);
  };

  const leave = () => {
    window.clearTimeout(showT.current);
    window.clearTimeout(hideT.current);
    setMouseY(null);
    hideT.current = window.setTimeout(() => {
      setOpen(false);
      setHover(null);
    }, HIDE_DELAY);
  };

  const toggleMark = (id: string) => {
    setMarks((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
    setPop(id);
    window.setTimeout(() => setPop(null), 220);
  };

  const shown = items.find((i) => i.id === hover);

  return (
    <nav
      ref={navRef}
      aria-label="Навигация по кейсу"
      onMouseEnter={enterArea}
      onMouseLeave={leave}
      className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <div
        ref={trackRef}
        onMouseMove={onMove}
        onMouseLeave={() => setMouseY(null)}
        className="flex flex-col items-end py-4 pl-10 pr-1"
      >
        {items.map((it) => {
          const isVisible = visible.includes(it.id);
          let f = 0;
          const b = tickRefs.current[it.id];
          if (mouseY !== null && b) {
            const r = b.getBoundingClientRect();
            const d = mouseY - (r.top + r.height / 2);
            f = Math.exp(-Math.pow(d / 22, 2));
          }
          const w = 14 + 22 * f;
          const base = isVisible ? 0.7 : 0.3;
          const alpha = base + (1 - base) * f;
          return (
            <button
              key={it.id}
              ref={(el) => {
                tickRefs.current[it.id] = el;
              }}
              type="button"
              aria-label={it.label}
              onFocus={() => {
                const r = tickRefs.current[it.id]?.getBoundingClientRect();
                if (r) onMove({ clientY: r.top + r.height / 2 } as React.MouseEvent);
              }}
              onClick={() => scrollToId(it.id)}
              className="flex h-[13px] items-center justify-end"
              style={{ width: 40 }}
            >
              <span
                className="block h-[2px] rounded-full bg-white"
                style={{
                  width: w,
                  opacity: alpha,
                  transition: "width 120ms ease-out, opacity 120ms ease-out",
                }}
              />
            </button>
          );
        })}
      </div>

      <div
        className="absolute right-full top-0 pr-2"
        style={{
          transform: `translateY(${y}px) translateY(-50%) translateX(${open ? 0 : 8}px)`,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: `opacity 180ms cubic-bezier(0.22,1,0.36,1), transform ${open ? "200ms" : "180ms"} cubic-bezier(0.22,1,0.36,1)`,
        }}
      >
        <div className="w-[300px] rounded-[20px] bg-[#262626] px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          {shown && (
            <div key={shown.id} className="outline-fade flex items-start gap-3">
              <button
                type="button"
                onClick={() => scrollToId(shown.id)}
                className="min-w-0 flex-1 text-left"
              >
                <div className="truncate text-[15px] font-medium text-white">{shown.label}</div>
                <div className="mt-1.5 line-clamp-3 text-[14px] leading-[1.5] text-white/50">{shown.desc}</div>
              </button>
              <button
                type="button"
                aria-label={marks.includes(shown.id) ? "Убрать закладку" : "Добавить закладку"}
                aria-pressed={marks.includes(shown.id)}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMark(shown.id);
                }}
                className={`mt-0.5 shrink-0 transition-[transform,color] duration-200 ${
                  marks.includes(shown.id) ? "text-white" : "text-white/50 hover:text-white"
                } ${pop === shown.id ? "scale-125" : "scale-100"}`}
              >
                <Bookmark on={marks.includes(shown.id)} />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
