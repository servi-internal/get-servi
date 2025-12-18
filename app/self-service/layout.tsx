import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code Self-Service Ordering for Restaurants | Ser.vi",
  description:
    "Tableside QR code ordering system for restaurants. Contactless mobile ordering, instant payment, and faster table turnover.",
};

export default function SelfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

