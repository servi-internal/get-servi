import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { POSHero } from "@/components/integrated-pos/pos-hero";
import { POSFeatureHighlights } from "@/components/integrated-pos/pos-feature-highlights";
import { AllOrderTypes } from "@/components/integrated-pos/all-order-types";
import { POSFeaturesGrid } from "@/components/integrated-pos/pos-features-grid";
import { ConnectedHub } from "@/components/integrated-pos/connected-hub";
import { TableSidePayments } from "@/components/integrated-pos/table-side-payments";
import { GiftCardSection } from "@/components/integrated-pos/gift-card-section";
import { OnlineOrderingSection } from "@/components/integrated-pos/online-ordering-section";
import { POSCallToAction } from "@/components/integrated-pos/pos-cta";

export const metadata = {
  title: "Restaurant POS System - Works on Any Device | Ser.vi",
  description: "Flexible POS system that works on iPads, Android tablets, phones, and PCs. Offline mode, kitchen display, and integrated payments. No monthly fees.",
  openGraph: {
    title: "Flexible Restaurant POS System | Ser.vi",
    description: "Use your existing devices as a powerful POS system. Works offline with integrated kitchen display and payments.",
    url: "https://get.ser.vi/integrated-pos",
  },
};

export default function IntegratedPOSPage() {
  return (
    <div className="relative flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px] shrink-0" aria-hidden />
      <main className="flex min-w-0 flex-1 flex-col w-full overflow-x-hidden">
        <POSHero />

        {/* POS Features Grid */}
        <POSFeaturesGrid />

        {/* All Order Types */}
        <AllOrderTypes />

        {/* Feature Highlights Bar */}
        <POSFeatureHighlights />

        {/* Integrated online ordering */}
        <OnlineOrderingSection />

        {/* Fast table side payments */}
        <TableSidePayments />

        {/* Gift Card section */}
        <GiftCardSection />

        {/* Connected Hub */}
        <ConnectedHub />

        {/* CTA */}
        <POSCallToAction />

      </main>
      <Footer />
    </div>
  );
}

