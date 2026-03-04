import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { OrderingHero } from "@/components/online-ordering/ordering-hero";
import { Comparison } from "@/components/sections/comparison";
import { WhyChooseUs } from "@/components/online-ordering/why-choose-us";
import { ScaleFeatures } from "@/components/online-ordering/scale-features";
import { OrderingCTA } from "@/components/online-ordering/ordering-cta";

export const metadata = {
  title: "Online Ordering Platform - Zero Commission | Ser.vi",
  description: "Launch your own branded online ordering platform with zero commission fees. Mobile apps, website ordering, and customer loyalty. Keep 100% of your revenue.",
  openGraph: {
    title: "Zero Commission Online Ordering for Restaurants | Ser.vi",
    description: "Own your online ordering with branded mobile apps and website integration. No commission fees.",
    url: "https://get.ser.vi/online-ordering",
  },
};

export default function OnlineOrderingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px] shrink-0" aria-hidden />
      <main className="flex flex-1 flex-col w-full min-w-0 overflow-x-hidden">
        <OrderingHero />
        <Comparison />
        <WhyChooseUs />
        <ScaleFeatures />
        <OrderingCTA />
      </main>
      <Footer />
    </div>
  );
}

