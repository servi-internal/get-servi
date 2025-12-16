import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Service Ordering - Ser.vi",
  description:
    "Revolutionize your restaurant service with seamless QR code ordering. No apps, no waiting, just happy customers and faster table turnover. Zero wait times start here.",
};

export default function SelfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

