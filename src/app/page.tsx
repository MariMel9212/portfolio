import { AboutBoard } from "@/components/about-board";
import { CasesSection } from "@/components/cases/cases-section";
import { ProfileCard } from "@/components/profile-card";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex w-full flex-col">
        <ProfileCard />
        <CasesSection />
        {/* точечная сетка начинается сразу под чёрным блоком кейсов и тянется до конца страницы */}
        <section
          id="about"
          aria-label="Обо мне"
          className="-mt-[130px] hidden scroll-mt-6 pb-[24px] pt-[130px] lg:block"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 1.3px, transparent 1.3px)",
            backgroundSize: "26px 26px",
            backgroundColor: "#f7f7f7",
          }}
        >
          <div className="mx-[6px]">
            <AboutBoard />
          </div>
        </section>
      </main>
    </>
  );
}
