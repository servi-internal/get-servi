import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { SelfServiceHero } from "@/components/self-service/self-service-hero";
import { QRPlacement } from "@/components/self-service/qr-placement";
import { WhySwitch } from "@/components/self-service/why-switch";
import { HowItWorks } from "@/components/self-service/how-it-works";
import { PerfectSetup } from "@/components/self-service/perfect-setup";
import { WhyItMatters } from "@/components/self-service/why-it-matters";
import { PricingCTA } from "@/components/self-service/pricing-cta";
import { VideoDemo } from "@/components/self-service/video-demo";
import { ContactCTA } from "@/components/self-service/contact-cta";

export default function SelfServicePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <div className="h-[72px]"></div> {/* Spacer for fixed header */}
      <main className="flex flex-col w-full">
        <SelfServiceHero />
        <QRPlacement />
        <WhySwitch />
        <HowItWorks />
        <PerfectSetup />
        <WhyItMatters />
        <PricingCTA />
        <VideoDemo />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

