import { BeltCover, DealCover } from "@/components/cases/case-covers";
import { ScaledStage } from "@/components/cases/scaled-stage";

const cases = [
  {
    title: "Тут название кейса, желательно в 2 строки",
    description: "Тут дискрипшин с очень кратким описанием",
    Cover: BeltCover,
  },
  {
    title: "Сделка на юле",
    description: "Тут дискрипшин с очень кратким описанием",
    Cover: DealCover,
  },
];

export function CasesSection() {
  return (
    <section
      id="cases"
      aria-labelledby="cases-title"
      className="mx-[4px] mb-8 mt-16 scroll-mt-4 overflow-clip rounded-[40px] bg-[#161616] px-3 pb-12 pt-8 sm:px-6 lg:mx-[6px] lg:mb-[130px] lg:mt-[150px] lg:rounded-[80px] lg:pb-[130px] lg:pt-[39px]"
    >
      <h2 id="cases-title" className="text-center text-[32px] font-medium leading-normal text-white lg:text-[41px]">
        Кейсы
      </h2>
      <div className="mx-auto mt-8 flex max-w-[976px] flex-col gap-6 lg:mt-[63px] lg:gap-[52px]">
        {cases.map(({ title, description, Cover }) => (
          <article
            key={title}
            className="group flex flex-col overflow-clip rounded-[28px] bg-gradient-to-b from-white/0 to-white/10 transition-transform duration-300 hover:-translate-y-1 lg:h-[685px] lg:rounded-[36px]"
          >
            <ScaledStage
              width={968}
              height={506}
              className="m-[4px] overflow-clip rounded-[24px] bg-[linear-gradient(141.63deg,#1c1c1c_0%,#000105_100%)] lg:rounded-[32px]"
            >
              <Cover />
            </ScaledStage>
            <div className="mt-auto flex flex-col gap-[6px] px-[18px] pb-6 pt-5 leading-normal lg:w-[581px] lg:pb-[37px]">
              <h3 className="text-[20px] font-medium uppercase tracking-[-0.01em] text-[#f4f4f4] opacity-90 sm:text-[29.19px]">
                {title}
              </h3>
              <p className="text-[15px] text-white opacity-70 sm:text-[18px]">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
