const inner = 'url("/figma/mail-inner.svg")';
const masked = "mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[35.872px_22.936px]";
const paper =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 36.606 22.936' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.12'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(2.1315e-15 1.6565 -2.6437 1.0143e-16 18.303 6.371)'><stop stop-color='rgba(255,255,255,1)' offset='0.47917'/><stop stop-color='rgba(223,223,223,1)' offset='0.54427'/><stop stop-color='rgba(191,191,191,1)' offset='0.60937'/><stop stop-color='rgba(159,159,159,1)' offset='0.67448'/><stop stop-color='rgba(128,128,128,1)' offset='0.73958'/><stop stop-color='rgba(96,96,96,1)' offset='0.80469'/><stop stop-color='rgba(64,64,64,1)' offset='0.86979'/><stop stop-color='rgba(48,48,48,1)' offset='0.90234'/><stop stop-color='rgba(32,32,32,1)' offset='0.9349'/><stop stop-color='rgba(16,16,16,1)' offset='0.96745'/><stop stop-color='rgba(8,8,8,1)' offset='0.98372'/><stop stop-color='rgba(0,0,0,1)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(249, 247, 250) 54.435%, rgb(247, 247, 247) 76.984%, rgb(229, 229, 229) 100%)";

function FoldLight() {
  return (
    <div
      className={`${masked} absolute left-[15.14px] top-[19.82px] h-[11.743px] w-[20px] mix-blend-hard-light mask-position-[-8.073px_-6.331px]`}
      style={{ maskImage: inner }}
    >
      <div className="absolute inset-[-25%_-14.68%]">
        <img alt="" className="block size-full max-w-none" src="/figma/mail-fold-light.svg" />
      </div>
    </div>
  );
}

function EdgeBlur({ mask }: { mask: string }) {
  return (
    <div
      className={`${masked} relative h-[0.853px] w-[20.555px]`}
      style={{ maskImage: inner, maskPosition: mask }}
    >
      <div className="absolute inset-[-86.08%_-3.57%]">
        <img alt="" className="block size-full max-w-none" src="/figma/mail-right-blur.svg" />
      </div>
    </div>
  );
}

function EdgeStroke({ mask }: { mask: string }) {
  return (
    <div
      className={`${masked} pointer-events-none relative h-[0.918px] w-[19.452px] shadow-[-0.092px_0.092px_0.183px_0px_rgba(255,255,255,0.25)]`}
      style={{ maskImage: inner, maskPosition: mask }}
    >
      <div aria-hidden className="absolute inset-0">
        <img alt="" className="absolute size-full max-w-none object-cover" src="/figma/mail-right.png" />
        <img alt="" className="absolute size-full max-w-none object-cover opacity-5" src="/figma/mail-noise.png" />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-0.183px_0.367px_0.367px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

export function MailIcon() {
  return (
    <div className="relative size-[50px] shrink-0 overflow-clip rounded-full">
      <div className="absolute left-0 top-0 size-[50px] rounded-[11.009px] bg-gradient-to-b from-[#3486f4] to-[#2ad1fb]" />
      <div className="absolute left-[7.83px] top-[14.22px] h-[22.018px] w-[34.338px] rounded-[2.272px] bg-black opacity-80 mix-blend-color-burn blur-[0.734px] shadow-[0px_4.037px_5.505px_0px_rgba(0,0,0,0.28)]" />
      <div
        className={`${masked} pointer-events-none absolute left-[6.7px] top-[13.49px] h-[22.936px] w-[36.606px] rounded-[2.569px] mask-position-[0.367px_0px]`}
        style={{ maskImage: inner }}
      >
        <div aria-hidden className="absolute inset-0 rounded-[2.569px]">
          <div className="absolute inset-0 rounded-[2.569px]" style={{ backgroundImage: paper }} />
          <div className="absolute inset-0 rounded-[2.569px] bg-white/20 mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.55px_1.468px_0px_rgba(0,0,0,0.2),inset_0px_0.734px_0.734px_0px_white]" />
      </div>
      <FoldLight />
      <FoldLight />
      <FoldLight />
      <div className="absolute left-[28.35px] top-[21.56px] flex size-[15.138px] items-center justify-center">
        <div className="flex-none rotate-45">
          <EdgeBlur mask="-21.279px -8.073px" />
        </div>
      </div>
      <div className="absolute left-[28.57px] top-[22.29px] flex h-[14.403px] w-[14.405px] items-center justify-center">
        <div className="flex-none rotate-45 skew-x-[-0.01deg]">
          <EdgeStroke mask="-21.505px -8.807px" />
        </div>
      </div>
      <div className="absolute left-[6.52px] top-[22.29px] flex size-[15.138px] items-center justify-center">
        <div className="flex-none -scale-y-100 rotate-135">
          <EdgeBlur mask="0.548px -8.807px" />
        </div>
      </div>
      <div className="absolute left-[7.02px] top-[21.56px] flex h-[14.403px] w-[14.405px] items-center justify-center">
        <div className="flex-none -scale-y-100 rotate-135 skew-x-[0.01deg]">
          <EdgeStroke mask="0.042px -8.073px" />
        </div>
      </div>
      <div
        className={`${masked} absolute left-[16.51px] top-[14.96px] h-[13.119px] w-[17.248px] mix-blend-multiply mask-position-[-9.448px_-1.471px]`}
        style={{ maskImage: inner }}
      >
        <div className="absolute inset-[-30.77%_-29.79%_-47.55%_-29.79%]">
          <img alt="" className="block size-full max-w-none" src="/figma/mail-fold-shadow.svg" />
        </div>
      </div>
      <div
        className={`${masked} absolute left-[16.51px] top-[16.06px] h-[13.119px] w-[17.248px] mix-blend-multiply mask-position-[-9.448px_-2.573px]`}
        style={{ maskImage: inner }}
      >
        <div className="absolute inset-[-30.77%_-29.79%_-47.55%_-29.79%]">
          <img alt="" className="block size-full max-w-none" src="/figma/mail-fold-shadow-2.svg" />
        </div>
      </div>
      <div
        className={`${masked} absolute left-[6.97px] top-[13.4px] h-[16.284px] w-[35.963px] mask-position-[0.096px_0.088px]`}
        style={{ maskImage: inner }}
      >
        <img alt="" className="absolute inset-0 block size-full max-w-none" height="16.284" width="35.963" src="/figma/mail-fold-bottom.png" />
      </div>
      <div
        className={`${masked} absolute left-[7.07px] top-[12.93px] h-[15.734px] w-[35.688px] mask-position-[0px_0.551px]`}
        style={{ maskImage: inner }}
      >
        <img alt="" className="absolute inset-0 block size-full max-w-none" src="/figma/mail-fold.svg" />
      </div>
      <div
        className={`${masked} absolute left-[6.97px] top-[13.49px] h-[23.119px] w-[36.055px] rounded-[2.385px] bg-size-[10.0917px_10.0917px] bg-top-left opacity-4 mix-blend-multiply mask-position-[0.096px_0px]`}
        style={{ backgroundImage: 'url("/figma/mail-noise.png")', maskImage: inner }}
      />
    </div>
  );
}
