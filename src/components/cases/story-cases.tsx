import { asset } from "@/lib/asset";

const stories = [
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
];

export function StoryCases() {
  return (
    <div className="mx-auto mt-10 flex w-full max-w-[1257px] flex-col gap-10 lg:mt-[52px] lg:gap-[49px]">
      {stories.map((story) => (
        <article key={story.cover} className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
          <div className="relative aspect-[770/500] w-full overflow-hidden rounded-[30px] bg-[rgba(27,27,27,0.9)] lg:max-w-[770px] lg:min-w-0 lg:flex-1">
            <img
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full max-w-none object-cover"
              src={asset(story.cover)}
            />
          </div>
          <div className="flex flex-col gap-8 pt-1 font-medium text-[#fffbfb] lg:w-[447px] lg:shrink-0 lg:gap-16 lg:pt-4">
            <div className="flex flex-col gap-3.5">
              <h3 className="max-w-[426px] text-[28px] leading-[1.22] tracking-[-0.36px] opacity-90 sm:text-[36px] sm:leading-[44px]">
                {story.title}
              </h3>
              <p className="text-[18px] leading-normal tracking-[-0.22px] opacity-60 sm:text-[22px]">
                {story.description}
              </p>
            </div>
            <dl className="flex flex-col gap-3 text-[18px] leading-normal tracking-[-0.22px] opacity-60 sm:text-[22px]">
              <div className="flex gap-2">
                <dt>Дата</dt>
                <dd>2025</dd>
              </div>
              <div className="flex gap-2">
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
