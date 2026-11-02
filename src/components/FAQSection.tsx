import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/vehicles';

const faqs = [
  {
    q: "Bolehkah kenderaan dihantar terus ke Stesen Keretapi KTM Ipoh atau Airport?",
    a: "Boleh! Ramai pelanggan kami tiba dengan ETS di Stesen Keretapi Ipoh (KTM) atau bas di Terminal Amanjaya atau penerbangan di Lapangan Terbang Sultan Azlan Shah. Kami boleh aturkan serahan kenderaan tepat pada masa ketibaan anda di Ipoh."
  },
  {
    q: "Apakah syarat dan dokumen yang diperlukan untuk menyewa?",
    a: "Hanya 3 dokumen mudah: 1) Salinan Kad Pengenalan (IC) atau Pasport, 2) Lesen memandu yang sah (Kelas D untuk kereta, B2/B-Full untuk motor), dan 3) Bukti kediaman/bil utiliti, kad pelajar atau kad pekerja. Anda boleh terus WhatsApp gambar dokumen kepada Cik Ain."
  },
  {
    q: "Adakah topi keledar (helmet) disediakan untuk sewaan motosikal?",
    a: "Ya! Setiap sewaan motor (Aveta Nova 250, Yamaha NVX V3, atau Ego Avantiz) disertakan 2 biji topi keledar (helmet) yang bersih dan selesa secara percuma demi keselamatan anda."
  },
  {
    q: "Bagaimanakah pembayaran dan pemulangan deposit keselamatan?",
    a: "Bayaran sewa penuh dan deposit keselamatan dibuat sebelum atau semasa serahan kenderaan melalui DuitNow QR atau online transfer. Deposit keselamatan (RM50 - RM200 mengikut kenderaan) akan dipulangkan semula dengan segera selepas semakan kenderaan semasa pemulangan tiada saman atau kerosakan."
  },
  {
    q: "Adakah boleh menyewa untuk 1 hari sahaja?",
    a: "Boleh! Kami menerima sewaan harian (1 hari), mingguan, mahupun bulanan. Untuk sewaan 3 hari ke atas, kami ada menawarkan kadar diskaun istimewa."
  },
  {
    q: "Adakah servis sewaan ini terhad untuk kawasan Ipoh sahaja?",
    a: "Ya, pangkalan operasi serahan dan pemulangan kenderaan kami adalah berpusat di bandar Ipoh, Perak. Untuk perjalanan ke tempat pelancongan berdekatan seperti Cameron Highlands, Batu Gajah, Tambun, atau Kuala Kangsar, sila maklumkan kepada Cik Ain terlebih dahulu melalui WhatsApp."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#09090c] py-24 text-white relative">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Soalan Yang Kerap Ditanya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
            Soalan Lazim (FAQ)
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Jawapan pantas tentang sewaan kereta &amp; motor di Ipoh bersama Ain.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#131319] border border-zinc-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-800/40 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-zinc-100">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 bg-[#14141c] border border-zinc-800 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-white text-sm">Ada soalan lain yang belum terjawab?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">Tanya terus kepada Cik Ain di WhatsApp, kami bantu secepat mungkin.</p>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Salam%20Cik%20Ain%2C%20saya%20ada%20pertanyaan%20lanjut%20tentang%20sewa%20kenderaan`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-2 shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Tanya di WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
