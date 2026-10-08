"use client";

import { useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

/**
 * A case card that is not open yet: not clickable, and a small "in progress" tag follows the cursor on hover.
 */
export function ClosedCase({
  className,
  style,
  label = "Кейс пока собирается",
  children,
}: {
  className?: string;
  style?: CSSProperties;
  label?: string;
  children: ReactNode;
}) {
  const tag = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent) => {
    const el = tag.current;
    if (!el) return;
    el.style.transform = `translate3d(${e.clientX + 16}px, ${e.clientY + 18}px, 0)`;
    el.style.opacity = "1";
  };
  const leave = () => {
    if (tag.current) tag.current.style.opacity = "0";
  };

  return (
    <div className={className} style={{ ...style, cursor: "default" }} onMouseMove={move} onMouseLeave={leave} aria-disabled="true">
      {children}
      <div
        ref={tag}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-50 flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-[14px] font-medium leading-none text-[#161616] opacity-0 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-opacity duration-150"
      >
        <span className="size-2 rounded-full bg-[#f5a524]" />
        {label}
      </div>
    </div>
  );
}
