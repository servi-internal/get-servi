import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { MarketingHero } from "@/components/marketing-services/marketing-hero";
import { GrowthTriad } from "@/components/marketing-services/growth-triad";
import { CustomerJourney } from "@/components/marketing-services/customer-journey";
import { ComparisonSection } from "@/components/marketing-services/comparison-section";
import { ResultsStats } from "@/components/marketing-services/results-stats";
import { ServicesDetail } from "@/components/marketing-services/services-detail";
import { MobileAppShowcase } from "@/components/marketing-services/mobile-app-showcase";
import { MarketingTestimonials } from "@/components/marketing-services/marketing-testimonials";
import { MarketingCTA } from "@/components/marketing-services/marketing-cta";

export default function MarketingServicesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px]"></div> {/* Spacer for fixed header */}
      <main>
        <MarketingHero />
        <GrowthTriad />
        <CustomerJourney />
        <ComparisonSection />
        <ResultsStats />
        <ServicesDetail />
        <MobileAppShowcase />
        <MarketingTestimonials />
        <MarketingCTA />
      </main>
      <Footer />
    </div>
  );
}

