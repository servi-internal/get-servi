import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Ser.vi",
  description:
    "Helping independent restaurants compete and thrive. Empowering restaurant owners with cutting-edge technology since 2018.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

