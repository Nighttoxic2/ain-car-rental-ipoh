import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Coffee, Mountain, Sparkles, Camera } from 'lucide-react';

const ipohSpots = [
  {
    title: "Concubine Lane & Pekan Lama Ipoh",
    type: "Warisan & Makanan Sedap",
    duration: "5 Minit dari Stesen KTM",
    desc: "Lorong bersejarah penuh kedai cenderamata, tau fu fa tradisional, kopi putih Ipoh dan seni mural jalanan yang ikonik.",
    vehicleTip: "Sesuai sangat naik Axia atau Scooter (Ego/NVX) sebab parkir mudah!",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Sunway Lost World of Tambun",
    type: "Taman Tema & Kolam Air Panas",
    duration: "15 Minit dari Pusat Bandar",
    desc: "Taman tema air dan zoo interaktif yang dikelilingi formasi batu kapur berusia 400 juta tahun. Menyeronokkan untuk satu keluarga.",
    vehicleTip: "Paling selesa naik Alza 1.5 SE (7-Seat) atau Aruz bersama keluarga & beg pakaian.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Tasik Cermin & Gua Kek Lok Tong",
    type: "Alam Semula Jadi & Gua Batu Kapur",
    duration: "12 Minit dari Bandaraya Ipoh",
    desc: "Tasik tersembunyi yang tenang memantulkan dinding batu kapur yang megah. Terdapat bot pelancongan melintasi terowong gua gelap.",
    vehicleTip: "Semua kereta kami muat laluan ini dengan mudah.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Kellie's Castle & Batu Gajah",
    type: "Kubu Bersejarah Scottish",
    duration: "25 Minit dari Pusat Bandar",
    desc: "Istana misteri gaya Scottish/Moorish yang dibina oleh William Kellie-Smith pada tahun 1915 dengan pemandangan pokok getah yang tenang.",
    vehicleTip: "Laluan jalan raya terbuka yang cantik dipandu dengan Proton X50 atau Saga.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800"
  }
];

export default function IpohExploration() {
  return (
    <section id="ipoh-guide" className="bg-[#08080a] py-24 text-white relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              <Camera className="w-4 h-4" />
              <span>Panduan Melawat Ipoh Bersama Kereta &amp; Motor Sewa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Jom Teroka Keindahan Ipoh
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2">
              Ipoh terkenal dengan makanan lazat, gua batu kapur purba, dan suasana santai. Dapatkan kenderaan yang tepat untuk pusing sekitar Ipoh tanpa kekangan masa.
            </p>
          </div>
          <div className="text-xs text-zinc-400 font-medium shrink-0">
            *Semua destinasi dalam jarak pemanduan 5 - 25 minit sahaja
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ipohSpots.map((spot, i) => (
            <motion.div
              key={spot.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#121217] border border-[#202028] hover:border-emerald-500/30 rounded-3xl overflow-hidden group flex flex-col justify-between transition-all"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-zinc-900">
                  <img
                    src={spot.image}
                    alt={spot.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-black/30" />
                  <span className="absolute bottom-3 left-4 text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-500/20">
                    {spot.duration}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    {spot.type}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {spot.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {spot.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-zinc-800/60">
                <div className="p-2.5 rounded-xl bg-[#181822] border border-zinc-800 text-[11px] text-emerald-300 flex items-start gap-1.5 leading-snug">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{spot.vehicleTip}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
