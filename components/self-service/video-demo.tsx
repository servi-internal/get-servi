export function VideoDemo() {
  return (
    <section id="video-demo" className="py-8 sm:py-14 lg:py-16 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full min-w-0 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 break-words">
          See It <span className="text-[#FF6600]">In Action</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-5 sm:mb-8">
          Watch how a customer places an order in under 60 seconds.
        </p>
        <div className="w-full max-w-3xl mx-auto relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-black aspect-video border border-gray-100 dark:border-gray-700 min-w-0">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/yjqtGdeWENQ"
            title="Ser.vi Self Service Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="mt-4 text-sm font-bold text-[#333333] dark:text-white">
          We make service faster.
        </p>
      </div>
    </section>
  );
}

