const FRAME_W = 1420;
const FRAME_H = 2282;

function u(px: number) {
  return `${(px / FRAME_W) * 100}cqw`;
}

export function CasesSection() {
  return (
    <section id="cases" aria-label="Кейсы" className="mx-[4px] mb-8 mt-16 scroll-mt-4 lg:mx-[6px] lg:mb-[130px] lg:mt-[150px]">
      <div
        className="@container relative w-full overflow-hidden bg-[#161616]"
        style={{ aspectRatio: `${FRAME_W} / ${FRAME_H}`, borderRadius: u(80) }}
      />
    </section>
  );
}
