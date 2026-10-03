import { asset } from "@/lib/asset"
import { cn } from "@/lib/utils"

export function MailIcon({ className }: { className?: string }) {
  return (
    <div className={cn("relative size-[50px] shrink-0 overflow-clip rounded-full", className)}>
      <img alt="" width={50} height={50} className="absolute inset-0 block size-full max-w-none" src={asset("/figma/mail-icon.png")} />
    </div>
  );
}
