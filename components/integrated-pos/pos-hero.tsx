import Image from "next/image";

export function POSHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              We Accommodate You, <br />
              <span className="text-[#FF6600]">You Don&apos;t Accommodate Us</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              The fastest, simplest POS you&apos;ll ever use — and it costs you
              absolutely nothing. You keep running your restaurant your way.
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#FF6600] mt-1">•</span>
                <span>Use your existing devices — iPads, Android tablets, phones, or PCs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6600] mt-1">•</span>
                <span>Fully customizable to match your workflow (white-label ready)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6600] mt-1">•</span>
                <span>Everything faster, easier, and more profitable</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href="#all-order-types" className="rounded-lg border border-gray-200 bg-white px-8 py-4 text-base font-bold text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 text-center">
                See How It Works
              </a>
            </div>
          </div>
          <div className="relative lg:ml-auto">
            <div className="absolute -top-12 -right-12 -z-10 h-[500px] w-[500px] rounded-full bg-[#FF6600]/10 blur-3xl"></div>
            <div className="relative rounded-2xl bg-gradient-to-tr from-gray-100 to-white p-2 shadow-2xl dark:from-gray-800 dark:to-gray-900 border border-white/20">
              <Image
                alt="Collection of devices showing POS interface floating in 3D space"
                className="rounded-xl w-full h-auto object-cover aspect-[4/3]"
                src="https://assets2.ser.vi/brand/saltestco/feature_image/pos.png"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

