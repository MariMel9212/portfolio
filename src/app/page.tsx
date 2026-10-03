import { ProfileCard } from "@/components/profile-card";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex w-full flex-col">
        <ProfileCard />
      </main>
    </>
  );
}
