import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Ser.vi",
  description: "Read Ser.vi's terms of service to understand the terms and conditions for using our restaurant management platform.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px]"></div>
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#ff7043] hover:text-[#e64a19] transition-colors mb-6 sm:mb-8 group"
          >
            <svg 
              className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold">Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238] mb-6 sm:mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-sm sm:prose-base max-w-none">
            <p className="text-[#64748b] mb-6">
              <strong>Last Updated:</strong> December 24, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Ser.vi Worldwide LLC ("Ser.vi," "we," "us," or "our") concerning your access to and use of our restaurant management platform and services.
              </p>
              <p className="text-[#64748b] leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                2. Services Description
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Ser.vi provides a comprehensive restaurant management platform including:
              </p>
              <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-4">
                <li>Point-of-Sale (POS) system</li>
                <li>Online ordering and self-service solutions</li>
                <li>Kitchen Display System (KDS)</li>
                <li>Inventory management</li>
                <li>Marketing automation tools</li>
                <li>Customer relationship management</li>
                <li>Analytics and reporting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                3. Account Registration and Security
              </h2>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                3.1 Account Creation
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                To use our services, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials.
              </p>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                3.2 Account Responsibilities
              </h3>
              <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-4">
                <li>You are responsible for all activities under your account</li>
                <li>You must notify us immediately of any unauthorized access</li>
                <li>You must be at least 18 years old to create an account</li>
                <li>You must have authority to bind your business to these Terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                4. Fees and Payment
              </h2>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                4.1 Pricing Model
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Ser.vi operates on a zero monthly subscription model. Instead, a convenience fee is charged to your customers on each transaction. Current fee structures are:
              </p>
              <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-4">
                <li>POS transactions: 4.0% (1.5% Ser.vi fee + 2.5% card processing)</li>
                <li>Online & Self-Service: 5.0% (2.5% Ser.vi fee + 2.5% card processing)</li>
              </ul>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                4.2 Payment Processing
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Payment processing is handled by our third-party payment partner (Zift). You agree to comply with their terms and conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                5. Acceptable Use
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-4">
                <li>Use the services for any illegal purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit malicious code or viruses</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the services</li>
                <li>Use the services to compete with Ser.vi</li>
                <li>Reverse engineer or decompile our software</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                6. Intellectual Property
              </h2>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                6.1 Our Property
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                All content, features, and functionality of our services are owned by Ser.vi and protected by copyright, trademark, and other intellectual property laws.
              </p>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                6.2 Your Content
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                You retain ownership of content you upload (menu items, images, descriptions). You grant us a license to use, store, and display this content to provide our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                7. Data and Privacy
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Your use of our services is also governed by our Privacy Policy. We collect, use, and protect your data as described in our Privacy Policy.
              </p>
              <p className="text-[#64748b] leading-relaxed">
                You own your customer data and can export it at any time. We will not sell your data to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                8. Service Availability and Support
              </h2>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                8.1 Uptime
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We strive to maintain 99.9% uptime but do not guarantee uninterrupted access. We may perform maintenance that temporarily affects availability.
              </p>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                8.2 Offline Mode
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Our POS system includes offline functionality to continue operations during internet outages. Data will sync when connectivity is restored.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                9. Termination
              </h2>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                9.1 By You
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                You may terminate your account at any time by contacting our support team. You will have access to export your data.
              </p>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                9.2 By Us
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We may suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or for any other legitimate business reason.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                10. Disclaimers and Limitations of Liability
              </h2>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                10.1 Disclaimer
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                10.2 Limitation of Liability
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SER.VI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                11. Indemnification
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                You agree to indemnify and hold harmless Ser.vi from any claims, damages, losses, or expenses arising from your use of the services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                12. Dispute Resolution
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the platform. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                14. Governing Law
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                These Terms are governed by the laws of the State of Texas, United States, without regard to conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                15. Contact Information
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0]">
                <p className="text-[#263238] font-semibold mb-2">Ser.vi Worldwide LLC</p>
                <p className="text-[#64748b]">Email: <a href="mailto:legal@ser.vi" className="text-[#ff7043] hover:underline">legal@ser.vi</a></p>
                <p className="text-[#64748b]">Address: Austin, TX, United States</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

