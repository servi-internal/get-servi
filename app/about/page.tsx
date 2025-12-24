import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { AboutHero } from "@/components/about/about-hero";
import { MissionSection } from "@/components/about/mission-section";
import { ValuesSection } from "@/components/about/values-section";
import { JourneyTimeline } from "@/components/about/journey-timeline";
import { LeadershipTeam } from "@/components/about/leadership-team";
import { PartnershipSection } from "@/components/about/partnership-section";
import { FinalCTAAbout } from "@/components/about/final-cta-about";

export default function AboutPage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-[#f9fafb] dark:bg-[#18181b]">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px]"></div> {/* Spacer for fixed header */}
      <main>
        <AboutHero />
        <MissionSection />
        <ValuesSection />
        <JourneyTimeline />
        <LeadershipTeam />
        <PartnershipSection />
        <FinalCTAAbout />
      </main>
      <Footer />
    </div>
  );
}

