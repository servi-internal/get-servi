import { TrendingUp } from "lucide-react";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6 lg:pr-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[#1f2937]">
            Helping Independent Restaurants{" "}
            <span className="text-[#ff6b00]">Compete and Thrive</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#6b7280] leading-relaxed max-w-xl">
            Empowering restaurant owners with cutting-edge technology. We build the
            tools that help local culinary heroes survive the giants and flourish in
            their communities.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button className="bg-[#1f2937] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold hover:opacity-90 transition-all min-h-[44px]">
              View Our Story
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-40 sm:w-64 h-40 sm:h-64 bg-[#ff6b00]/20 rounded-full blur-3xl -z-10"></div>
          <div className="aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCSwJ7ljrqkuT7zeofOaFX3UjecJpvqRxvu9DF0HEhOsBFlfu0eO-FwHcYEuJ0u9eZ0EUBDAA36ewRl09BsP481zyqvrkyvr-n0sRdYK3sd-my4jB9S3FSUXNwfpV-UhavBgxIczPMBxLCJ11b4WgCzfBJACLywigU5l35AJfq2LWgUzX0nCkvhchZpRiZEZIdsIH5hJ8HgkgwCCdYlEjvrTJwy8VhBMkR7WuH-G6or1yifuriRnzk1TJPA8vvGV2J_ArfiezeHJM"
              alt="Team of chefs and restaurant staff working together in a modern kitchen"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="hidden sm:flex absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg items-center gap-3 sm:gap-4 max-w-[200px] sm:max-w-[240px]">
            <div className="size-10 sm:size-12 bg-[#ff6b00]/10 rounded-full flex items-center justify-center text-[#ff6b00] flex-shrink-0">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                Monthly Growth
              </p>
              <p className="text-base sm:text-xl font-bold text-[#1f2937]">+124%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

