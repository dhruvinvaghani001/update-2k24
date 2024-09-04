import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
const SponserSection = dynamic(() => import("@/components/SponserSection"));
const FeaturedEvents = dynamic(() => import("@/components/FeaturedEvents"));
const ScheduleSection = dynamic(() => import("@/components/ScheduleSection"));

export default async function Page() {
  return (
    <main className="min-h-screen bg-background max-w-7xl mx-auto relative mb-36">
      <HeroSection />
      <SponserSection />
      <FeaturedEvents />
      <ScheduleSection />
    </main>
  );
}
