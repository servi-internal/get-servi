import Image from "next/image";

const PARTNERS = [
  {
    name: "Star Micronics",
    category: "Hardware",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103562/star_o0r1de.png",
  },
  {
    name: "Zift",
    category: "Platform",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103563/zift_s1h5of.png",
  },
  {
    name: "Sunmi",
    category: "Hardware",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103562/sunmi_q5zhwx.png",
  },
  {
    name: "CardConnect",
    category: "Payments",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103562/cardconnect_aksprw.png",
  },
  {
    name: "HP",
    category: "Hardware",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103561/hp_irlh40.png",
  },
  {
    name: "AWS",
    category: "Infrastructure",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103560/aws_gfijap.png",
  },
  {
    name: "Chase",
    category: "Payments",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103561/Chase_a2soch.png",
  },
  {
    name: "Brother",
    category: "Hardware",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103561/brother-logo_clf7zx.png",
  },
  {
    name: "Canon",
    category: "Hardware",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103561/canon_nlhknu.png",
  },
  {
    name: "Cloudflare",
    category: "Infrastructure",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103561/cloudflare_jjvj4e.webp",
  },
  {
    name: "Apple",
    category: "Platform",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103560/Apple_lapwlv.png",
  },
  {
    name: "Android",
    category: "Platform",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103560/android_jelrkf.png",
  },
  {
    name: "Authorize.net",
    category: "Payments",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103560/authorize_fnk857.webp",
  },
  {
    name: "Epson",
    category: "Hardware",
    logo: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1772103560/Epson_ixkpvn.png",
  },
];

export function TechnologyPlatform() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f9fafb] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <span className="text-[#FF6600] font-bold uppercase tracking-wider text-[10px] sm:text-xs">
            Built On The Best
          </span>
          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1F2937] leading-tight">
            Technology <span className="text-[#FF6600]">Platform</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Ser.vi integrates with the hardware, payments, and infrastructure
            partners restaurants already know and trust.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#f9fafb] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#f9fafb] to-transparent z-10 pointer-events-none" />

        <div className="animate-scroll-partners flex w-max items-center">
          {doubled.map((partner, i) => (
            <div key={`${partner.name}-${i}`} className="flex-shrink-0 mx-6 sm:mx-8 h-10 sm:h-12 flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={36}
                className={`max-h-8 sm:max-h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-200${partner.name === "Authorize.net" ? " scale-[1.9]" : partner.name === "Android" || partner.name === "Apple" ? " scale-[1.4]" : ""}`}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
