import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { MarketingHero } from "@/components/marketing-services/marketing-hero";
import { GrowthTriad } from "@/components/marketing-services/growth-triad";
import { CustomerJourney } from "@/components/marketing-services/customer-journey";
import { ResultsStats } from "@/components/marketing-services/results-stats";
import { ServicesDetail } from "@/components/marketing-services/services-detail";
import { MobileAppShowcase } from "@/components/marketing-services/mobile-app-showcase";
import { MarketingCTA } from "@/components/marketing-services/marketing-cta";

export const metadata = {
  title: "Restaurant Marketing Services - Market Your Restaurant | Ser.vi",
  description: "Affordably shift customers from expensive delivery apps to your no cost direct ordering and walk-in traffic. Google Ads, SEO, social media, branded apps and more.",
  openGraph: {
    title: "Restaurant Marketing Services | Ser.vi",
    description: "Market your restaurant, not just your online ordering. Google Ads, SEO, social media, branded apps and more.",
    url: "https://get.ser.vi/marketing-services",
  },
};

export default function MarketingServicesPage() {
  return (
    <div className="relative flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px] shrink-0" aria-hidden />
      <main className="flex min-w-0 flex-1 flex-col w-full">
        <MarketingHero />
        <GrowthTriad />
        <CustomerJourney />
        <ResultsStats />
        <ServicesDetail />
        <MobileAppShowcase />
        <MarketingCTA />
      </main>
      <Footer />
    </div>
  );
}

