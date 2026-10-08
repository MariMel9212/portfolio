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
        className="pointer-events-none fixed left-0 top-0 z-50 flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-5 py-3 text-[17px] font-semibold leading-none text-[#161616] opacity-0 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_0_4px_rgba(255,255,255,0.18)] transition-opacity duration-150"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5a524" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" fill="#f5a524" fillOpacity="0.18" />
          <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
        </svg>
        {label}
      </div>
    </div>
  );
}
