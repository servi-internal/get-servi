import Image from "next/image";
import { Globe, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 text-[#1F2937] mb-4 sm:mb-6">
              <Image
                src="/servi-app.png"
                alt="Ser.vi Icon"
                width={32}
                height={32}
                className="size-7 sm:size-8"
                quality={100}
              />
              <h2 className="text-lg sm:text-xl font-bold">Ser.vi</h2>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm max-w-xs mb-6 sm:mb-8 leading-relaxed">
              Ser.vi Worldwide LLC. Helping independent restaurants grow their customer
              list, manage reviews, and offer competitive pricing while reducing
              dependency on expensive delivery apps.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                className="size-9 sm:size-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#FF6600] hover:text-white transition-all"
                href="https://get.ser.vi"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit our website"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                className="size-9 sm:size-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#FF6600] hover:text-white transition-all"
                href="/contact"
                title="Contact us"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                className="size-9 sm:size-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#FF6600] hover:text-white transition-all"
                href="mailto:contact@ser.vi"
                title="Email us"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#1F2937] mb-4 sm:mb-6 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-500">
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
            <h4 className="font-bold text-[#1F2937] mb-4 sm:mb-6 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-500">
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
            <h4 className="font-bold text-[#1F2937] mb-4 sm:mb-6 text-sm sm:text-base">Resources</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-500">
              <li>
                <a className="hover:text-[#FF6600] transition-colors" href="/contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-[#FF6600] transition-colors" href="https://get.ser.vi" target="_blank" rel="noopener noreferrer">
                  Book a Meeting
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
        <div className="border-t border-gray-100 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p>© 2025 Ser.vi Worldwide LLC. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a className="hover:text-[#FF6600] transition-colors whitespace-nowrap" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-[#FF6600] transition-colors whitespace-nowrap" href="#">
              Terms of Service
            </a>
            <a className="hover:text-[#FF6600] transition-colors whitespace-nowrap" href="#">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
