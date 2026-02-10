import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "https://assets2.ser.vi/brand/saltestco/feature_image/hero_happy.png";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8 lg:pt-28 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <h1 className="max-w-xl text-[#333333] text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:max-w-none lg:text-5xl xl:text-6xl">
              Boost profits.{" "}
              <span className="text-[#FF6600]">
                Get more customers.
              </span>{" "}
              Serve faster.
            </h1>
            <p className="mt-5 max-w-lg text-gray-600 text-base sm:text-lg lg:max-w-xl">
              Stop overpaying on delivery commissions, card fees, and labor. Use our platform to save money and attract new customers to grow your business.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:justify-start lg:mt-10">
              <Link
                href="/schedule-demo"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6600] px-6 text-sm font-bold text-white shadow-lg shadow-[#FF6600]/25 transition hover:bg-[#e65c00] hover:shadow-[#FF6600]/30 focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:ring-offset-2"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:pl-4">
            <div className="relative mx-auto max-w-md">
              <div
                className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xl shadow-gray-300/40 ring-1 ring-black/5 sm:rounded-3xl"
                style={{
                  boxShadow:
                    "0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03), 0 4px 6px -2px rgba(255,102,0,0.06)",
                }}
              >
                <div
                  className="aspect-square w-full"
                  style={{
                    backgroundImage: `url(${HERO_IMAGE})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              {/* Decorative corner accent */}
              <div
                className="absolute -right-2 -top-2 h-24 w-24 rounded-2xl border-2 border-[#FF6600]/15 bg-[#FF6600]/05 sm:-right-3 sm:-top-3 sm:h-28 sm:w-28"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
