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
  const [active, setActive] = useState(items[0]?.id);
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
      let current = items[0]?.id;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = it.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  const enterTick = useCallback((id: string) => {
    window.clearTimeout(hideT.current);
    setHover(id);
    const b = tickRefs.current[id];
    const nav = navRef.current;
    if (b && nav) {
      const nb = nav.getBoundingClientRect();
      const bb = b.getBoundingClientRect();
      setY(bb.top - nb.top + bb.height / 2);
    }
    if (!open) {
      window.clearTimeout(showT.current);
      showT.current = window.setTimeout(() => setOpen(true), SHOW_DELAY);
    }
  }, [open]);

  const enterArea = () => {
    window.clearTimeout(hideT.current);
  };

  const leave = () => {
    window.clearTimeout(showT.current);
    window.clearTimeout(hideT.current);
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
      <div className="flex flex-col items-end gap-[3px] py-4 pl-10 pr-1">
        {items.map((it) => {
          const isActive = active === it.id;
          const isHover = hover === it.id;
          const w = isHover ? 36 : isActive ? 28 : 16;
          return (
            <button
              key={it.id}
              ref={(el) => {
                tickRefs.current[it.id] = el;
              }}
              type="button"
              aria-label={it.label}
              onMouseEnter={() => enterTick(it.id)}
              onFocus={() => enterTick(it.id)}
              onClick={() => scrollToId(it.id)}
              className="group flex h-[10px] items-center justify-end"
              style={{ width: 40 }}
            >
              <span
                className={`block h-[2px] rounded-full transition-[width,background-color] duration-200 ease-out ${
                  isActive || isHover ? "bg-white" : "bg-white/30"
                }`}
                style={{ width: w }}
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
