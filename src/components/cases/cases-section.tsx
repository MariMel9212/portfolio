import { StoryCases } from "@/components/cases/story-cases";

export function CasesSection() {
  return (
    <section
      id="cases"
      aria-label="Кейсы"
      className="@container mx-[4px] mb-8 mt-16 scroll-mt-4 overflow-clip rounded-[40px] bg-[#161616] px-[calc(80/1420*100%)] pt-[calc(154/1420*100%)] pb-[calc(120/1420*100%)] lg:mx-[6px] lg:mb-[130px] lg:mt-[150px] lg:rounded-[80px]"
    >
      <StoryCases />
    </section>
  );
}
