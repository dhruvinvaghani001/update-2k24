import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import Counter from "@/components/Counter";
import { Metadata } from "next";

const SponserSection = dynamic(() => import("@/components/SponserSection"));
const FeaturedEvents = dynamic(() => import("@/components/FeaturedEvents"));
const ScheduleSection = dynamic(() => import("@/components/ScheduleSection"));

export const metadata: Metadata = {
  title: "Updates 2k24",
  description:
    "Updates 2k24 is The Official Tech-event of Department of Computer engineering, SCET. Be a part of this Event and transition from Floppy To Cloud.",
  openGraph: {
    title: "Updates 2k24",
    description:
      "Updates 2k24 is The Official Tech-event of Department of Computer engineering, SCET. Be a part of this Event and transition from Floppy To Cloud.",
    images: [
      {
        url: "/path-to-your-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Updates 2k24 poster",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Updates 2k24",
    description:
      "Updates 2k24 is The Official Tech-event of Department of Computer engineering, SCET. Be a part of this Event and transition from Floppy To Cloud.",
    images: ["/path-to-your-twitter-image.jpg"], // Replace with the path to your Twitter card image
  },
};
export default async function Page() {
  return (
    <main className="min-h-screen bg-background max-w-7xl mx-auto relative mb-36">
      <HeroSection />
      <Counter />
      <SponserSection />
      <FeaturedEvents />
      <ScheduleSection />
    </main>
  );
}
