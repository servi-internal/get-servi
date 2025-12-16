import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ser.vi - Boost Restaurant Profits",
  description: "Maximize your revenue and streamline operations with cutting-edge tools designed for modern hospitality. Zero commission, increased orders, contactless payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
