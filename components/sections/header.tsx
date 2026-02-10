"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/online-ordering", label: "Online Ordering" },
  { href: "/self-service", label: "Self Service" },
  { href: "/integrated-pos", label: "Integrated POS" },
  { href: "/marketing-services", label: "Marketing" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-100 bg-white/95 py-2 shadow-md backdrop-blur-md sm:py-2"
          : "border-b border-transparent bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                className={`text-xs xl:text-sm font-semibold hover:text-[#FF6600] transition-colors whitespace-nowrap ${
                  pathname === href ? "text-[#FF6600]" : "text-[#333333]"
                }`}
                href={href}
              >
                {label}
              </Link>
            ))}
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
        <nav className="flex flex-col px-4 py-3 sm:py-4 space-y-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              className={`text-sm font-semibold hover:text-[#FF6600] transition-colors py-2.5 px-3 rounded-lg hover:bg-gray-50 ${
                pathname === href ? "text-[#FF6600] bg-orange-50" : "text-[#333333]"
              }`}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
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
