import Image from "next/image";

const LOGOS = [
  { src: "/logos-webp/rosa.webp", alt: "Rosa's Pizzeria" },
  { src: "/logos-webp/midland.webp", alt: "Midland Bagels" },
  { src: "/logos-webp/dangelos.webp", alt: "D'Angelos" },
  { src: "/logos-webp/piatto.webp", alt: "Piatto" },
  { src: "/logos-webp/dolce.webp", alt: "Dolce" },
  { src: "/logos-webp/cafe-aroma.webp", alt: "Cafe Aroma" },
  { src: "/logos-webp/garviespoint.webp", alt: "Garvies Point" },
  { src: "/logos-webp/companatico.webp", alt: "Companatico" },
  { src: "/logos-webp/allproplecoffee.webp", alt: "All Prople Coffee" },
  { src: "/logos-webp/newriverdale.webp", alt: "New Riverdale" },
];

export function TrustedBrands() {
  return (
    <section className="w-full bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-5 sm:mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 text-center">
          Trusted By <span className="text-[#FF6600]">Restaurants</span>
        </p>
        <div className="group relative w-full overflow-hidden">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-logos group-hover:[animation-play-state:paused] w-max">
            <div className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
              {[...LOGOS, ...LOGOS].map((logo, index) => (
                <span
                  key={`${logo.src}-${index}`}
                  className="inline-flex transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={100}
                    className="object-contain h-14 sm:h-16 md:h-20 w-[140px] sm:w-[170px] md:w-[200px] flex-shrink-0 transition-all duration-300 hover:brightness-105"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

