import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/vehicles';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-3 max-w-[260px] bg-[#121815] border border-emerald-500/40 rounded-2xl p-3.5 shadow-2xl text-xs text-white relative shadow-black/80"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-zinc-400 hover:text-white p-0.5"
              aria-label="Tutup tips"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Cik Ain (Online)</span>
            </div>
            <p className="text-zinc-300 leading-snug">
              Hai! Nak semak availability kereta atau motor di Ipoh hari ini?
            </p>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Salam%20Cik%20Ain%2C%20saya%20nak%20tanya%20sewa%20kereta%2Fmotor%20di%20Ipoh`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-block text-[11px] font-bold text-emerald-400 hover:underline"
            >
              WhatsApp Sekarang &rarr;
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Salam%20Cik%20Ain%2C%20saya%20nak%20tanya%20sewa%20kereta%2Fmotor%20di%20Ipoh`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-all"
        aria-label="Hubungi Cik Ain di WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-black"></span>
        </span>
      </motion.a>
    </div>
  );
}
