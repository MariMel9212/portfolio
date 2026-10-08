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
        <section id="about" aria-label="Обо мне" className="mx-[6px] mb-[130px] hidden scroll-mt-6 lg:block">
          <AboutBoard />
        </section>
      </main>
    </>
  );
}
