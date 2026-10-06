"use client";

import { useEffect, useState } from "react";

export type OutlineItem = { id: string; label: string; level: 1 | 2 };

export function CaseOutline({ items }: { items: OutlineItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

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

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Навигация по кейсу"
      className="group fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <div className="flex flex-col items-end gap-[14px] py-4 pl-6">
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            aria-label={it.label}
            onClick={() => go(it.id)}
            className={`h-[2px] rounded-full transition-all duration-300 ${
              it.level === 1 ? "w-7" : "w-4"
            } ${active === it.id ? "bg-white" : "bg-white/30 hover:bg-white/60"}`}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute right-8 top-1/2 w-[240px] -translate-y-1/2 translate-x-2 rounded-[20px] bg-[#262626] p-2 opacity-0 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100">
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            onClick={() => go(it.id)}
            className={`block w-full rounded-[12px] px-3 py-2 text-left transition-colors hover:bg-white/10 ${
              it.level === 1 ? "text-[14px] font-medium" : "pl-6 text-[13px]"
            } ${active === it.id ? "text-white" : "text-white/50"}`}
          >
            {it.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
