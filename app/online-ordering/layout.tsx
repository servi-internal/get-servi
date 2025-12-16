import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Ordering Platform - Ser.vi",
  description:
    "Direct online ordering that builds your brand. Stop paying 30% commissions. Take control with commission-free ordering, instant payouts, and full customer data ownership.",
};

export default function OnlineOrderingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

