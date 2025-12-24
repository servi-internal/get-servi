import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://get.ser.vi'),
  title: {
    default: "Ser.vi - Restaurant POS, Online Ordering & Management Platform",
    template: "%s | Ser.vi"
  },
  description: "Zero monthly fees restaurant management platform. POS system, online ordering, self-service kiosks, and marketing automation. Keep 100% of your revenue with Ser.vi.",
  keywords: [
    "restaurant POS system",
    "online ordering platform",
    "restaurant management software",
    "zero commission ordering",
    "restaurant marketing automation",
    "self-service kiosks",
    "restaurant technology",
    "direct ordering platform",
    "restaurant CRM",
    "kitchen display system"
  ],
  authors: [{ name: "Ser.vi Worldwide LLC" }],
  creator: "Ser.vi Worldwide LLC",
  publisher: "Ser.vi Worldwide LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://get.ser.vi",
    siteName: "Ser.vi",
    title: "Ser.vi - Zero Monthly Fees Restaurant Management Platform",
    description: "Transform your restaurant with our zero-commission POS, online ordering, and marketing automation. No monthly subscription fees.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Ser.vi Restaurant Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ser.vi - Zero Monthly Fees Restaurant Management Platform",
    description: "Transform your restaurant with our zero-commission POS, online ordering, and marketing automation.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        {children}
        <Script
          src="https://embed.small.chat/T0G8W0N84C01KUK31DM2.js"
          strategy="afterInteractive"
          async
        />
      </body>
    </html>
  );
}
