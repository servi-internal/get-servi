import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { OrderingHero } from "@/components/online-ordering/ordering-hero";
import { WhyChooseUs } from "@/components/online-ordering/why-choose-us";
import { ScaleFeatures } from "@/components/online-ordering/scale-features";
import { OrderingProcess } from "@/components/online-ordering/ordering-process";
import { PricingSection } from "@/components/online-ordering/pricing-section";

export default function OnlineOrderingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <Header />
      <div className="h-[72px]"></div> {/* Spacer for fixed header */}
      <main className="flex flex-col w-full overflow-hidden">
        <OrderingHero />
        <WhyChooseUs />
        <ScaleFeatures />
        <OrderingProcess />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

