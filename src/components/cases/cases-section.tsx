import { asset } from "@/lib/asset";

export function CasesSection() {
  return (
    <section id="cases" aria-label="Кейсы" className="mx-[4px] mb-8 mt-16 scroll-mt-4 lg:mx-[6px] lg:mb-[130px] lg:mt-[150px]">
      <div
        className="@container relative w-full overflow-hidden bg-[#161616] font-medium text-[#fffbfb]"
        style={{ aspectRatio: "1420 / 1601.5", borderRadius: "5.634cqw" }}
      >
        <TaxiCard />
        <YulaCard />
      </div>
    </section>
  );
}

function TaxiCard() {
  return (
    <div className="absolute flex items-start" style={{ left: "5.775%", top: "9.616%", width: "88.451%", height: "39.151%" }}>
      <div className="flex h-full w-[35.59%] shrink-0 flex-col items-start justify-between" style={{ marginRight: "-0.955%" }}>
        <div className="flex w-full flex-col items-start" style={{ gap: "4.507cqw" }}>
          <div className="flex w-full flex-col items-start" style={{ gap: "1.549cqw" }}>
            <div className="flex w-full flex-col items-start" style={{ gap: "0.986cqw" }}>
              <p className="w-[95.3%] text-[length:2.535cqw] leading-[1.222] tracking-[-0.01em] opacity-90">
                Центр мониторинга беспилотного такси
              </p>
              <p className="w-full text-[length:1.549cqw] leading-normal tracking-[-0.01em] opacity-60">
                Тут тоже будет текст, дополнительно описание
              </p>
            </div>
            <div className="flex items-center justify-center bg-[#f7f7f7] px-[0.845cqw] py-[0.563cqw]" style={{ borderRadius: "1.056cqw" }}>
              <p className="text-[length:1.127cqw] leading-normal tracking-[-0.01em] whitespace-nowrap text-[#161616]">
                Успешное тестовое
              </p>
            </div>
          </div>
          <div className="flex w-[52.35%] flex-col items-start text-[length:1.549cqw] leading-normal tracking-[-0.01em] whitespace-nowrap opacity-60" style={{ gap: "0.845cqw" }}>
            <div className="flex items-center" style={{ gap: "0.563cqw" }}>
              <p>Дата</p>
              <p>2025</p>
            </div>
            <div className="flex w-full items-center" style={{ gap: "0.563cqw" }}>
              <p>Роль</p>
              <p>Product designer</p>
            </div>
          </div>
        </div>
        <img alt="" className="size-[3.944cqw]" src={asset("/figma/t-shield.svg")} />
      </div>
      <div className="relative h-full min-w-0 flex-1 overflow-visible bg-[#1b1b1b]" style={{ borderRadius: "1.831cqw" }}>
        <img
          alt=""
          className="pointer-events-none absolute max-w-none object-cover"
          style={{ left: "-20.297%", top: "-25.161%", width: "143.138%", height: "124.966%" }}
          src={asset("/figma/cover-taxi.webp")}
        />
      </div>
    </div>
  );
}

function YulaCard() {
  return (
    <div className="absolute flex items-start" style={{ left: "5.775%", top: "59.132%", width: "88.451%", gap: "2.746cqw" }}>
      <div className="relative shrink-0 overflow-hidden" style={{ width: "61.306%", aspectRatio: "770 / 500.5", borderRadius: "1.831cqw" }}>
        <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={asset("/figma/cover-yula.webp")} />
      </div>
      <div className="flex w-[35.59%] shrink-0 flex-col items-start" style={{ gap: "9.507cqw" }}>
        <div className="flex w-full flex-col items-start pt-[1.127cqw]" style={{ gap: "4.507cqw" }}>
          <div className="flex w-full flex-col items-start" style={{ gap: "0.986cqw" }}>
            <p className="w-[95.3%] text-[length:2.535cqw] leading-[1.222] tracking-[-0.01em] opacity-90">
              Улучшение сценария Безопасной сделки
            </p>
            <p className="w-full text-[length:1.549cqw] leading-normal tracking-[-0.01em] opacity-60">
              Тут тоже будет текст, дополнительно описание
            </p>
          </div>
          <div className="flex w-[52.35%] flex-col items-start text-[length:1.549cqw] leading-normal tracking-[-0.01em] whitespace-nowrap opacity-60" style={{ gap: "0.845cqw" }}>
            <div className="flex items-center" style={{ gap: "0.563cqw" }}>
              <p>Дата</p>
              <p>2025</p>
            </div>
            <div className="flex w-full items-center" style={{ gap: "0.563cqw" }}>
              <p>Роль</p>
              <p>Product designer</p>
            </div>
          </div>
        </div>
        <div className="relative size-[3.944cqw] overflow-hidden mix-blend-screen">
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
