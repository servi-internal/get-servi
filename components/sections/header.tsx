"use client";

import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SERVICE_LINKS = [
  { href: "/online-ordering", label: "Online Ordering" },
  { href: "/self-service", label: "Self Service" },
  { href: "/integrated-pos", label: "Integrated POS" },
  { href: "/marketing-services", label: "Marketing Services" },
];

const isServicesPath = (path: string) =>
  SERVICE_LINKS.some((s) => s.href === path);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
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
            <Link
              className={`text-xs xl:text-sm font-semibold hover:text-[#FF6600] transition-colors whitespace-nowrap ${
                pathname === "/" ? "text-[#FF6600]" : "text-[#333333]"
              }`}
              href="/"
            >
              Home
            </Link>
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`inline-flex items-center gap-0.5 text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap hover:text-[#FF6600] ${
                  isServicesPath(pathname) ? "text-[#FF6600]" : "text-[#333333]"
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 py-2 min-w-[200px] rounded-xl bg-white border border-gray-100 shadow-lg transition-all duration-200 ${
                  servicesOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
              >
                {SERVICE_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`block px-4 py-2.5 text-sm font-medium transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-orange-50 hover:text-[#FF6600] ${
                      pathname === href ? "text-[#FF6600] bg-orange-50/50" : "text-[#333333]"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
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
        <nav className="flex flex-col px-4 py-3 sm:py-4 space-y-1">
          <Link
            className={`text-sm font-semibold hover:text-[#FF6600] transition-colors py-2.5 px-3 rounded-lg hover:bg-gray-50 ${
              pathname === "/" ? "text-[#FF6600] bg-orange-50" : "text-[#333333]"
            }`}
            href="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`w-full text-left text-sm font-semibold py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between ${
                isServicesPath(pathname) ? "text-[#FF6600] bg-orange-50" : "text-[#333333]"
              }`}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                mobileServicesOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {SERVICE_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block py-2 pl-6 pr-3 text-sm font-medium rounded-lg hover:bg-gray-50 ${
                    pathname === href ? "text-[#FF6600] bg-orange-50/50" : "text-[#333333]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            className={`text-sm font-semibold hover:text-[#FF6600] transition-colors py-2.5 px-3 rounded-lg hover:bg-gray-50 ${
              pathname === "/pricing" ? "text-[#FF6600] bg-orange-50" : "text-[#333333]"
            }`}
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            className={`text-sm font-semibold hover:text-[#FF6600] transition-colors py-2.5 px-3 rounded-lg hover:bg-gray-50 ${
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
