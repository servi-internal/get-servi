export function CTA() {
  return (
    <section className="relative w-full bg-gradient-to-br from-white to-[#FFF3EE] py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-[#333333] sm:text-5xl">
          Ready to grow your restaurant?
        </h2>
        <p className="mb-10 text-lg text-gray-600 max-w-2xl">
          Join thousands of restaurants taking control of their profits today
          with ser.vi&apos;s comprehensive platform.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <button className="flex h-14 min-w-[200px] cursor-pointer items-center justify-center rounded-lg bg-[#FF6600] px-8 text-lg font-bold text-white shadow-xl shadow-[#FF6600]/25 transition-transform hover:bg-[#FF6600]/90 hover:scale-105 active:scale-95">
            Get Started Now
          </button>
        </div>
        <a
          className="mt-8 text-sm font-semibold text-gray-500 hover:text-[#FF6600] underline decoration-2 decoration-[#FF6600]/30 hover:decoration-[#FF6600] transition-all"
          href="#"
        >
          Talk to sales instead
        </a>
      </div>
    </section>
  );
}

