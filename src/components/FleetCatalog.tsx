import { useState } from 'react';
import { motion } from 'motion/react';
import { Car, Bike, Users, Fuel, Gauge, Sparkles, MessageCircle, Calculator, Search, ShieldCheck, Check, Info, Eye } from 'lucide-react';
import { Vehicle, VEHICLES, CONTACT_INFO, buildWhatsAppLink } from '../data/vehicles';
import { cn } from '../lib/utils';

interface FleetCatalogProps {
  onOpenBookingModal: (vehicle: Vehicle) => void;
  onOpenDetailModal: (vehicle: Vehicle) => void;
}

export default function FleetCatalog({ onOpenBookingModal, onOpenDetailModal }: FleetCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'car' | 'motorcycle'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    const matchesCategory =
      activeCategory === 'all' ? true : vehicle.category === activeCategory;
    const matchesSearch =
      vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.badge?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.popularFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const carCount = VEHICLES.filter((v) => v.category === 'car').length;
  const motorCount = VEHICLES.filter((v) => v.category === 'motorcycle').length;

  const handleDirectWhatsApp = (vehicle: Vehicle) => {
    const url = buildWhatsAppLink({
      vehicleName: vehicle.name,
      category: vehicle.category,
      pickupLocation: 'Bandar Ipoh (KTM / Amanjaya / Airport / Hotel)'
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="fleet" className="bg-[#090a0d] py-24 md:py-32 relative text-white">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-emerald-500" />
              <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold">
                Koleksi Kenderaan Ain · 100% Ipoh Based
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Pilihan Kereta &amp; Motor Sewa
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
              Semua kenderaan dijaga rapi, diservis berkala, berhawa dingin sejuk dan sentiasa bersih wangi.
              Pilih model idaman anda dan berhubung terus melalui <strong className="text-emerald-400">WhatsApp Cik Ain</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-zinc-300 bg-[#12141c] border border-zinc-800 rounded-2xl px-5 py-3.5 shrink-0 shadow-lg">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-white block">Harga Telus &amp; Jujur</span>
              <span className="text-zinc-400">Deposit dipulangkan serta-merta selepas semakan</span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-800/80">
          {/* Category Tabs */}
          <div className="inline-flex p-1.5 bg-[#12141a] border border-zinc-800 rounded-2xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                "px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2",
                activeCategory === 'all'
                  ? "bg-white text-black shadow-md shadow-white/10"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <span>Semua</span>
              <span className={cn(
                "text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                activeCategory === 'all' ? "bg-black text-white" : "bg-zinc-800 text-zinc-400"
              )}>
                {VEHICLES.length}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('car')}
              className={cn(
                "px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2",
                activeCategory === 'car'
                  ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20 font-bold"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <Car className="w-4 h-4" />
              <span>Kereta Sewa</span>
              <span className={cn(
                "text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                activeCategory === 'car' ? "bg-black text-emerald-400" : "bg-zinc-800 text-zinc-400"
              )}>
                {carCount}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('motorcycle')}
              className={cn(
                "px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2",
                activeCategory === 'motorcycle'
                  ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20 font-bold"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <Bike className="w-4 h-4" />
              <span>Motor Sewa</span>
              <span className={cn(
                "text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                activeCategory === 'motorcycle' ? "bg-black text-emerald-400" : "bg-zinc-800 text-zinc-400"
              )}>
                {motorCount}
              </span>
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari cth: Myvi, X50, NVX, Axia..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#12141a] border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Padam
              </button>
            )}
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
              className="group bg-[#12141c] border border-zinc-800/80 hover:border-emerald-500/40 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20 flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="relative h-60 w-full overflow-hidden bg-zinc-900 cursor-pointer" onClick={() => onOpenDetailModal(vehicle)}>
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-black/40" />

                {/* Badge top-left */}
                {vehicle.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      {vehicle.badge}
                    </span>
                  </div>
                )}

                {/* Category tag top-right */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10 flex items-center gap-1.5">
                    {vehicle.category === 'car' ? (
                      <>
                        <Car className="w-3 h-3 text-emerald-400" />
                        <span>Kereta</span>
                      </>
                    ) : (
                      <>
                        <Bike className="w-3 h-3 text-emerald-400" />
                        <span>Motor</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Price pill bottom-right overlay */}
                <div className="absolute bottom-3 right-4 text-right">
                  <div className="text-2xl font-black text-white drop-shadow-md">
                    RM{vehicle.rateDay}
                    <span className="text-xs font-normal text-zinc-300">/hari</span>
                  </div>
                  <div className="text-[10px] text-emerald-300 font-medium">
                    3+ hari: RM{vehicle.rate3Days}/hari
                  </div>
                </div>

                {/* Availability status badge */}
                <div className="absolute bottom-3 left-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Sedia Untuk Disewa</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-3">
                    <h3 
                      onClick={() => onOpenDetailModal(vehicle)}
                      className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                      {vehicle.popularFor}
                    </p>
                  </div>

                  {/* Specs row */}
                  <div className="grid grid-cols-3 gap-2 py-3 my-2 border-y border-zinc-800/80 text-center">
                    <div className="bg-[#181b24] p-2 rounded-xl">
                      <div className="flex items-center justify-center gap-1 text-[11px] text-zinc-400 mb-0.5">
                        <Users className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Muatan</span>
                      </div>
                      <div className="text-xs font-semibold text-white">
                        {vehicle.seats} Orang
                      </div>
                    </div>

                    <div className="bg-[#181b24] p-2 rounded-xl">
                      <div className="flex items-center justify-center gap-1 text-[11px] text-zinc-400 mb-0.5">
                        <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Gear</span>
                      </div>
                      <div className="text-xs font-semibold text-white">
                        {vehicle.transmission}
                      </div>
                    </div>

                    <div className="bg-[#181b24] p-2 rounded-xl">
                      <div className="flex items-center justify-center gap-1 text-[11px] text-zinc-400 mb-0.5">
                        <Fuel className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Minyak</span>
                      </div>
                      <div className="text-xs font-semibold text-white truncate">
                        {vehicle.fuelEfficiency}
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5 my-3">
                    {vehicle.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                    <div className="text-[11px] text-zinc-400 pl-5">
                      Ruang: {vehicle.luggageOrStorage}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 mt-2 border-t border-zinc-800/80 flex items-center gap-2">
                  <button
                    onClick={() => handleDirectWhatsApp(vehicle)}
                    className="flex-1 py-3 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5"
                    title="Buka WhatsApp dengan kenderaan ini terpilih"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onOpenDetailModal(vehicle)}
                    className="p-3 rounded-xl bg-[#1c202a] hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    title="Lihat Butiran Penuh"
                    aria-label="Lihat Butiran Penuh"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBookingModal(vehicle)}
                    className="py-3 px-3.5 rounded-xl bg-[#1c202a] hover:bg-white hover:text-black text-zinc-200 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                    title="Kira Harga Sewa"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Kira</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-16 bg-[#12141c] rounded-3xl border border-zinc-800">
            <Car className="w-12 h-12 text-zinc-500 mx-auto mb-3" />
            <p className="text-lg font-bold text-white">Tiada kenderaan ditemui untuk carian "{searchQuery}"</p>
            <p className="text-xs text-zinc-400 mt-1">Sila cuba perkataan lain atau setkan semula carian.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white transition-colors"
            >
              Reset Carian
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
