import Link from "next/link";

const HERO_IMAGE = "https://assets2.ser.vi/brand/saltestco/feature_image/hero-imge.png";

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8 lg:pt-28 lg:pb-20"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #FFF8F5 35%, #FFF3EE 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-3xl text-[#333333] text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Boost profits.{" "}
            <span className="text-[#FF6600]">Get more customers.</span>{" "}
            Serve faster.
          </h1>
          <p className="mt-5 max-w-xl text-gray-600 text-base sm:text-lg">
            Stop overpaying on delivery commissions, card fees, and labor. One platform for POS, online ordering, and self-service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/pricing"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#FF6600] px-6 text-sm font-bold text-white transition hover:bg-[#e65c00] focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:ring-offset-2"
            >
              See pricing
            </Link>
            <Link
              href="/schedule-demo"
              className="inline-flex h-11 items-center justify-center rounded-lg border-2 border-[#333333] bg-transparent px-6 text-sm font-bold text-[#333333] transition hover:bg-[#333333] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2"
            >
              Request a demo
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="relative mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-xl border border-[#FF6600]/10 bg-white shadow-xl shadow-gray-200/60 sm:rounded-2xl">
              <div
                className="aspect-[16/10] w-full sm:aspect-[2/1]"
                style={{
                  backgroundImage: `url(${HERO_IMAGE})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 h-2 w-24 -translate-x-1/2 rounded-full bg-[#FF6600]/20" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
