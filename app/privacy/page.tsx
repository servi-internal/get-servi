import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export default function PrivacyPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px]"></div>
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238] mb-6 sm:mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-sm sm:prose-base max-w-none">
            <p className="text-[#64748b] mb-6">
              <strong>Last Updated:</strong> December 24, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                1. Introduction
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Ser.vi Worldwide LLC ("Ser.vi," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our restaurant management platform and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-4">
                <li>Account information (name, email, phone number, business details)</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Restaurant menu data, pricing, and inventory information</li>
                <li>Customer order information and transaction history</li>
                <li>Communications with our support team</li>
              </ul>

              <h3 className="text-lg font-semibold text-[#263238] mb-3">
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Location data (with your permission)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send transaction notifications</li>
                <li>Respond to customer service requests and support needs</li>
                <li>Send administrative information, updates, and security alerts</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Prevent fraud and enhance platform security</li>
                <li>Comply with legal obligations</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-4">
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (payment processing, data analytics, email delivery)</li>
                <li><strong>Business Partners:</strong> With your consent, for integrated services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
              </ul>
              <p className="text-[#64748b] leading-relaxed">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                5. Data Security
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings, though some features may not function properly if cookies are disabled.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                8. Data Retention
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When no longer needed, we securely delete or anonymize your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                10. International Data Transfers
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on our website and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] mb-4">
                12. Contact Us
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0]">
                <p className="text-[#263238] font-semibold mb-2">Ser.vi Worldwide LLC</p>
                <p className="text-[#64748b]">Email: <a href="mailto:privacy@ser.vi" className="text-[#ff7043] hover:underline">privacy@ser.vi</a></p>
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

