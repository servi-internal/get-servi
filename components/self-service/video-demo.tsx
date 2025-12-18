export function VideoDemo() {
  return (
    <section id="video-demo" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
          See It In Action
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Watch how a customer places an order in under 60 seconds.
        </p>
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video border-4 border-gray-100 dark:border-gray-700">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/yjqtGdeWENQ"
            title="Ser.vi Self Service Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

