import { useState, useId, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Instagram, Car, Bike, MapPin, Calendar, ArrowRight, ShieldCheck, Star, Sparkles, CheckCircle2, Clock, Zap } from 'lucide-react';
import { VEHICLES, IPOH_PICKUP_LOCATIONS, CONTACT_INFO, buildWhatsAppLink, Vehicle } from '../data/vehicles';
import { cn } from '../lib/utils';

interface HeroProps {
  onOpenBookingModal: (vehicle?: Vehicle) => void;
  onOpenDetailModal: (vehicle: Vehicle) => void;
}

export default function Hero({ onOpenBookingModal, onOpenDetailModal }: HeroProps) {
  const [quickVehicleId, setQuickVehicleId] = useState(VEHICLES[0].id);
  const [quickLocation, setQuickLocation] = useState(IPOH_PICKUP_LOCATIONS[0].name);
  const [quickDuration, setQuickDuration] = useState('1');
  const [heroCategoryTab, setHeroCategoryTab] = useState<'car' | 'motorcycle'>('car');

  const heroVehicleSelectId = useId();
  const heroLocationSelectId = useId();
  const heroDurationSelectId = useId();

  const selectedVehicle = VEHICLES.find((v) => v.id === quickVehicleId) || VEHICLES[0];
  
  // Spotlight preview vehicle for Hero side showcase
  const featuredCar = VEHICLES.find((v) => v.id === 'myvi-15h') || VEHICLES[0];
  const featuredMotor = VEHICLES.find((v) => v.id === 'yamaha-nvx-v3-2026') || VEHICLES[9];
  const activeSpotlight = heroCategoryTab === 'car' ? featuredCar : featuredMotor;

  const handleQuickSubmit = (e: FormEvent) => {
    e.preventDefault();
    const days = parseInt(quickDuration) || 1;
    const url = buildWhatsAppLink({
      vehicleName: selectedVehicle.name,
      category: selectedVehicle.category,
      durationDays: days,
      pickupLocation: quickLocation
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[94vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center bg-[#07080b] text-white">
      {/* Dynamic Background visual glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
        
        {/* Top Notification / Guarantee Ribbon */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Beroperasi di Kawasan IPOH Sahaja · Perak</span>
          </motion.div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900/80 px-3 py-1 rounded-full border border-zinc-800">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Balasan WhatsApp Pantas (Purata &lt; 5 minit)</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1 text-xs text-amber-300">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-bold text-white">4.9/5.0</span>
            <span className="text-zinc-500">(320+ Ulasan Pelanggan)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Social Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6"
            >
              Kereta &amp; Motor Sewa Ipoh{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-200">
                Pantas, Jimat &amp; Mesra.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 max-w-xl mb-8 leading-relaxed font-normal"
            >
              Urusan sewaan mudah terus di WhatsApp bersama Cik Ain. Dari kereta jimat minyak (Myvi, Axia, Bezza), MPV famili (Alza, Aruz), SUV bergaya (Proton X50 2026) hingga motor santai (Aveta 250, NVX V3, Ego Avantiz).
            </motion.p>

            {/* Social-First Contact CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10"
            >
              {/* Primary WhatsApp Action */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Salam%20Cik%20Ain%2C%20saya%20nak%20tanya%20sewa%20kereta%2Fmotor%20di%20Ipoh`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Cik Ain: {CONTACT_INFO.whatsappFormatted}</span>
              </a>

              {/* Instagram Action */}
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-[#14161f] hover:bg-[#1a1d29] border border-zinc-700/80 text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram: {CONTACT_INFO.instagramHandle}</span>
              </a>
            </motion.div>

            {/* Delivery points bullet points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-400 pt-5 border-t border-zinc-800/80 w-full"
            >
              <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Stesen ETS / KTM Ipoh</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Terminal Bas Amanjaya</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lapangan Terbang Ipoh</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hotel / Homestay Sekitar Ipoh</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Quick Booking & Spotlight Preview Widget */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#12141c]/95 backdrop-blur-md border border-[#232734] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Header of widget with Spotlight Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                    Kalkulator &amp; Tempahan Pantas
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Pilih Kenderaan di Ipoh
                  </h3>
                </div>

                {/* Mini category pill toggle */}
                <div className="flex p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setHeroCategoryTab('car')}
                    className={cn(
                      "px-2.5 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1",
                      heroCategoryTab === 'car'
                        ? "bg-emerald-500 text-black shadow-sm font-bold"
                        : "text-zinc-400 hover:text-white"
                    )}
                  >
                    <Car className="w-3 h-3" />
                    <span>Kereta</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroCategoryTab('motorcycle')}
                    className={cn(
                      "px-2.5 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1",
                      heroCategoryTab === 'motorcycle'
                        ? "bg-emerald-500 text-black shadow-sm font-bold"
                        : "text-zinc-400 hover:text-white"
                    )}
                  >
                    <Bike className="w-3 h-3" />
                    <span>Motor</span>
                  </button>
                </div>
              </div>

              {/* Spotlight Mini Preview Card */}
              <div 
                onClick={() => onOpenDetailModal(activeSpotlight)}
                className="mt-4 p-3 bg-[#181b26] border border-zinc-800 hover:border-emerald-500/40 rounded-2xl flex items-center gap-3.5 transition-all cursor-pointer group"
              >
                <img
                  src={activeSpotlight.image}
                  alt={activeSpotlight.name}
                  className="w-16 h-14 object-cover rounded-xl border border-zinc-700/60 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-xs truncate group-hover:text-emerald-400 transition-colors">
                      {activeSpotlight.name}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-300 font-semibold border border-emerald-500/20">
                      Spotlight
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                    {activeSpotlight.type} · {activeSpotlight.seats} Tempat Duduk
                  </div>
                  <div className="text-xs font-black text-emerald-400 mt-1">
                    RM{activeSpotlight.rateDay}/hari
                  </div>
                </div>
                <div className="text-[11px] text-zinc-400 group-hover:text-white transition-colors underline shrink-0">
                  Butiran &rarr;
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleQuickSubmit} className="space-y-4 pt-4">
                <div>
                  <label htmlFor={heroVehicleSelectId} className="block text-xs font-semibold text-zinc-400 mb-1.5">
                    Pilihan Model Kenderaan
                  </label>
                  <select
                    id={heroVehicleSelectId}
                    value={quickVehicleId}
                    onChange={(e) => setQuickVehicleId(e.target.value)}
                    className="w-full bg-[#181b26] border border-zinc-700/80 rounded-xl px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <optgroup label="── 🚗 Kereta Sewa (9 Model) ──">
                      {VEHICLES.filter((v) => v.category === 'car').map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name} ({v.type}) – RM{v.rateDay}/hari
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="── 🛵 Motor Sewa (3 Model) ──">
                      {VEHICLES.filter((v) => v.category === 'motorcycle').map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name} ({v.type}) – RM{v.rateDay}/hari
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor={heroLocationSelectId} className="block text-xs font-semibold text-zinc-400 mb-1.5">
                    Lokasi Serahan di Ipoh
                  </label>
                  <select
                    id={heroLocationSelectId}
                    value={quickLocation}
                    onChange={(e) => setQuickLocation(e.target.value)}
                    className="w-full bg-[#181b26] border border-zinc-700/80 rounded-xl px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    {IPOH_PICKUP_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor={heroDurationSelectId} className="block text-xs font-semibold text-zinc-400 mb-1.5">
                      Tempoh Sewa
                    </label>
                    <select
                      id={heroDurationSelectId}
                      value={quickDuration}
                      onChange={(e) => setQuickDuration(e.target.value)}
                      className="w-full bg-[#181b26] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white font-medium focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="1">1 Hari</option>
                      <option value="2">2 Hari</option>
                      <option value="3">3 Hari (Diskaun)</option>
                      <option value="4">4 Hari</option>
                      <option value="5">5 Hari</option>
                      <option value="7">1 Minggu (Jimat)</option>
                    </select>
                  </div>

                  <div>
                    <span className="block text-xs font-semibold text-zinc-400 mb-1.5">
                      Anggaran Jumlah
                    </span>
                    <div className="bg-[#181b26] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm font-black text-emerald-400">
                      RM
                      {parseInt(quickDuration) >= 7
                        ? selectedVehicle.rateWeek * (parseInt(quickDuration) || 1)
                        : parseInt(quickDuration) >= 3
                        ? selectedVehicle.rate3Days * (parseInt(quickDuration) || 1)
                        : selectedVehicle.rateDay * (parseInt(quickDuration) || 1)}
                    </div>
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/30"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Kira &amp; Terus WhatsApp Cik Ain</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBookingModal(selectedVehicle)}
                  className="w-full py-2 text-xs text-zinc-400 hover:text-white transition-colors text-center"
                >
                  Buka Borang Lengkap dengan Butiran Tambahan &rarr;
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
