import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Online Ordering System - Website & Mobile App | Ser.vi",
  description:
    "Launch your own branded restaurant online ordering website and mobile app. Accept orders directly, build customer loyalty, and grow your digital presence.",
};

export default function OnlineOrderingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

