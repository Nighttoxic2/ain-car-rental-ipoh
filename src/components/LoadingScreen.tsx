import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

const words = ["Kereta Sewa Ipoh", "Motor Sewa Ipoh", "Pantas via WhatsApp", "Mesra & Jimat"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const interval = duration / 100;
    
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200);
          return 100;
        }
        return prev + 2;
      });
    }, interval);

    const wordInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 350);

    return () => {
      clearInterval(timer);
      clearInterval(wordInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#070709] flex flex-col justify-between p-8 text-white"
    >
      <div className="flex justify-between items-start">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xs text-emerald-400 font-bold uppercase tracking-[0.25em]"
        >
          Ain Car &amp; Motor Rental
        </motion.div>
        <div className="text-xs text-zinc-500 font-mono">IPOH · PERAK</div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {words[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-end pr-4">
          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
            {String(count).padStart(3, "0")}
          </div>
        </div>
        
        <div className="relative w-full h-[3px] bg-stroke/50 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: count / 100 }}
            className="absolute inset-y-0 left-0 w-full accent-gradient origin-left shadow-[0_0_8px_rgba(137,170,204,0.35)]"
          />
        </div>
      </div>
    </motion.div>
  );
}
