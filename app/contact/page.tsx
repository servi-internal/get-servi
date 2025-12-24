import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "Contact Us - Get in Touch with Ser.vi",
  description: "Contact Ser.vi to learn how our restaurant management platform can transform your business. Email us at hello@ser.vi or call +1 (615) 663-3663.",
  openGraph: {
    title: "Contact Ser.vi - Restaurant Management Solutions",
    description: "Get in touch with our team to see how Ser.vi can help your restaurant grow.",
    url: "https://get.ser.vi/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px]"></div>
      <main>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

