import Image from "next/image";
import { Globe, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 text-[#1F2937] mb-6">
              <Image
                src="/servi-app.png"
                alt="Ser.vi Icon"
                width={32}
                height={32}
                className="size-8"
                quality={100}
              />
              <h2 className="text-xl font-bold">Ser.vi</h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs mb-8 leading-relaxed">
              Ser.vi Worldwide LLC. Helping independent restaurants grow their customer
              list, manage reviews, and offer competitive pricing while reducing
              dependency on expensive delivery apps.
            </p>
            <div className="flex gap-4">
              <a
                className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#FF6600] hover:text-white transition-all"
                href="https://get.ser.vi"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit our website"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#FF6600] hover:text-white transition-all"
                href="/contact"
                title="Contact us"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#FF6600] hover:text-white transition-all"
                href="mailto:contact@ser.vi"
                title="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#1F2937] mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
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
            <h4 className="font-bold text-[#1F2937] mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
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
            <h4 className="font-bold text-[#1F2937] mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-500">
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
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p>© 2025 Ser.vi Worldwide LLC. All rights reserved.</p>
            <span className="hidden sm:inline text-gray-300">•</span>
            <p className="flex items-center gap-1.5">
              Powered by{" "}
              <span className="font-semibold text-[#FF6600]">Ser.vi</span>
            </p>
          </div>
          <div className="flex gap-8">
            <a className="hover:text-[#FF6600] transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-[#FF6600] transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-[#FF6600] transition-colors" href="#">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
