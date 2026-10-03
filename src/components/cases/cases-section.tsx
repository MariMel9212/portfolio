import { asset } from "@/lib/asset";

const FRAME_W = 1420;
const FRAME_H = 1747;

function u(px: number) {
  return `${(px / FRAME_W) * 100}cqw`;
}

export function CasesSection() {
  return (
    <section id="cases" aria-label="Кейсы" className="mx-[4px] mb-8 mt-16 scroll-mt-4 lg:mx-[6px] lg:mb-[130px] lg:mt-[150px]">
      <div
        className="@container relative w-full overflow-hidden bg-[#161616] font-medium text-[#fffbfb]"
        style={{ aspectRatio: `${FRAME_W} / ${FRAME_H}`, borderRadius: u(80) }}
      >
        <TaxiCard />
        <YulaCard />
      </div>
    </section>
  );
}

function TaxiCard() {
  return (
    <article
      className="case-card group absolute flex items-start"
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
        style={{ width: u(447), marginRight: u(-12) }}
      >
        <div className="flex w-full flex-col items-start" style={{ gap: u(64) }}>
          <div className="flex w-full flex-col items-start" style={{ gap: u(22) }}>
            <div className="flex w-full flex-col items-start" style={{ gap: u(14) }}>
              <h3 className="opacity-90 transition-opacity duration-500 group-hover:opacity-100" style={{ width: u(426), fontSize: u(36), lineHeight: u(44), letterSpacing: u(-0.36) }}>
                Центр мониторинга беспилотного такси
              </h3>
              <p className="w-full opacity-60 transition-opacity duration-500 group-hover:opacity-80" style={{ fontSize: u(22), lineHeight: u(29), letterSpacing: u(-0.22) }}>
                Тут тоже будет текст, дополнительно описание
              </p>
            </div>
            <div className="flex items-center justify-center bg-[#f7f7f7]" style={{ borderRadius: u(15), padding: `${u(8)} ${u(12)}` }}>
              <p className="whitespace-nowrap text-[#161616]" style={{ fontSize: u(16), lineHeight: u(21), letterSpacing: u(-0.16) }}>
                Успешное тестовое
              </p>
            </div>
          </div>
          <Meta />
        </div>
        <img alt="" style={{ width: u(56), height: u(56) }} src={asset("/figma/t-shield.svg")} />
      </div>
      <div className="relative shrink-0" style={{ width: u(821), height: u(632) }}>
        <div className="absolute overflow-hidden" style={{ left: u(-167), top: u(-79), width: u(1176), height: u(711) }}>
          <div className="absolute" style={{ left: u(167), top: u(90), width: u(821), height: u(627), borderRadius: u(26) }}>
            <img
              alt="Центр мониторинга беспилотного такси"
              className="pointer-events-none absolute max-w-none"
              style={{ left: u(-231.1376953125), top: u(-157.76171875), width: u(1134.25), height: u(801) }}
              src={asset("/figma/cover-taxi.webp")}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function YulaCard() {
  return (
    <article
      className="case-card group absolute flex items-start"
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
          className="absolute inset-0 size-full max-w-none object-cover"
          src={asset("/figma/cover-yula.webp")}
        />
      </div>
      <div className="flex shrink-0 flex-col items-start" style={{ width: u(447), gap: u(135) }}>
        <div className="flex w-full flex-col items-start" style={{ gap: u(64), paddingTop: u(16) }}>
          <div className="flex w-full flex-col items-start" style={{ gap: u(14) }}>
            <h3 className="opacity-90 transition-opacity duration-500 group-hover:opacity-100" style={{ width: u(426), fontSize: u(36), lineHeight: u(44), letterSpacing: u(-0.36) }}>
              Улучшение сценария Безопасной сделки
            </h3>
            <p className="w-full opacity-60 transition-opacity duration-500 group-hover:opacity-80" style={{ fontSize: u(22), lineHeight: u(29), letterSpacing: u(-0.22) }}>
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
