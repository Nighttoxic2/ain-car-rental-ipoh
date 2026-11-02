import { motion } from 'motion/react';
import { Star, MessageCircle, CheckCircle2, ShieldCheck, Heart, ThumbsUp } from 'lucide-react';
import { CUSTOMER_TESTIMONIALS, CONTACT_INFO } from '../data/vehicles';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#0b0c10] py-24 text-white relative overflow-hidden border-t border-zinc-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Maklum Balas Terus Pelanggan WhatsApp</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Apa Kata Penyewa Kami di Ipoh?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
              Semua ulasan adalah daripada pelanggan sebenar yang menyewa kereta &amp; motor melalui perbualan WhatsApp bersama Cik Ain.
            </p>
          </div>

          {/* Social Proof Stat Box */}
          <div className="bg-[#13151c] border border-zinc-800 rounded-2xl p-5 flex items-center gap-6 shrink-0">
            <div>
              <div className="flex items-center gap-1 text-amber-400 text-lg mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                ))}
              </div>
              <div className="text-2xl font-black text-white">
                4.9 <span className="text-xs font-normal text-zinc-400">/ 5.0 Bintang</span>
              </div>
              <div className="text-[11px] text-zinc-400">320+ Penyewa Berpuas Hati</div>
            </div>
            <div className="h-12 w-px bg-zinc-800" />
            <div className="text-left">
              <div className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 100% Amanah
              </div>
              <div className="text-[11px] text-zinc-400 mt-1">Deposit dipulangkan pantas</div>
            </div>
          </div>
        </div>

        {/* WhatsApp-Style Chat Bubble Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CUSTOMER_TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#12141b] border border-zinc-800 hover:border-emerald-500/30 rounded-3xl p-6 sm:p-7 relative transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Header of review */}
                <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-zinc-800/60">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/40"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm sm:text-base">{item.name}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {item.badge}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5">{item.from}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* WhatsApp Chat Speech Bubble */}
                <div className="relative bg-[#1a1e27] border border-zinc-700/60 rounded-2xl p-4 sm:p-5 text-zinc-200 text-xs sm:text-sm leading-relaxed mb-4">
                  <div className="absolute -top-2 left-6 w-3 h-3 bg-[#1a1e27] border-t border-l border-zinc-700/60 rotate-45" />
                  <p className="italic text-zinc-200">
                    "{item.chatPreview}"
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 mt-3 pt-2 border-t border-zinc-800/80">
                    <span>Mesej WhatsApp Diterima</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="text-[10px]">✓✓ Dibaca</span> · {item.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer info: Vehicle rented */}
              <div className="flex items-center justify-between text-xs pt-2">
                <span className="text-zinc-400">
                  Kenderaan disewa: <strong className="text-zinc-200 font-semibold">{item.vehicleRented}</strong>
                </span>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Salam%20Cik%20Ain%2C%20saya%20tengok%20review%20${encodeURIComponent(item.vehicleRented)}%2C%20ada%20kekosongan%20tak%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium text-[11px] flex items-center gap-1"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>Sewa Model Ini &rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
