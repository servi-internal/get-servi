import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";

export function LeadershipTeam() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former restaurant manager turned tech entrepreneur. Passionate about sustainable food systems.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1W-xezASQtayjQW1pBn101LGtSTHlc-YcQ7Fb5G5mCYVzPjAVyBL2nPctUlfos4jLpjSGPitoTInZTsgB9QYoNS3340Jr8JpDEviJRKUHae333XtrEipSYQrD9HpxCCwENE3ny52umTLS1ZsGPH-vC8OZihV7ZPWJ6SpQj5IFG_ION-3VnnCBVPc3ZDR9bCo9G2gLmi4c1W3ccORfhsik1SqfSMCeq6PmDIWE4Wr2wdwvs6wjGcM5bQnoglV6vNdtmF8LOYnlOqE",
    },
    {
      name: "David Miller",
      role: "CTO",
      bio: "Full-stack wizard with 15 years in fintech. Loves spicy food and clean code.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDudXJ4T7RV4UIYDs3f-RTSayMHbN4S9b9mDSCvIXxRu07H1-M331VCe7wwU66SlTqnvCDUessUHG9zKgr2KAJe5c2gDn3O5cwk_9G8rnju_YfDjllcPPqSMU3Y2ZlIjC6dC2YgCaasXwn62NVPnkn_cSZ9F4rE9qeeWaocCHVpM0eAugWtvWy7OnRT9-ydsG12VMdhOCRmOyB8YX9rNsKTb6kSW13O-o-I7rk4yJo2RnPY85SreOQY13sPweq_-fuXCzHKlx4nQ9o",
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Product",
      bio: "Product strategist focused on intuitive UX design for high-pressure environments.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDUcRbmucRhhmDM8cYLu2JTx9R648ofNYgygLe_0MnNBRKpWcdGkvsYhEsUVlrQcs09gVn8CpX_xWl76C1mYV4tKQ4u6QTUBFLbwwSbXAoRMCMaD2Jk0ipmITCewzU1yQ_1BmNbogt-_tXBfA-XVFlJ5MK4axIG7vszmW5zvSxbstgCNnf9jXdepHDGmgylMd0Hkfsnj5uO8m4Ev5AP9aB_ZK-viRijmRp07JW20_tYMLZbdbWefSyqKImj7z_9kRZRhmNwt3BoZtA",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-[#1f2937] dark:text-white mb-2">
              Meet the Leadership
            </h2>
            <p className="text-[#6b7280] dark:text-gray-400">
              A mix of restaurant veterans and tech pioneers.
            </p>
          </div>
          <a
            className="text-[#ff6b00] font-bold hover:underline flex items-center gap-1"
            href="#"
          >
            View all positions <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} portrait`}
                  width={400}
                  height={533}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-lg font-bold leading-tight">{member.name}</h3>
                <p className="text-[#ff6b00] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
          {/* Join Team Card */}
          <div className="group relative overflow-hidden rounded-xl bg-[#ff6b00]/5 dark:bg-white/5 border-2 border-dashed border-[#ff6b00]/30 flex flex-col justify-center items-center text-center p-6 hover:bg-[#ff6b00]/10 transition-colors cursor-pointer">
            <div className="size-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-[#ff6b00] mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <Plus className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#1f2937] dark:text-white mb-1">
              Join Our Team
            </h3>
            <p className="text-sm text-[#6b7280] dark:text-gray-400 px-4">
              We are always looking for passionate people to join the kitchen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

