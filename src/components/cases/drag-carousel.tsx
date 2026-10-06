"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const GAP = 25;

export function DragCarousel({ children, count }: { children: ReactNode; count: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });
  const [active, setActive] = useState(0);

  const cardWidth = () => {
    const card = ref.current?.querySelector<HTMLElement>("[data-card]");
    return (card?.offsetWidth ?? 834) + GAP;
  };

  const update = useCallback(() => {
    if (!ref.current) return;
    setActive(Math.min(count - 1, Math.max(0, Math.round(ref.current.scrollLeft / cardWidth()))));
  }, [count]);

  useEffect(() => {
    update();
  }, [update]);

  const hovered = useRef(false);
  const visible = useRef(false);
  const lastTouch = useRef(0);
  const activeRef = useRef(0);
  activeRef.current = active;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => (visible.current = e.isIntersecting), { threshold: 0.6 });
    io.observe(el);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = reduce
      ? undefined
      : window.setInterval(() => {
          if (hovered.current || !visible.current || drag.current.active) return;
          if (Date.now() - lastTouch.current < 6000) return;
          const next = activeRef.current + 1 >= count ? 0 : activeRef.current + 1;
          const wrap = next === 0;
          animateTo(next * cardWidth(), wrap ? 1500 : 1100);
        }, 5500);
    return () => {
      io.disconnect();
      if (id) window.clearInterval(id);
    };
  }, [count]);

  const raf = useRef(0);

  const cancelAnim = () => {
    cancelAnimationFrame(raf.current);
    if (ref.current) ref.current.style.scrollSnapType = "";
  };

  const animateTo = (left: number, duration: number) => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    const from = el.scrollLeft;
    const delta = left - from;
    if (Math.abs(delta) < 1) return;
    el.style.scrollSnapType = "none";
    const t0 = performance.now();
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      el.scrollLeft = from + delta * ease(t);
      if (t < 1) raf.current = requestAnimationFrame(step);
      else el.style.scrollSnapType = "";
    };
    raf.current = requestAnimationFrame(step);
  };

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const go = (i: number) => {
    lastTouch.current = Date.now();
    const next = Math.min(count - 1, Math.max(0, i));
    animateTo(next * cardWidth(), 900);
  };

  return (
    <div>
      <div
        ref={ref}
        onScroll={update}
        onPointerEnter={() => (hovered.current = true)}
        onPointerCancel={() => (hovered.current = false)}
        onWheel={() => {
          lastTouch.current = Date.now();
          cancelAnim();
        }}
        onTouchStart={() => {
          lastTouch.current = Date.now();
          cancelAnim();
        }}
        className="no-scrollbar w-full cursor-grab snap-x snap-mandatory overflow-x-auto active:cursor-grabbing"
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse" || !ref.current) return;
          cancelAnim();
          drag.current = { active: true, startX: e.clientX, startLeft: ref.current.scrollLeft, moved: false };
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (!d.active || !ref.current) return;
          const dx = e.clientX - d.startX;
          if (Math.abs(dx) > 4) {
            d.moved = true;
            ref.current.style.scrollSnapType = "none";
          }
          ref.current.scrollLeft = d.startLeft - dx;
        }}
        onPointerUp={() => {
          drag.current.active = false;
          if (ref.current) ref.current.style.scrollSnapType = "";
        }}
        onPointerLeave={() => {
          hovered.current = false;
          lastTouch.current = Date.now();
          drag.current.active = false;
          if (ref.current) ref.current.style.scrollSnapType = "";
        }}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
          }
        }}
        onDragStart={(e) => e.preventDefault()}
      >
        {children}
      </div>

      <div className="mt-5 flex items-center gap-2" role="tablist" aria-label="Слайды">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Слайд ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-white" : "w-2 bg-white/25 hover:bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
