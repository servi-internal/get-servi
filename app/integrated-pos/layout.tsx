import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant POS System - No Monthly Fees | Ser.vi",
  description:
    "Cloud-based restaurant POS system with zero monthly costs. Use your own devices, manage counter service, tableside ordering, bar tabs, and online orders from one platform. Train staff in minutes.",
};

export default function IntegratedPOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

