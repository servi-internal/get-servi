"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(
  () =>
    import("@/components/about/leaflet-map").then((mod) => mod.LeafletMap),
  { ssr: false, loading: () => <div className="h-[400px] rounded-xl bg-gray-100 animate-pulse" /> }
);

export function LocationsMap() {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-6">
          <span className="text-[#FF6600] font-bold uppercase tracking-wider text-[10px] sm:text-xs">
            Where We Operate
          </span>
          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1F2937] leading-tight">
            Our <span className="text-[#FF6600]">Global Presence</span>
          </h2>
        </div>

        <div className="relative w-full">
          <LeafletMap />
        </div>
      </div>
    </section>
  );
}
