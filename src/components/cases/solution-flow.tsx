"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

export type FlowStep = { src: string; title: string; sub: string; text: string };

export function SolutionFlow({ steps }: { steps: FlowStep[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const n = steps.length;

  useEffect(() => {
    const update = () => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      const next = Math.min(n - 1, Math.floor(p * n));
      setIdx((prev) => (prev === next ? prev : next));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [n]);

  const goTo = (i: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY + ((i + 0.5) / n) * total;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const s = steps[idx];

  return (
    <>
      {/* desktop: pinned scene, screens change while scrolling */}
      <div ref={wrapRef} className="relative hidden lg:block" style={{ height: `${n * 60 + 40}vh` }}>
        <div className="sticky top-0 flex h-screen items-center">
          <div className="grid w-full grid-cols-[270px_minmax(0,1fr)] items-center gap-10">
            <div>
              <div className="text-[13px] tabular-nums text-white/40">
                {String(idx + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
              </div>
              <div key={idx} className="outline-fade mt-4 min-h-[250px]">
                <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-white">{s.title}</h3>
                <div className="mt-1.5 text-[14px] text-white/50">{s.sub}</div>
                <p className="mt-5 text-[15px] leading-[1.6] text-white/80">{s.text}</p>
              </div>
              <div className="mt-6 flex gap-[6px]">
                {steps.map((st, i) => (
                  <button
                    key={st.title}
                    type="button"
                    aria-label={st.title}
                    onClick={() => goTo(i)}
                    className="flex h-5 items-center"
                  >
                    <span
                      className={`block h-[3px] rounded-full transition-all duration-300 ${
                        i === idx ? "w-7 bg-white" : i < idx ? "w-3 bg-white/50" : "w-3 bg-white/20"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="relative h-[min(78vh,760px)] w-full rounded-[22px] bg-white/[0.06]">
              {steps.map((st, i) => (
                <img
                  key={st.src}
                  alt={st.title}
                  src={asset(st.src)}
                  className="absolute inset-0 m-auto max-h-full max-w-full rounded-[14px] object-contain transition-opacity duration-300 ease-out"
                  style={{ opacity: i === idx ? 1 : 0 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* mobile / narrow: plain list */}
      <div className="space-y-10 lg:hidden">
        {steps.map((st, i) => (
          <div key={st.title} className="space-y-3">
            <img alt={st.title} loading="lazy" src={asset(st.src)} className="block w-full rounded-[16px] bg-white/[0.06]" />
            <div>
              <div className="text-[12px] tabular-nums text-white/40">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-[18px] font-semibold text-white">{st.title}</h3>
              <div className="mt-1 text-[13px] text-white/50">{st.sub}</div>
              <p className="mt-3 text-[15px] leading-[1.6] text-white/80">{st.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
