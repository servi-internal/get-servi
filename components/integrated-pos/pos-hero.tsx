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
              absolutely nothing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="rounded-lg bg-[#FF6600] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6600]/30 transition-all hover:translate-y-[-2px] hover:shadow-xl hover:bg-[#E65C00]">
                Book a Demo
              </button>
              <button className="rounded-lg border border-gray-200 bg-white px-8 py-4 text-base font-bold text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
                See How It Works
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mt-2">
              <div className="flex -space-x-2">
                <Image
                  alt="User avatar 1"
                  className="h-8 w-8 rounded-full border-2 border-white dark:border-zinc-950 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnxjOuqUevF0_vZh8O_rA4Wsy5ZL_Z48MJulDK7rnzhYlHHIRo-GlcFziBDhFXF8ukVYDDhMojQWClbC_K0wFirlPCROlxry9l7AeaPoiTmKo9lL17AGmO05PWjVA_QYGezQBRVOuq-rea-8YsHy9bxYcssR0zEutCMV7LJxfiixCVdw4wodT66KQa_2YJSy_K_OCsJVjsKaxZGNJF4ngqRdJQ1jh251Uutq9zV5HqwnKmPClw9V8z2cX9sBIqhIarM3GyulnDbrw"
                  width={32}
                  height={32}
                />
                <Image
                  alt="User avatar 2"
                  className="h-8 w-8 rounded-full border-2 border-white dark:border-zinc-950 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8UJLrXNq_zhmVeDAM5EugjVodVoGJwGliSUZYHtPm7Xp7VR92FK6LnkROzXZHLsAIkbiDNFYC0uhcs_YcEqfPsxwtidQg0YmmfQjooW7U-X8dNKsYkP4UgW1hEuampWCWbHEKcteY6Nsoa0M-XfKj2lVDgwoA_sadsAia34jrBpakIdcPjVEdBN1PGzOyi8IARuRRMVMrzWZeyRdpWy2ONTB9879226rRAYUkezs7eU_3-CSNKbYy6sS07L_w4TYLbrZ-wxF81mI"
                  width={32}
                  height={32}
                />
                <Image
                  alt="User avatar 3"
                  className="h-8 w-8 rounded-full border-2 border-white dark:border-zinc-950 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh_8JDUTsXIqtby_oLilqb6Qr8K6lKYFJmBhnMD9x6h9tqehT_Ag78qS2mX313qW8FF6EAGrM7pf43w0IU21h0MZ7-5oIV0CQ_zOq2HWlxhLEbsjYy2hPGcvIjmX79b9oY8eVB02wdoiG1NewbvAaKoFsue7WgU8yjkOffjnqZh--YuGnSxJZS4hVRM0_5PWKj4KQySD8QxS7td-kAScrN9xfUKsiP1rgZ0TXMFW-24_HIpc0Ck7DYVAkybefcoZz-VqgRM-0PE64"
                  width={32}
                  height={32}
                />
              </div>
              <p>Trusted by 500+ Restaurants</p>
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

