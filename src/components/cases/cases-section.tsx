import { asset } from "@/lib/asset";

const frame = { width: 1420, height: 1601.5 };

export function CasesSection() {
  return (
    <section id="cases" aria-label="Кейсы" className="mx-[4px] mb-8 mt-16 scroll-mt-4 lg:mx-[6px] lg:mb-[130px] lg:mt-[150px]">
      <div className="@container relative w-full overflow-hidden rounded-[40px] bg-[#161616] lg:rounded-[5.634cqw]" style={{ aspectRatio: `${frame.width} / ${frame.height}` }}>
        <div
          className="absolute left-0 top-0 origin-top-left font-medium text-[#fffbfb]"
          style={{
            width: frame.width,
            height: frame.height,
            transform: `scale(tan(atan2(100cqw, ${frame.width}px)))`,
          }}
        >
          <TaxiCard />
          <YulaCard />
        </div>
      </div>
    </section>
  );
}

function TaxiCard() {
  return (
    <div className="absolute left-[82px] top-[154px] flex h-[627px] items-start">
      <div className="mr-[-12px] flex h-full w-[447px] shrink-0 flex-col items-start justify-between">
        <div className="flex w-full flex-col items-start gap-[64px]">
          <div className="flex w-full flex-col items-start gap-[22px]">
            <div className="flex w-full flex-col items-start gap-[14px]">
              <p className="w-[426px] text-[36px] leading-[44px] tracking-[-0.36px] opacity-90">
                Центр мониторинга беспилотного такси
              </p>
              <p className="w-full text-[22px] leading-normal tracking-[-0.22px] opacity-60">
                Тут тоже будет текст, дополнительно описание
              </p>
            </div>
            <div className="flex items-center justify-center rounded-[15px] bg-[#f7f7f7] px-[12px] py-[8px]">
              <p className="text-[16px] leading-normal tracking-[-0.16px] whitespace-nowrap text-[#161616]">
                Успешное тестовое
              </p>
            </div>
          </div>
          <div className="flex w-[234px] flex-col items-start gap-[12px] text-[22px] leading-normal tracking-[-0.22px] whitespace-nowrap opacity-60">
            <div className="flex items-center gap-[8px]">
              <p>Дата</p>
              <p>2025</p>
            </div>
            <div className="flex w-full items-center gap-[8px]">
              <p>Роль</p>
              <p>Product designer</p>
            </div>
          </div>
        </div>
        <img alt="" className="size-[56px]" src={asset("/figma/t-shield.svg")} />
      </div>
      <div className="relative h-[627px] w-[821px] shrink-0 overflow-visible rounded-[26px] bg-[#1b1b1b]">
        <img
          alt=""
          className="pointer-events-none absolute max-w-none object-cover"
          style={{ left: -166.64, top: -157.76, width: 1175.164, height: 783.539 }}
          src={asset("/figma/cover-taxi.webp")}
        />
      </div>
    </div>
  );
}

function YulaCard() {
  return (
    <div className="absolute left-[82px] top-[947px] flex items-start gap-[39px]">
      <div className="relative h-[500.5px] w-[770px] shrink-0 overflow-hidden rounded-[26px]">
        <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={asset("/figma/cover-yula.webp")} />
      </div>
      <div className="flex w-[447px] shrink-0 flex-col items-start gap-[135px]">
        <div className="flex w-full flex-col items-start gap-[64px] pt-[16px]">
          <div className="flex w-full flex-col items-start gap-[14px]">
            <p className="w-[426px] text-[36px] leading-[44px] tracking-[-0.36px] opacity-90">
              Улучшение сценария Безопасной сделки
            </p>
            <p className="w-full text-[22px] leading-normal tracking-[-0.22px] opacity-60">
              Тут тоже будет текст, дополнительно описание
            </p>
          </div>
          <div className="flex w-[234px] flex-col items-start gap-[12px] text-[22px] leading-normal tracking-[-0.22px] whitespace-nowrap opacity-60">
            <div className="flex items-center gap-[8px]">
              <p>Дата</p>
              <p>2025</p>
            </div>
            <div className="flex w-full items-center gap-[8px]">
              <p>Роль</p>
              <p>Product designer</p>
            </div>
          </div>
        </div>
        <div className="relative size-[56px] overflow-hidden mix-blend-screen">
          <img
            alt=""
            className="absolute left-[-22.22%] top-[-22.7%] h-[145.39%] w-[144.44%] max-w-none"
            src={asset("/figma/youla-mark.png")}
          />
        </div>
      </div>
    </div>
  );
}
