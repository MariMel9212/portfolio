import { asset } from "@/lib/asset";

const stories: {
  cover: string;
  title: string;
  description: string;
  badge?: string;
  coverRight?: boolean;
  bleed?: { left: string; top: string; width: string; height: string; aspect: string };
  textClass?: string;
  mark?: "youla" | "tbank";
}[] = [
  {
    cover: "/figma/cover-yula.webp",
    title: "Улучшение сценария Безопасной сделки",
    description: "Тут тоже будет текст, дополнительно описание",
    mark: "youla",
  },
  {
    cover: "/figma/cover-taxi.webp",
    title: "Центр мониторинга беспилотного такси",
    description: "Тут тоже будет текст, дополнительно описание",
    badge: "Успешное тестовое",
    coverRight: true,
    bleed: { left: "-26.057%", top: "-31.221%", width: "152.618%", height: "156.551%", aspect: "770/500.5" },
    mark: "tbank",
  },
];

export function StoryCases() {
  return (
    <div className="mx-auto flex w-full flex-col gap-10 lg:gap-[13.206cqw]">
      {stories.map((story) => (
        <article
          key={story.cover}
          className={`@container relative grid grid-cols-1 items-start gap-6 lg:gap-[3.182cqw] ${
            story.coverRight ? "lg:grid-cols-[447fr_770fr]" : "lg:grid-cols-[770fr_447fr]"
          }`}
        >
          <div
            className={`relative ${
              story.bleed
                ? ""
                : "aspect-[770/500.5] overflow-hidden rounded-[26px] bg-[#111] lg:rounded-[2.069cqw]"
            } ${story.coverRight ? "lg:order-2" : ""}`}
            style={story.bleed ? { aspectRatio: story.bleed.aspect } : undefined}
          >
            <img
              alt=""
              loading="lazy"
              className={story.bleed ? "absolute max-w-none" : "absolute inset-0 size-full max-w-none object-cover"}
              style={
                story.bleed
                  ? {
                      left: story.bleed.left,
                      top: story.bleed.top,
                      width: story.bleed.width,
                      height: story.bleed.height,
                    }
                  : undefined
              }
              src={asset(story.cover)}
            />
          </div>
          <div
            className={`flex flex-col gap-8 pt-1 font-medium text-[#fffbfb] lg:gap-[5.092cqw] ${story.textClass ?? "lg:pt-[1.273cqw]"} ${
              story.coverRight ? "lg:order-1" : ""
            }`}
          >
            <div className="flex flex-col gap-5 lg:gap-[1.75cqw]">
              <div className="flex flex-col gap-3.5 lg:gap-[1.114cqw]">
                <h3 className="max-w-[426px] text-[28px] leading-[1.22] tracking-[-0.01em] opacity-90 sm:text-[36px] sm:leading-[44px] lg:max-w-[95.3%] lg:text-[length:2.864cqw] lg:leading-[3.5cqw]">
                  {story.title}
                </h3>
                <p className="text-[18px] leading-normal tracking-[-0.01em] opacity-60 sm:text-[22px] lg:text-[length:1.75cqw]">
                  {story.description}
                </p>
              </div>
              {story.badge ? (
                <p className="w-fit rounded-[15px] bg-[#f7f7f7] px-3 py-2 text-[16px] leading-normal tracking-[-0.16px] text-[#161616] lg:rounded-[1.193cqw] lg:px-[0.955cqw] lg:py-[0.636cqw] lg:text-[length:1.273cqw]">
                  {story.badge}
                </p>
              ) : null}
            </div>
            <dl className="flex flex-col gap-3 text-[18px] leading-normal tracking-[-0.01em] opacity-60 sm:text-[22px] lg:gap-[0.955cqw] lg:text-[length:1.75cqw]">
              <div className="flex gap-2 lg:gap-[0.637cqw]">
                <dt>Дата</dt>
                <dd>2025</dd>
              </div>
              <div className="flex gap-2 lg:gap-[0.637cqw]">
                <dt>Роль</dt>
                <dd>Product designer</dd>
              </div>
            </dl>
            {story.mark === "tbank" ? (
              <img
                alt=""
                className={`size-14 lg:size-[4.455cqw] ${story.textClass ? "lg:-mt-[2.148cqw]" : ""}`}
                src={asset("/figma/t-shield.svg")}
              />
            ) : null}
          </div>
          {story.mark === "youla" ? (
            <div className="absolute bottom-0 left-[95.5%] hidden size-[4.455cqw] overflow-hidden mix-blend-screen lg:block">
              <img
                alt=""
                className="absolute left-[-22.22%] top-[-22.7%] h-[145.39%] w-[144.44%] max-w-none"
                src={asset("/figma/youla-mark.png")}
              />
            </div>
          ) : null}
        </article>
      ))}
      <TaxiCard />
    </div>
  );
}

function TaxiCard() {
  return (
    <div className="@container relative w-full font-medium" style={{ aspectRatio: "1257 / 783.26" }}>
      <img
        alt=""
        className="absolute max-w-none"
        style={{ left: "22.781%", top: 0, width: "93.49%", height: "100.036%" }}
        src={asset("/figma/cover-taxi-3.webp")}
      />
      <h3 className="absolute left-0 top-[22.503%] z-10 w-[33.891%] text-[length:2.864cqw] leading-[1.222] tracking-[-0.01em] text-[#fffbfb] opacity-90">
        Центр мониторинга беспилотного такси
      </h3>
      <p className="absolute left-0 top-[35.527%] z-10 w-[35.561%] text-[length:1.75cqw] leading-normal tracking-[-0.01em] text-[#fffbfb] opacity-60">
        Тут тоже будет текст, дополнительно описание
      </p>
      <p className="absolute left-0 top-[45.74%] z-10 rounded-[1.193cqw] bg-[#f7f7f7] px-[0.955cqw] py-[0.636cqw] text-[length:1.273cqw] leading-normal tracking-[-0.01em] text-[#161616]">
        Успешное тестовое
      </p>
      <p className="absolute left-0 top-[58.634%] z-10 text-[length:1.75cqw] leading-[1.318] tracking-[-0.01em] text-[#fffbfb] opacity-60">
        Дата 2025
      </p>
      <p className="absolute left-0 top-[63.87%] z-10 text-[length:1.75cqw] leading-[1.318] tracking-[-0.01em] text-[#fffbfb] opacity-60">
        Роль Product designer
      </p>
      <img
        alt=""
        className="absolute left-0 top-[72.295%] z-10 size-[4.455cqw]"
        src={asset("/figma/t-shield.svg")}
      />
    </div>
  );
}
