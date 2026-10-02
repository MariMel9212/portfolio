import { asset } from "@/lib/asset"

export function MailIcon() {
  return (
    <div className="relative size-[50px] shrink-0 overflow-clip rounded-full">
      <img alt="" width={50} height={50} className="absolute inset-0 block size-full max-w-none" src={asset("/figma/mail-icon.png")} />
    </div>
  );
}
