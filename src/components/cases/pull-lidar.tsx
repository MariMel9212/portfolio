"use client";

import { useEffect, useRef, useState } from "react";

const ARM = 32; // px of pull needed to "arm" the sensor

type Phase = "idle" | "reboot" | "done";

/**
 * Easter egg for the very top of the case: pulling the page down (Safari / trackpad rubber band)
 * reveals a LiDAR sensor. Pull far enough and release — it "reboots", like in the case itself.
 * Mount inside a `relative` root; the sensor sits in the gap above it that the pull reveals.
 */
export function PullLidar() {
  const [pull, setPull] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const armed = useRef(false);
  const busy = useRef(false);

  useEffect(() => {
    const timers: number[] = [];
    const onScroll = () => {
      const p = Math.max(0, -window.scrollY);
      setPull(p);
      if (busy.current) return;
      if (p > ARM) armed.current = true;
      if (armed.current && p < 4) {
        armed.current = false;
        busy.current = true;
        setPhase("reboot");
        timers.push(
          window.setTimeout(() => setPhase("done"), 1600),
          window.setTimeout(() => {
            setPhase("idle");
            busy.current = false;
          }, 3200),
        );
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      timers.forEach(window.clearTimeout);
    };
  }, []);

  const ready = pull > ARM;
  const k = Math.min(1, pull / ARM);

  return (
    <>
      {/* lives in the gap that the rubber band reveals above the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-[84px] flex h-[84px] flex-col items-center justify-end gap-1.5 pb-3"
        style={{ opacity: Math.min(1, pull / 8) }}
      >
        <svg width="40" height="40" viewBox="0 0 56 56" fill="none" style={{ transform: `scale(${0.7 + 0.3 * k}) rotate(${pull * 8}deg)` }}>
          <circle cx="28" cy="28" r="26" stroke={ready ? "#3b9bff" : "rgba(255,255,255,0.25)"} strokeWidth="2" strokeDasharray="4 5" />
          <circle cx="28" cy="28" r="15" stroke={ready ? "#3b9bff" : "rgba(255,255,255,0.35)"} strokeWidth="2" />
          <path d="M28 28L28 6" stroke={ready ? "#3b9bff" : "rgba(255,255,255,0.5)"} strokeWidth="2" strokeLinecap="round" />
          <circle cx="28" cy="28" r="3" fill={ready ? "#3b9bff" : "#fff"} />
        </svg>
        <span className="text-[12px] text-white/60">{ready ? "Отпусти — перезапущу LiDAR" : "Потяни ещё"}</span>
      </div>

      {/* after release the gap closes, so the result is shown as a toast */}
      <div
        aria-live="polite"
        className={`pointer-events-none fixed left-1/2 top-5 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-[#2a2a2a] px-4 py-2.5 text-[14px] text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition duration-300 ${
          phase === "idle" ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {phase === "done" ? (
          <>
            <span className="flex size-5 items-center justify-center rounded-full bg-[#22c55e] text-[12px]">✓</span>
            LiDAR снова в сети
          </>
        ) : (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-white/25 border-t-[#3b9bff]" />
            Перезагрузка LiDAR…
          </>
        )}
      </div>
    </>
  );
}
