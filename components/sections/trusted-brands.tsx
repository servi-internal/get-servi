import Image from "next/image";

export function TrustedBrands() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-400 text-center">
          Trusted By <span className="text-[#FF6600]">Restaurants</span>
        </p>
        <div className="relative w-full overflow-hidden">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll-logos">
            <div className="flex items-center gap-12 flex-shrink-0">
              <Image src="/logos-webp/rosa.webp" alt="Rosa's Pizzeria" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/midland.webp" alt="Midland Bagels" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/dangelos.webp" alt="D'Angelos" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/piatto.webp" alt="Piatto" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/dolce.webp" alt="Dolce" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/cafe-aroma.webp" alt="Cafe Aroma" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/garviespoint.webp" alt="Garvies Point" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/companatico.webp" alt="Companatico" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/allproplecoffee.webp" alt="All Prople Coffee" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/newriverdale.webp" alt="New Riverdale" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
            <div className="flex items-center gap-12 flex-shrink-0 ml-12">
              <Image src="/logos-webp/rosa.webp" alt="Rosa's Pizzeria" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/midland.webp" alt="Midland Bagels" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/dangelos.webp" alt="D'Angelos" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/piatto.webp" alt="Piatto" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/dolce.webp" alt="Dolce" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/cafe-aroma.webp" alt="Cafe Aroma" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/garviespoint.webp" alt="Garvies Point" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/companatico.webp" alt="Companatico" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/allproplecoffee.webp" alt="All Prople Coffee" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <Image src="/logos-webp/newriverdale.webp" alt="New Riverdale" width={200} height={100} className="object-contain h-20 w-[200px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

