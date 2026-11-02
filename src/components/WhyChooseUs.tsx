import { motion } from 'motion/react';
import { MapPin, Sparkles, ShieldCheck, MessageCircle, Clock, HeartHandshake, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/vehicles';

export default function WhyChooseUs() {
  const points = [
    {
      icon: MapPin,
      title: "Khusus Kawasan Ipoh Sahaja",
      description: "Kami fokus di bandar Ipoh & sekitarnya. Penghantaran tepat pada masa di Stesen Keretapi KTM Ipoh, Terminal Bas Amanjaya, Airport & hotel anda.",
      tag: "Fokus & Tepat Waktu"
    },
    {
      icon: Sparkles,
      title: "Kenderaan Bersih & Wangi",
      description: "Semua kereta dan motor dicuci rapi, disanitasi serta berhawa dingin sejuk sebelum diserahkan kepada anda untuk keselesaan sepanjang perjalanan.",
      tag: "Kualiti Terjamin"
    },
    {
      icon: MessageCircle,
      title: "Urusan Mudah via WhatsApp",
      description: "Hanya berhubung terus dengan Cik Ain melalui WhatsApp (+60 19-531 2251). Tanpa proses borang yang panjang dan membosankan.",
      tag: "Respon Pantas"
    },
    {
      icon: ShieldCheck,
      title: "Harga Telus & Tiada Caj Tersembunyi",
      description: "Kadar harian berpatutan dengan diskaun istimewa untuk sewaan 3 hari atau mingguan. Deposit keselamatan dipulangkan segera selepas kenderaan disemak.",
      tag: "Jujur & Amanah"
    }
  ];

  return (
    <section className="bg-[#0c0c10] py-20 border-y border-zinc-800/80 text-white relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
            <span>Kelebihan Ain Car &amp; Motor Rental</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Kenapa Pilih Sewaan Kami di Ipoh?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Pengalaman sewa kenderaan tanpa pening kepala untuk percutian, kenduri, urusan kerja atau jalan-jalan cari makan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#14141a] border border-[#22222a] hover:border-emerald-500/30 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-400/80 mb-2 block">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-300 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Pilihan Utama Pelancong Ipoh</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
