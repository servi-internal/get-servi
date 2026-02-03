import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule A Demo - Ser.vi",
  description:
    "Book a free 20-minute demo to see where you could be missing out on customers. Get a free marketing report and learn how Ser.vi can grow your restaurant.",
  openGraph: {
    title: "Schedule A Demo - Ser.vi Restaurant Platform",
    description: "Request a demo to see Ser.vi in action. Free marketing report and personalized walkthrough.",
    url: "https://get.ser.vi/schedule-demo",
  },
};

export default function ScheduleDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
