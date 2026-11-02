import { motion } from 'motion/react';
import { FileCheck, Shield, Clock, MapPin, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import { IPOH_PICKUP_LOCATIONS, CONTACT_INFO } from '../data/vehicles';

export default function RentalTerms() {
  const documents = [
    {
      step: "01",
      title: "Salinan Kad Pengenalan (IC) / Pasport",
      desc: "Untuk warganegara Malaysia (IC) atau pelancong luar negara (Pasport antarabangsa yang sah)."
    },
    {
      step: "02",
      title: "Lesen Memandu yang Sah (CDL)",
      desc: "Lesen memandu Kelas D (untuk kereta) atau Kelas B2/B Full (untuk motosikal) yang masih aktif."
    },
    {
      step: "03",
      title: "Pengesahan Alamat / Majikan / Pelajar",
      desc: "Salinan bil utiliti elektrik/air terkini, kad matrik pelajar, atau kad pekerja / bukti penginapan hotel di Ipoh."
    },
    {
      step: "04",
      title: "Deposit Keselamatan (Security Deposit)",
      desc: "Deposit bermula RM50 - RM200 mengikut jenis kenderaan. Dipulangkan semula selepas semakan pemulangan kenderaan dalam keadaan baik."
    }
  ];

  return (
    <section id="terms" className="bg-[#0a0a0d] py-24 text-white relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
            Panduan &amp; Dokumen Sewaan
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Syarat Sewaan Mudah &amp; Pantas
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Tiada karenah birokrasi rumit. Hantarkan dokumen melalui WhatsApp kepada Cik Ain untuk pengesahan segera sebelum mengambil kenderaan.
          </p>
        </div>

        {/* 4 Steps Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {documents.map((doc, idx) => (
            <motion.div
              key={doc.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#131318] border border-[#202028] p-6 rounded-3xl relative overflow-hidden"
            >
              <div className="text-4xl font-black text-emerald-500/30 mb-4 font-mono">
                {doc.step}
              </div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                {doc.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {doc.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pickup & Delivery Hotspots in Ipoh */}
        <div className="bg-[#14141b] border border-[#252530] rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-zinc-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                <MapPin className="w-4 h-4" />
                <span>Khas Kawasan Ipoh Sahaja</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Lokasi Serahan &amp; Pengambilan Fleksibel
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
                Cik Ain boleh aturkan serahan kenderaan di mana sahaja anda tiba di Ipoh:
              </p>
            </div>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Salam%20Cik%20Ain%2C%20saya%20nak%20tanya%20caj%20penghantaran%20kereta%2Fmotor%20ke%20lokasi%20saya`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-colors shrink-0"
            >
              Tanya Lokasi Anda via WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {IPOH_PICKUP_LOCATIONS.map((loc) => (
              <div key={loc.id} className="p-4 bg-[#1a1a24] rounded-2xl border border-zinc-800 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{loc.name}</div>
                  <div className="text-xs text-zinc-400 mt-0.5">{loc.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              Perhatian: Sewaan ini adalah untuk kegunaan di dalam negeri Perak dan sekitar sahaja. Sila maklumkan kepada Cik Ain jika ada sebarang perancangan perjalanan jarak jauh.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
