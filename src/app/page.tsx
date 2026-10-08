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
        {/* место под блок «Обо мне» (только десктоп) */}
        <div aria-hidden className="hidden h-[620px] lg:block" />
      </main>
    </>
  );
}
