"use client";

import { useEffect, useRef, useState } from "react";

export function ScaledStage({
  width,
  height,
  className,
  children,
}: {
  width: number;
  height: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div ref={ref} className={className} style={{ aspectRatio: `${width} / ${height}` }}>
      <div
        className="relative origin-top-left"
        style={{ width, height, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
