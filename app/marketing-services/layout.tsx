import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ser.vi - Restaurant Marketing Services",
  description:
    "Drive direct orders and turn one-time diners into loyal regulars with our automated marketing engine that connects the dots for you.",
};

export default function MarketingServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

