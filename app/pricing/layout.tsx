import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ser.vi - Transparent Restaurant Pricing",
  description: "Pay $0 in fixed fees. Keep your profits. Stop renting your own success with Ser.vi's transparent pricing model.",
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
