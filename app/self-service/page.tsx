import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { SelfServiceHero } from "@/components/self-service/self-service-hero";
import { QRPlacement } from "@/components/self-service/qr-placement";
import { WhySwitch } from "@/components/self-service/why-switch";
import { HowItWorks } from "@/components/self-service/how-it-works";
import { PerfectSetup } from "@/components/self-service/perfect-setup";
import { VideoDemo } from "@/components/self-service/video-demo";
import { ContactCTA } from "@/components/self-service/contact-cta";

export const metadata = {
  title: "Self-Service Kiosks & QR Ordering - Reduce Labor Costs | Ser.vi",
  description: "Empower customers with QR code ordering and self-service kiosks. Reduce wait times, increase order accuracy, and lower labor costs. Works with any device.",
  openGraph: {
    title: "Self-Service Kiosks & QR Ordering for Restaurants | Ser.vi",
    description: "Let customers order and pay themselves with QR codes and kiosks. Reduce labor costs and improve efficiency.",
    url: "https://get.ser.vi/self-service",
  },
};

export default function SelfServicePage() {
  return (
    <div className="relative flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px] shrink-0" aria-hidden />
      <main className="flex min-w-0 flex-1 flex-col w-full">
        <SelfServiceHero />
        <QRPlacement />
        <WhySwitch />
        <HowItWorks />
        <PerfectSetup />
        <VideoDemo />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

