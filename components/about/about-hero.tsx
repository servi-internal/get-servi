import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6 lg:pr-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[#1f2937]">
            Built by Someone Who{" "}
            <span className="text-[#ff6b00]">Grew Up in a Restaurant</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#6b7280] leading-relaxed max-w-xl">
            I&apos;m Salvatore, Founder & CEO of Ser.vi. Raised in a family restaurant, I went on to work at leading brands before starting Ser.vi in 2016 — with ex-Booking.com engineers and Michelin Star Chefs — to bring the mobile revolution to restaurants.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a href="#mission" className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#FF6600] hover:bg-[#E65C00] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#FF6600]/25 transition-all hover:-translate-y-0.5 min-h-[44px]">
              Our Mission
            </a>
            <a href="#values" className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white border border-gray-300 text-[#1f2937] text-xs sm:text-sm font-bold hover:bg-gray-50 transition-all min-h-[44px]">
              Our Values
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            <Image
              src="https://res.cloudinary.com/dxax8yrgb/image/upload/v1772651853/collage-hero_lkxczs.jpg"
              alt="Team of chefs and restaurant staff working together in a modern kitchen"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

