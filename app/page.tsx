import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { TrustedBrands } from "@/components/sections/trusted-brands";
import { Features } from "@/components/sections/features";
import { AdvantageFeatures } from "@/components/sections/advantage-features";
import { Comparison } from "@/components/sections/comparison";
import { Testimonials } from "@/components/sections/testimonials";
import { Stats } from "@/components/sections/stats";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <div className="h-[72px]"></div> {/* Spacer for fixed header */}
      <main>
        <Hero />
        <TrustedBrands />
        <Features />
        <AdvantageFeatures />
        <Comparison />
        <Testimonials />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
