import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrated POS System - Ser.vi",
  description:
    "The fastest, simplest POS you'll ever use — and it costs you absolutely nothing. Use your own devices, no monthly fees, train staff in minutes.",
};

export default function IntegratedPOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

