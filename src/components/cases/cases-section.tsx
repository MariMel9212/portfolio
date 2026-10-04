import Link from "next/link";
import { asset } from "@/lib/asset";

const FRAME_W = 1420;
const FRAME_H = 1747;

function u(px: number) {
  return `${(px / FRAME_W) * 100}cqw`;
}

export function CasesSection() {
  return (
    <section id="cases" aria-label="Кейсы" className="mx-0 mb-8 mt-16 scroll-mt-4 lg:mx-[6px] lg:mb-[130px] lg:mt-[150px]">
      <div className="flex flex-col gap-16 overflow-hidden rounded-[28px] bg-[#161616] px-4 py-8 font-medium text-[#fffbfb] sm:gap-24 sm:rounded-[36px] sm:px-6 sm:py-10 lg:hidden">
        <MobileTaxiCard />
        <MobileYulaCard />
      </div>
      <div
        className="@container relative hidden w-full overflow-hidden bg-[#161616] font-medium text-[#fffbfb] lg:block"
        style={{ aspectRatio: `${FRAME_W} / ${FRAME_H}`, borderRadius: u(80) }}
      >
        <TaxiCard />
        <YulaCard />
      </div>
    </section>
  );
}

function MobileTaxiCard() {
  return (
    <Link href="/cases/monitoring" className="case-card flex flex-col gap-6">
      <div className="relative -mx-2 w-[calc(100%+1rem)] overflow-hidden sm:-mx-4 sm:w-[calc(100%+2rem)]">
        <img
          alt="Мониторинг беспилотного автопарка"
          className="case-cover block h-auto w-full"
          src={asset("/figma/cover-taxi-hq.webp")}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-[24px] leading-[30px] tracking-[-0.24px] opacity-90 sm:text-[28px] sm:leading-[34px]">
            Мониторинг беспилотного автопарка
          </h3>
          <p className="text-[15px] leading-[22px] tracking-[-0.15px] opacity-60 sm:text-base sm:leading-6">
            Сервис для инженеров центра мониторинга, который помогает отслеживать состояние автомобилей, замечать критичные инциденты и&nbsp;быстро принимать решение
          </p>
        </div>
        <div className="flex w-fit items-center justify-center rounded-xl bg-[#f7f7f7] px-3 py-2">
          <p className="text-sm leading-5 tracking-[-0.14px] text-[#161616]">Успешное тестовое</p>
        </div>
      </div>
      <MobileMeta />
      <img alt="" className="size-10" src={asset("/figma/t-shield.svg")} />
    </Link>
  );
}

function MobileYulaCard() {
  return (
    <article className="case-card flex flex-col gap-6">
      <div className="overflow-hidden rounded-2xl">
        <img
          alt="Улучшение сценария Безопасной сделки"
          className="case-cover h-auto w-full"
          src={asset("/figma/cover-yula.webp")}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-[24px] leading-[30px] tracking-[-0.24px] opacity-90 sm:text-[28px] sm:leading-[34px]">
            Улучшение сценария Безопасной сделки
          </h3>
          <p className="text-[15px] leading-[22px] tracking-[-0.15px] opacity-60 sm:text-base sm:leading-6">
            Тут тоже будет текст, дополнительно описание
          </p>
        </div>
        <MobileMeta />
      </div>
      <div className="relative size-10 overflow-hidden">
        <img
          alt=""
          className="absolute max-w-none"
          style={{ left: "-22.22%", top: "-22.7%", width: "144.44%", height: "145.39%" }}
          src={asset("/figma/youla-mark.png")}
        />
      </div>
    </article>
  );
}

function MobileMeta() {
  return (
    <div className="flex flex-col gap-2 text-[15px] leading-5 tracking-[-0.15px] opacity-60">
      <div className="flex items-center gap-2">
        <p>Дата</p>
        <p>2025</p>
      </div>
      <div className="flex items-center gap-2">
        <p>Роль</p>
        <p>Product designer</p>
      </div>
    </div>
  );
}

function TaxiCard() {
  return (
    <Link
      href="/cases/monitoring"
      className="case-card absolute flex items-start"
      style={{
        left: u(42),
        top: u(154),
        width: u(1336),
        paddingTop: u(20),
        paddingLeft: u(40),
        paddingRight: u(40),
        borderRadius: u(40),
      }}
    >
      <div
        className="relative z-10 flex shrink-0 flex-col items-start justify-between self-stretch"
        style={{ width: u(447), marginRight: u(-12), paddingBottom: u(20) }}
      >
        <div className="flex w-full flex-col items-start" style={{ gap: u(64) }}>
          <div className="flex w-full flex-col items-start" style={{ gap: u(22) }}>
            <div className="flex w-full flex-col items-start" style={{ gap: u(14) }}>
              <h3 className="opacity-90" style={{ width: u(426), fontSize: u(36), lineHeight: u(44), letterSpacing: u(-0.36) }}>
                Мониторинг беспилотного автопарка
              </h3>
              <p className="w-full opacity-60" style={{ fontSize: u(18), lineHeight: "normal", letterSpacing: u(-0.18) }}>
                Сервис для инженеров центра мониторинга, который помогает отслеживать состояние автомобилей, замечать критичные инциденты и&nbsp;быстро принимать решение
              </p>
            </div>
            <div className="flex items-center justify-center bg-[#f7f7f7]" style={{ borderRadius: u(15), padding: `${u(8)} ${u(12)}` }}>
              <p className="whitespace-nowrap text-[#161616]" style={{ fontSize: u(16), lineHeight: u(21), letterSpacing: u(-0.16) }}>
                Успешное тестовое
              </p>
            </div>
          </div>
          <div className="flex flex-col whitespace-nowrap opacity-60" style={{ width: u(234), gap: u(8), fontSize: u(18), lineHeight: "normal", letterSpacing: u(-0.18) }}>
            <div className="flex items-center" style={{ gap: u(8) }}>
              <p>Дата</p>
              <p>2025</p>
            </div>
            <div className="flex items-center" style={{ gap: u(8) }}>
              <p>Роль</p>
              <p>Product designer</p>
            </div>
          </div>
        </div>
        <img alt="" style={{ width: u(56), height: u(56) }} src={asset("/figma/t-shield.svg")} />
      </div>
      <div className="relative shrink-0" style={{ width: u(821), height: u(632) }}>
        <div className="absolute overflow-hidden" style={{ left: u(-167), top: u(-79), width: u(1176), height: u(711) }}>
          <div className="absolute" style={{ left: u(167), top: u(90), width: u(821), height: u(627), borderRadius: u(26) }}>
            <img
              alt="Мониторинг беспилотного автопарка"
              className="case-cover pointer-events-none absolute max-w-none"
              style={{
                left: u(-182.55),
                top: u(-142.48),
                width: u(1071.87),
                height: u(756.95),
                clipPath: `inset(0 ${u(3)} 0 0)`,
              }}
              src={asset("/figma/cover-taxi.webp")}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

function YulaCard() {
  return (
    <article
      className="case-card absolute flex items-start"
      style={{
        left: u(42),
        top: u(869),
        width: u(1336),
        gap: u(39),
        padding: `${u(20)} ${u(40)}`,
        borderRadius: u(40),
      }}
    >
      <div className="relative shrink-0 overflow-hidden" style={{ width: u(770), height: u(500.5), borderRadius: u(26) }}>
        <img
          alt="Улучшение сценария Безопасной сделки"
          className="case-cover absolute inset-0 size-full max-w-none object-cover"
          src={asset("/figma/cover-yula.webp")}
        />
      </div>
      <div className="flex shrink-0 flex-col items-start" style={{ width: u(447), gap: u(135) }}>
        <div className="flex w-full flex-col items-start" style={{ gap: u(64), paddingTop: u(16) }}>
          <div className="flex w-full flex-col items-start" style={{ gap: u(14) }}>
            <h3 className="opacity-90" style={{ width: u(426), fontSize: u(36), lineHeight: u(44), letterSpacing: u(-0.36) }}>
              Улучшение сценария Безопасной сделки
            </h3>
            <p className="w-full opacity-60" style={{ fontSize: u(22), lineHeight: u(29), letterSpacing: u(-0.22) }}>
              Тут тоже будет текст, дополнительно описание
            </p>
          </div>
          <Meta />
        </div>
        <div className="relative overflow-hidden" style={{ width: u(56), height: u(56) }}>
          <img
            alt=""
            className="absolute max-w-none"
            style={{ left: "-22.22%", top: "-22.7%", width: "144.44%", height: "145.39%" }}
            src={asset("/figma/youla-mark.png")}
          />
        </div>
      </div>
    </article>
  );
}

function Meta() {
  return (
    <div className="flex flex-col whitespace-nowrap opacity-60" style={{ width: u(234), gap: u(12), fontSize: u(22), lineHeight: u(29), letterSpacing: u(-0.22) }}>
      <div className="flex items-center" style={{ gap: u(8) }}>
        <p>Дата</p>
        <p>2025</p>
      </div>
      <div className="flex items-center" style={{ gap: u(8) }}>
        <p>Роль</p>
        <p>Product designer</p>
      </div>
    </div>
  );
}
