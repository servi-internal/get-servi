"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md px-4 sm:px-10 transition-all duration-300 ${
        isScrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4 text-[#333333]">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/servi-logo-black.png"
              alt="Ser.vi Logo"
              width={240}
              height={80}
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-6" : "h-8"
              }`}
              priority
              quality={100}
            />
          </Link>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-8">
            <Link
              className="text-[#333333] text-sm font-semibold hover:text-[#FF6600] transition-colors"
              href="/online-ordering"
            >
              Online Ordering
            </Link>
            <Link
              className="text-[#333333] text-sm font-semibold hover:text-[#FF6600] transition-colors"
              href="/self-service"
            >
              Self-Service
            </Link>
            <Link
              className="text-[#333333] text-sm font-semibold hover:text-[#FF6600] transition-colors"
              href="/integrated-pos"
            >
              Integrated POS
            </Link>
            <Link
              className="text-[#333333] text-sm font-semibold hover:text-[#FF6600] transition-colors"
              href="/marketing-services"
            >
              Marketing Services
            </Link>
            <Link
              className="text-[#333333] text-sm font-semibold hover:text-[#FF6600] transition-colors"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-[#333333] text-sm font-semibold hover:text-[#FF6600] transition-colors"
              href="/about"
            >
              About
            </Link>
          </nav>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[#FF6600] text-white text-sm font-bold transition-transform active:scale-95 hover:bg-[#E65C00] shadow-lg shadow-[#FF6600]/20">
            <span className="truncate">Book a Demo</span>
          </button>
        </div>
        <button
          className="md:hidden p-2 text-[#333333]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

