"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md px-4 sm:px-6 lg:px-10 transition-all duration-300 ${
        isScrolled ? "py-2 sm:py-2 shadow-md" : "py-3 sm:py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 text-[#333333]">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/servi-logo-black.png"
              alt="Ser.vi Logo"
              width={240}
              height={80}
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-5 sm:h-6" : "h-6 sm:h-8"
              }`}
              priority
              quality={100}
            />
          </Link>
        </div>
        <div className="hidden lg:flex flex-1 justify-end gap-6 xl:gap-8 items-center">
          <nav className="flex items-center gap-4 xl:gap-6">
            <Link
              className={`text-xs xl:text-sm font-semibold hover:text-[#FF6600] transition-colors whitespace-nowrap ${
                pathname === "/" ? "text-[#FF6600]" : "text-[#333333]"
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`text-xs xl:text-sm font-semibold hover:text-[#FF6600] transition-colors whitespace-nowrap ${
                pathname === "/online-ordering" ? "text-[#FF6600]" : "text-[#333333]"
              }`}
              href="/online-ordering"
            >
              Online Ordering
            </Link>
            <Link
              className={`text-xs xl:text-sm font-semibold hover:text-[#FF6600] transition-colors whitespace-nowrap ${
                pathname === "/self-service" ? "text-[#FF6600]" : "text-[#333333]"
              }`}
              href="/self-service"
            >
              Self-Service
            </Link>
            <Link
              className={`text-xs xl:text-sm font-semibold hover:text-[#FF6600] transition-colors whitespace-nowrap ${
                pathname === "/integrated-pos" ? "text-[#FF6600]" : "text-[#333333]"
              }`}
              href="/integrated-pos"
            >
              Integrated POS
            </Link>
            <Link
              className={`text-xs xl:text-sm font-semibold hover:text-[#FF6600] transition-colors whitespace-nowrap ${
                pathname === "/marketing-services" ? "text-[#FF6600]" : "text-[#333333]"
              }`}
              href="/marketing-services"
            >
              Marketing Services
            </Link>
            <Link
              className={`text-xs xl:text-sm font-semibold hover:text-[#FF6600] transition-colors whitespace-nowrap ${
                pathname === "/pricing" ? "text-[#FF6600]" : "text-[#333333]"
              }`}
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className={`text-xs xl:text-sm font-semibold hover:text-[#FF6600] transition-colors whitespace-nowrap ${
                pathname === "/about" ? "text-[#FF6600]" : "text-[#333333]"
              }`}
              href="/about"
            >
              About
            </Link>
          </nav>
          <Link
            href="/schedule-demo"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 xl:h-10 px-4 xl:px-5 bg-[#FF6600] text-white text-xs xl:text-sm font-bold transition-transform active:scale-95 hover:bg-[#E65C00] shadow-lg shadow-[#FF6600]/20"
          >
            <span className="truncate">Request a Demo</span>
          </Link>
        </div>
        <button
          className="lg:hidden p-1.5 sm:p-2 text-[#333333] hover:bg-gray-50 rounded-lg transition-all duration-200 active:scale-95"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <Menu className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : "rotate-0"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 sm:py-4 space-y-2 sm:space-y-3">
            <Link
              className={`text-sm font-semibold hover:text-[#FF6600] transition-colors py-2 sm:py-2.5 px-3 rounded-lg hover:bg-gray-50 ${
                pathname === "/" ? "text-[#FF6600] bg-orange-50" : "text-[#333333]"
              }`}
              href="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={`text-sm font-semibold hover:text-[#FF6600] transition-colors py-2 sm:py-2.5 px-3 rounded-lg hover:bg-gray-50 ${
                pathname === "/online-ordering" ? "text-[#FF6600] bg-orange-50" : "text-[#333333]"
              }`}
              href="/online-ordering"
              onClick={() => setMobileMenuOpen(false)}
            >
              Online Ordering
            </Link>
            <Link
              className={`text-sm font-semibold hover:text-[#FF6600] transition-colors py-2 sm:py-2.5 px-3 rounded-lg hover:bg-gray-50 ${
                pathname === "/self-service" ? "text-[#FF6600] bg-orange-50" : "text-[#333333]"
              }`}
              href="/self-service"
              onClick={() => setMobileMenuOpen(false)}
            >
              Self-Service
            </Link>
            <Link
              className={`text-sm font-semibold hover:text-[#FF6600] transition-colors py-2 sm:py-2.5 px-3 rounded-lg hover:bg-gray-50 ${
                pathname === "/integrated-pos" ? "text-[#FF6600] bg-orange-50" : "text-[#333333]"
              }`}
              href="/integrated-pos"
              onClick={() => setMobileMenuOpen(false)}
            >
              Integrated POS
            </Link>
            <Link
              className={`text-sm font-semibold hover:text-[#FF6600] transition-colors py-2 sm:py-2.5 px-3 rounded-lg hover:bg-gray-50 ${
                pathname === "/marketing-services" ? "text-[#FF6600] bg-orange-50" : "text-[#333333]"
              }`}
              href="/marketing-services"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marketing Services
            </Link>
            <Link
              className={`text-sm font-semibold hover:text-[#FF6600] transition-colors py-2 sm:py-2.5 px-3 rounded-lg hover:bg-gray-50 ${
                pathname === "/pricing" ? "text-[#FF6600] bg-orange-50" : "text-[#333333]"
              }`}
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              className={`text-sm font-semibold hover:text-[#FF6600] transition-colors py-2 sm:py-2.5 px-3 rounded-lg hover:bg-gray-50 ${
                pathname === "/about" ? "text-[#FF6600] bg-orange-50" : "text-[#333333]"
              }`}
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/schedule-demo"
              className="flex w-full cursor-pointer items-center justify-center rounded-lg h-10 sm:h-11 px-5 bg-[#FF6600] text-white text-sm font-bold transition-transform active:scale-95 hover:bg-[#E65C00] shadow-lg shadow-[#FF6600]/20 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="truncate">Request a Demo</span>
            </Link>
          </nav>
      </div>
    </header>
  );
}

