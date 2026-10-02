import { cn } from "@/lib/utils";

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
  return (
    <div className={cn("@container relative", className)} style={{ aspectRatio: `${width} / ${height}` }}>
      <div
        className="absolute left-0 top-0 origin-top-left"
        // tan(atan2(a, b)) divides two lengths into a unitless ratio, so the stage scales without JS.
        style={{ width, height, transform: `scale(tan(atan2(100cqw, ${width}px)))` }}
      >
        {children}
      </div>
    </div>
  );
}
