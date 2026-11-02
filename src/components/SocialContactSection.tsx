import { motion } from 'motion/react';
import { MessageCircle, Instagram, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { CONTACT_INFO } from '../data/vehicles';

export default function SocialContactSection() {
  return (
    <section id="contact" className="bg-[#0b0b0e] py-24 text-white relative border-t border-zinc-800">
      {/* Background radial accent */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Saluran Komunikasi Rasmi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
              Hubungi Cik Ain Melalui Media Sosial
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
              Untuk urusan pertanyaan kekosongan kenderaan, sebut harga pantas, dan tempahan, kami beroperasi sepenuhnya melalui media sosial. WhatsApp adalah saluran utama paling pantas!
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#14141a] border border-zinc-800">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Zon Operasi: Ipoh Sahaja</div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Penghantaran kenderaan meliputi KTM Ipoh, Terminal Amanjaya, Airport &amp; hotel sekitar bandar Ipoh.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#14141a] border border-zinc-800">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Waktu Respons Pantas</div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Setiap hari 8:00 AM – 10:00 PM (WhatsApp pertanyaan 24/7 sedia diterima).
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Direct Social Action Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* 1. Primary: WhatsApp Card */}
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Salam%20Cik%20Ain%2C%20saya%20nak%20tanya%20sewa%20kereta%2Fmotor%20di%20Ipoh`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#11241a] to-[#121c17] border border-emerald-500/30 hover:border-emerald-400 transition-all shadow-xl shadow-emerald-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-zinc-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
                  <MessageCircle className="w-7 h-7 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Saluran Utama (Paling Pantas)
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    WhatsApp: {CONTACT_INFO.whatsappFormatted}
                  </div>
                  <p className="text-xs text-zinc-300 mt-1">
                    Klik untuk terus buka chat WhatsApp dengan Cik Ain
                  </p>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all shrink-0 self-end sm:self-center">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.a>

            {/* 2. Instagram Card */}
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 rounded-3xl bg-[#14141b] border border-zinc-800 hover:border-pink-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-lg shrink-0">
                  <Instagram className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20 mb-1 inline-block">
                    Media Sosial &amp; Testimoni
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">
                    Instagram: {CONTACT_INFO.instagramHandle}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Tengok gambar serahan kenderaan, video harian &amp; DM pertanyaan
                  </p>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-all shrink-0 self-end sm:self-center">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.a>

            {/* 3. Email Card */}
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href={`mailto:${CONTACT_INFO.email}?subject=Pertanyaan%20Sewa%20Kereta%2FMotor%20Ipoh`}
              className="group p-6 sm:p-8 rounded-3xl bg-[#14141b] border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 text-zinc-300 flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1 inline-block">
                    Emel Rasmi &amp; Sebut Harga Syarikat
                  </span>
                  <div className="text-lg sm:text-xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {CONTACT_INFO.email}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Untuk urusan sewaan korporat, invois atau dokumen rasmi
                  </p>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shrink-0 self-end sm:self-center">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.a>

          </div>

        </div>

      </div>
    </section>
  );
}
