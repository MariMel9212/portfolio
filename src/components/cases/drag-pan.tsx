"use client";

import { useRef, type ReactNode } from "react";

export function DragPan({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const d = useRef({ on: false, x: 0, left: 0, moved: false });

  return (
    <div
      ref={ref}
      className="no-scrollbar w-full cursor-grab overflow-x-auto active:cursor-grabbing"
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        d.current = { on: true, x: e.clientX, left: ref.current.scrollLeft, moved: false };
      }}
      onPointerMove={(e) => {
        if (!d.current.on || !ref.current) return;
        const dx = e.clientX - d.current.x;
        if (Math.abs(dx) > 4) d.current.moved = true;
        ref.current.scrollLeft = d.current.left - dx;
      }}
      onPointerUp={() => (d.current.on = false)}
      onPointerLeave={() => (d.current.on = false)}
      onDragStart={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
}
