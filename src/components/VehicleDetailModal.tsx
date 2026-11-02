import { motion, AnimatePresence } from 'motion/react';
import { X, Users, Gauge, Fuel, Check, MessageCircle, Calculator, ShieldCheck, Car, Bike, Sparkles, AlertCircle } from 'lucide-react';
import { Vehicle, CONTACT_INFO, buildWhatsAppLink } from '../data/vehicles';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingModal: (vehicle: Vehicle) => void;
}

export default function VehicleDetailModal({
  vehicle,
  isOpen,
  onClose,
  onOpenBookingModal
}: VehicleDetailModalProps) {
  if (!isOpen || !vehicle) return null;

  const handleWhatsApp = () => {
    const url = buildWhatsAppLink({
      vehicleName: vehicle.name,
      category: vehicle.category,
      pickupLocation: 'Bandar Ipoh (KTM / Amanjaya / Airport)'
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleProceedToCalculator = () => {
    onClose();
    onOpenBookingModal(vehicle);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#12141c] border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden z-10 text-white my-8 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="relative p-6 border-b border-zinc-800 bg-[#161822] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                {vehicle.category === 'car' ? <Car className="w-5 h-5" /> : <Bike className="w-5 h-5" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">{vehicle.name}</span>
                  {vehicle.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      {vehicle.badge}
                    </span>
                  )}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {vehicle.type} · {vehicle.year} · Warna: {vehicle.color}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 text-sm">
            
            {/* Main Image Banner */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-black/30" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs">
                  <span className="text-zinc-400">Pilihan Ideal: </span>
                  <span className="text-white font-medium">{vehicle.popularFor}</span>
                </div>
                
                <div className="text-right bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-emerald-400">
                    RM{vehicle.rateDay}
                    <span className="text-xs font-normal text-zinc-300">/hari</span>
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    3+ hari: RM{vehicle.rate3Days}/hari
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight specs grid */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Spesifikasi Utama
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {vehicle.highlightSpecs.map((spec, i) => (
                  <div key={i} className="p-3 bg-[#181b24] rounded-xl border border-zinc-800 text-center">
                    <div className="text-[11px] text-zinc-400 mb-0.5">{spec.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-white">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Checklist */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Ciri-Ciri &amp; Kemudahan Disertakan
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {vehicle.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#161822] border border-zinc-800/80">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra terms info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Deposit Keselamatan: RM{vehicle.deposit}</span>
                </div>
                <p className="text-xs text-zinc-400 leading-snug">
                  Deposit dipulangkan sepenuhnya sejurus semakan pemulangan kenderaan dalam keadaan baik.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Jaminan Kebersihan &amp; Servis</span>
                </div>
                <p className="text-xs text-zinc-400 leading-snug">
                  Dicuci rapi, diisi wangian segar, dan penyaman udara sejuk sebelum serahan kepada anda.
                </p>
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-zinc-800 bg-[#161822] flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleProceedToCalculator}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Calculator className="w-4 h-4" />
              <span>Buka Kalkulator &amp; Tarikh</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2.5 transition-transform active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Tempah {vehicle.name} di WhatsApp</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
