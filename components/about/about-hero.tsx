import { MapPin, TrendingUp } from "lucide-react";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 px-4 sm:px-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 lg:pr-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Est. 2018 — Austin, TX
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#1f2937] dark:text-white">
            Helping Independent Restaurants{" "}
            <span className="text-[#ff6b00]">Compete and Thrive</span>
          </h1>
          <p className="text-lg text-[#6b7280] dark:text-gray-300 leading-relaxed max-w-xl">
            Empowering restaurant owners with cutting-edge technology. We build the
            tools that help local culinary heroes survive the giants and flourish in
            their communities.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#1f2937] dark:bg-white text-white dark:text-[#1f2937] px-6 py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-all">
              View Our Story
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#ff6b00]/20 rounded-full blur-3xl -z-10"></div>
          <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCSwJ7ljrqkuT7zeofOaFX3UjecJpvqRxvu9DF0HEhOsBFlfu0eO-FwHcYEuJ0u9eZ0EUBDAA36ewRl09BsP481zyqvrkyvr-n0sRdYK3sd-my4jB9S3FSUXNwfpV-UhavBgxIczPMBxLCJ11b4WgCzfBJACLywigU5l35AJfq2LWgUzX0nCkvhchZpRiZEZIdsIH5hJ8HgkgwCCdYlEjvrTJwy8VhBMkR7WuH-G6or1yifuriRnzk1TJPA8vvGV2J_ArfiezeHJM"
              alt="Team of chefs and restaurant staff working together in a modern kitchen"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-[240px]">
            <div className="size-12 bg-[#ff6b00]/10 rounded-full flex items-center justify-center text-[#ff6b00]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Monthly Growth
              </p>
              <p className="text-xl font-bold text-[#1f2937] dark:text-white">+124%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

