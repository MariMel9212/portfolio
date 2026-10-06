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

  const go = (i: number) => {
    const next = Math.min(count - 1, Math.max(0, i));
    ref.current?.scrollTo({ left: next * cardWidth(), behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={ref}
        onScroll={update}
        className="no-scrollbar w-full cursor-grab snap-x snap-mandatory overflow-x-auto active:cursor-grabbing"
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse" || !ref.current) return;
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
