import { useState } from 'react';
import { motion } from 'motion/react';
import { Car, Bike, MessageCircle, Calculator, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { VEHICLES, Vehicle, CONTACT_INFO, buildWhatsAppLink } from '../data/vehicles';
import { cn } from '../lib/utils';

interface RatesComparisonTableProps {
  onOpenBookingModal: (vehicle: Vehicle) => void;
}

export default function RatesComparisonTable({ onOpenBookingModal }: RatesComparisonTableProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'car' | 'motorcycle'>('all');

  const filteredVehicles = VEHICLES.filter((v) => {
    if (activeTab === 'all') return true;
    return v.category === activeTab;
  });

  const handleRowWhatsApp = (v: Vehicle) => {
    const url = buildWhatsAppLink({
      vehicleName: v.name,
      category: v.category,
      pickupLocation: 'Bandar Ipoh (KTM / Amanjaya / Airport)'
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="rates" className="bg-[#090a0d] py-24 text-white relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Jadual Kadar Sewaan Telus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
            Harga Harian, 3 Hari &amp; Mingguan
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Tiada caj tersembunyi. Kadar sewaan termasuk insurans kenderaan &amp; servis berkala. Deposit keselamatan dipulangkan segera selepas semakan.
          </p>

          {/* Category Toggle Tabs */}
          <div className="inline-flex p-1.5 bg-[#14161e] border border-zinc-800 rounded-2xl mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={cn(
                "px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all",
                activeTab === 'all'
                  ? "bg-white text-black shadow-lg"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              Semua ({VEHICLES.length})
            </button>
            <button
              onClick={() => setActiveTab('car')}
              className={cn(
                "px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5",
                activeTab === 'car'
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 font-bold"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <Car className="w-4 h-4" />
              Kereta Sewa (9)
            </button>
            <button
              onClick={() => setActiveTab('motorcycle')}
              className={cn(
                "px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5",
                activeTab === 'motorcycle'
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 font-bold"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <Bike className="w-4 h-4" />
              Motor Sewa (3)
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-[#12141a] border border-zinc-800/80 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-[#161822] text-zinc-400 text-[11px] uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Model Kenderaan</th>
                  <th className="py-4 px-4 font-semibold">Transmisi / Kapasiti</th>
                  <th className="py-4 px-4 font-semibold">1 Hari</th>
                  <th className="py-4 px-4 font-semibold text-emerald-400">3+ Hari (Diskaun)</th>
                  <th className="py-4 px-4 font-semibold text-emerald-300">1 Minggu (Jimat)</th>
                  <th className="py-4 px-4 font-semibold">Deposit</th>
                  <th className="py-4 px-6 font-semibold text-right">Tindakan Pantas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {filteredVehicles.map((v) => (
                  <tr
                    key={v.id}
                    className="hover:bg-zinc-800/30 transition-colors group"
                  >
                    {/* Vehicle details */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={v.image}
                          alt={v.name}
                          className="w-12 h-10 object-cover rounded-lg border border-zinc-700/50 shrink-0"
                        />
                        <div>
                          <div className="font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                            <span>{v.name}</span>
                            {v.badge && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-emerald-300 border border-zinc-700 hidden sm:inline-block">
                                {v.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-zinc-400 mt-0.5">
                            {v.type} · {v.engine}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Capacity / Gear */}
                    <td className="py-4 px-4 text-zinc-300">
                      <div>{v.transmission}</div>
                      <div className="text-[11px] text-zinc-500">{v.seats} Penumpang</div>
                    </td>

                    {/* 1 Day Rate */}
                    <td className="py-4 px-4 font-bold text-white whitespace-nowrap">
                      RM{v.rateDay}
                      <span className="text-[10px] text-zinc-400 font-normal">/hari</span>
                    </td>

                    {/* 3 Days Rate */}
                    <td className="py-4 px-4 font-bold text-emerald-400 whitespace-nowrap">
                      RM{v.rate3Days}
                      <span className="text-[10px] text-zinc-400 font-normal">/hari</span>
                    </td>

                    {/* 1 Week Rate */}
                    <td className="py-4 px-4 font-bold text-emerald-300 whitespace-nowrap">
                      RM{v.rateWeek}
                      <span className="text-[10px] text-zinc-400 font-normal">/hari</span>
                    </td>

                    {/* Deposit */}
                    <td className="py-4 px-4 text-zinc-400 whitespace-nowrap">
                      RM{v.deposit}
                      <span className="text-[10px] text-zinc-500 block">Dipulangkan</span>
                    </td>

                    {/* Action buttons */}
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => handleRowWhatsApp(v)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                          title="WhatsApp kenderaan ini"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          <span>WhatsApp</span>
                        </button>
                        <button
                          onClick={() => onOpenBookingModal(v)}
                          className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors"
                        >
                          Kira
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Guarantee */}
          <div className="p-4 sm:p-5 bg-[#161822] border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Semua sewaan disertakan perlindungan insurans, bantuan kecemasan dan had perbatuan bebas di Perak.</span>
            </div>
            <div className="text-zinc-300 font-medium shrink-0">
              WhatsApp Segera: <strong className="text-emerald-400">{CONTACT_INFO.whatsappFormatted}</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
