import { asset } from "@/lib/asset";

const stories: {
  cover: string;
  title: string;
  description: string;
  coverRight?: boolean;
}[] = [
  {
    cover: "/figma/deal-cover-flat.webp",
    title: "Улучшение сценария Безопасной сделки",
    description: "Тут тоже будет текст, дополнительно описание",
  },
  {
    cover: "/figma/deal-cover-built.webp",
    title: "Улучшение сценария Безопасной сделки",
    description: "Тут тоже будет текст, дополнительно описание",
  },
  {
    cover: "/figma/test-cover.webp",
    title: "Тут будет некое название",
    description: "Тут тоже будет текст, дополнительно описание",
  },
  {
    cover: "/figma/test-cover-2.webp",
    title: "Тут будет некое название",
    description: "Тут тоже будет текст, дополнительно описание",
  },
  {
    cover: "/figma/deal-cover-3.webp",
    title: "Улучшение сценария Безопасной сделки",
    description: "Тут тоже будет текст, дополнительно описание",
  },
  {
    cover: "/figma/test-cover-3.webp",
    title: "Улучшение сценария Безопасной сделки",
    description: "Тут тоже будет текст, дополнительно описание",
    coverRight: true,
  },
];

export function StoryCases() {
  return (
    <div className="mx-auto mt-10 flex w-full flex-col gap-10 lg:mt-[4.137cqw] lg:gap-[3.898cqw]">
      {stories.map((story) => (
        <article
          key={story.cover}
          className={`@container grid grid-cols-1 items-start gap-6 lg:gap-[3.182cqw] ${
            story.coverRight ? "lg:grid-cols-[447fr_770fr]" : "lg:grid-cols-[770fr_447fr]"
          }`}
        >
          <div
            className={`relative aspect-[770/500] overflow-hidden rounded-[30px] bg-[rgba(27,27,27,0.9)] lg:rounded-[2.387cqw] ${
              story.coverRight ? "lg:order-2" : ""
            }`}
          >
            <img
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full max-w-none object-cover"
              src={asset(story.cover)}
            />
          </div>
          <div
            className={`flex flex-col gap-8 pt-1 font-medium text-[#fffbfb] lg:gap-[5.092cqw] lg:pt-[1.273cqw] ${
              story.coverRight ? "lg:order-1" : ""
            }`}
          >
            <div className="flex flex-col gap-3.5 lg:gap-[1.114cqw]">
              <h3 className="max-w-[426px] text-[28px] leading-[1.22] tracking-[-0.01em] opacity-90 sm:text-[36px] sm:leading-[44px] lg:max-w-[95.3%] lg:text-[length:2.864cqw] lg:leading-[3.5cqw]">
                {story.title}
              </h3>
              <p className="text-[18px] leading-normal tracking-[-0.01em] opacity-60 sm:text-[22px] lg:text-[length:1.75cqw]">
                {story.description}
              </p>
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
          </div>
        </article>
      ))}
    </div>
  );
}
