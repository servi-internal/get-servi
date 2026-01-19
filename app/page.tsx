import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { TrustedBrands } from "@/components/sections/trusted-brands";
import { Features } from "@/components/sections/features";
import { AdvantageFeatures } from "@/components/sections/advantage-features";
import { Testimonials } from "@/components/sections/testimonials";
import { Stats } from "@/components/sections/stats";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "Ser.vi - Zero Monthly Fees Restaurant POS & Online Ordering Platform",
  description: "Transform your restaurant with Ser.vi's zero-commission POS system, online ordering, self-service kiosks, and marketing automation. No monthly subscription fees. Keep 100% of your revenue.",
  openGraph: {
    title: "Ser.vi - Zero Monthly Fees Restaurant Management Platform",
    description: "All-in-one restaurant technology platform with POS, online ordering, and marketing automation. No monthly fees.",
    url: "https://get.ser.vi",
    images: [{ url: "/og-image.webp" }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ser.vi',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Zero monthly subscription fees. Small convenience fee per transaction.'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '150'
  },
  provider: {
    '@type': 'Organization',
    name: 'Ser.vi Worldwide LLC',
    url: 'https://get.ser.vi',
    logo: 'https://get.ser.vi/servi-logo-black.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-615-663-3663',
      contactType: 'Customer Service',
      email: 'hello@ser.vi',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://www.instagram.com/ser.vi/',
      'https://www.facebook.com/serviworldwide/',
      'https://ser.vi/'
    ]
  },
  description: 'Zero monthly fees restaurant management platform with POS system, online ordering, self-service kiosks, and marketing automation.',
  featureList: [
    'Point of Sale System',
    'Online Ordering Platform',
    'Self-Service Kiosks',
    'Kitchen Display System',
    'Marketing Automation',
    'Customer Relationship Management',
    'Review Management',
    'Loyalty Programs',
    'Gift Cards',
    'Analytics & Reporting'
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        <div className="h-[72px]"></div> {/* Spacer for fixed header */}
        <main>
          <Hero />
          <TrustedBrands />
          <Features />
          <AdvantageFeatures />
          <Testimonials />
          <Stats />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
