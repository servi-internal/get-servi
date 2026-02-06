import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-10 sm:pt-12 lg:pt-14 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-3 sm:mb-4">
              <Image
                src="/servi-logo-black.png"
                alt="Ser.vi Logo"
                width={240}
                height={80}
                className="w-auto h-5 sm:h-6"
                quality={100}
              />
            </div>
            <p className="text-gray-500 text-xs max-w-xs mb-4 sm:mb-6 leading-relaxed">
              Serving restaurants since 2016. Modern tech that helps you grow customers, boost profits, and streamline operations — simple, intuitive, and built for you.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#1F2937] mb-3 sm:mb-4 text-xs sm:text-sm">Services</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <a className="hover:text-[#FF6600] transition-colors" href="/online-ordering">
                  Online Ordering
                </a>
              </li>
              <li>
                <a className="hover:text-[#FF6600] transition-colors" href="/marketing-services">
                  Grow & Retain
                </a>
              </li>
              <li>
                <a className="hover:text-[#FF6600] transition-colors" href="/integrated-pos">
                  POS System
                </a>
              </li>
              <li>
                <a className="hover:text-[#FF6600] transition-colors" href="/self-service">
                  Self-Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#1F2937] mb-3 sm:mb-4 text-xs sm:text-sm">Company</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <a
                  className="hover:text-[#FF6600] transition-colors"
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-[#FF6600] transition-colors" href="/pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-[#FF6600] transition-colors" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="hover:text-[#FF6600] transition-colors" href="#faq">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#1F2937] mb-3 sm:mb-4 text-xs sm:text-sm">Resources</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <a className="hover:text-[#FF6600] transition-colors" href="/schedule-demo">
                  Request a Demo
                </a>
              </li>
              <li>
                <a className="hover:text-[#FF6600] transition-colors" href="#faq">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-[#FF6600] transition-colors" href="#reviews">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-5 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p>© 2016-2026 Ser.vi Worldwide LLC. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            <a className="hover:text-[#FF6600] transition-colors whitespace-nowrap" href="/privacy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
