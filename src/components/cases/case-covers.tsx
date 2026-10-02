import { YulaHomeScreen } from "@/components/cases/yula-home-screen";

function IPhoneFrame() {
  return (
    <div className="absolute inset-0 h-[658.331px] w-[327px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img alt="" loading="lazy" className="absolute left-0 top-0 size-full max-w-none" src="/figma/iphone-16.webp" />
      </div>
    </div>
  );
}

export function BeltCover() {
  return (
    <>
      <div className="absolute left-[calc(50%-5px)] top-[-15px] h-[435px] w-[1066px] -translate-x-1/2 opacity-80">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img alt="" loading="lazy" className="absolute left-0 top-[-0.53%] h-[136.92%] w-[99.98%] max-w-none" src="/figma/case-belt.webp" />
        </div>
      </div>
      <div className="absolute left-[320px] top-[-174px] h-[658.331px] w-[327px]">
        <YulaHomeScreen />
        <IPhoneFrame />
      </div>
    </>
  );
}

export function DealCover() {
  return (
    <>
      <div className="absolute left-[154px] top-[-79px] h-[522px] w-[284px] rounded-[84px] bg-white/40 blur-[16.65px]" />
      <div className="absolute left-[552px] top-[63px] h-[530px] w-[284px] rounded-[84px] bg-white/40 blur-[16.65px]" />
      <div className="absolute left-[531px] top-[62px] h-[617px] w-[327px]">
        <div className="absolute left-[21px] top-[0.67px] h-[850px] w-[285px]">
          <img alt="" loading="lazy" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src="/figma/yula-chat.webp" />
        </div>
        <div className="absolute left-0 top-[-20.01px] h-[658.331px] w-[327px]">
          <IPhoneFrame />
        </div>
      </div>
      <div className="absolute left-[132px] top-[-195px] h-[658.331px] w-[327px]">
        <YulaHomeScreen locationIcon="/figma/ic-location-2.svg" />
        <IPhoneFrame />
      </div>
    </>
  );
}
