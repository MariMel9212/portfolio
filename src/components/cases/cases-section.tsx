import { StoryCases } from "@/components/cases/story-cases";

export function CasesSection() {
  return (
    <section
      id="cases"
      aria-label="Кейсы"
      className="@container mx-[4px] mb-8 mt-16 scroll-mt-4 overflow-clip rounded-[40px] bg-[#161616] px-[calc(80/1420*100%)] pb-12 pt-8 lg:mx-[6px] lg:mb-[130px] lg:mt-[150px] lg:rounded-[80px] lg:pb-[130px] lg:pt-[39px]"
    >
      <StoryCases />
    </section>
  );
}
