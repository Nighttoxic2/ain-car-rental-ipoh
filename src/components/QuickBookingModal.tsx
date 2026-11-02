import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Clock, MessageCircle, Check, Car, User, FileText, Sparkles, ShieldCheck } from 'lucide-react';
import { Vehicle, VEHICLES, IPOH_PICKUP_LOCATIONS, CONTACT_INFO, buildWhatsAppLink } from '../data/vehicles';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: Vehicle | null;
}

export default function QuickBookingModal({ isOpen, onClose, initialVehicle }: QuickBookingModalProps) {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>(
    initialVehicle?.id || VEHICLES[0].id
  );
  const [startDate, setStartDate] = useState<string>(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState<string>('10:00 AM');
  const [durationDays, setDurationDays] = useState<number>(1);
  const [pickupLocation, setPickupLocation] = useState<string>(IPOH_PICKUP_LOCATIONS[0].name);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [needChildSeat, setNeedChildSeat] = useState<boolean>(false);
  const [needExtraHelmet, setNeedExtraHelmet] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  const vehicleSelectId = useId();
  const startDateId = useId();
  const pickupTimeId = useId();
  const durationDaysId = useId();
  const pickupLocationId = useId();
  const customerNameId = useId();
  const customerPhoneId = useId();
  const notesId = useId();

  const vehicle = VEHICLES.find((v) => v.id === selectedVehicleId) || initialVehicle || VEHICLES[0];

  if (!isOpen) return null;

  let effectiveRate = vehicle.rateDay;
  if (durationDays >= 7) {
    effectiveRate = vehicle.rateWeek;
  } else if (durationDays >= 3) {
    effectiveRate = vehicle.rate3Days;
  }

  const rentalTotal = effectiveRate * durationDays;
  const deposit = vehicle.deposit;
  const childSeatFee = needChildSeat ? 20 : 0;
  const estimatedTotal = rentalTotal + deposit + childSeatFee;

  const handleSendToWhatsApp = () => {
    let combinedNotes = notes;
    if (vehicle.category === 'car' && needChildSeat) {
      combinedNotes = combinedNotes ? `${combinedNotes}, +Baby Car Seat` : '+Baby Car Seat';
    }
    if (vehicle.category === 'motorcycle' && needExtraHelmet) {
      combinedNotes = combinedNotes ? `${combinedNotes}, +2 Helmet (Percuma)` : '+2 Helmet (Percuma)';
    }
    if (customerPhone) {
      combinedNotes = combinedNotes ? `${combinedNotes} (No Tel: ${customerPhone})` : `No Tel: ${customerPhone}`;
    }

    const url = buildWhatsAppLink({
      vehicleName: vehicle.name,
      category: vehicle.category,
      startDate,
      startTime: pickupTime,
      durationDays,
      pickupLocation,
      notes: combinedNotes,
      customerName: customerName || undefined
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    const text = `Salam Cik Ain, saya nak tanya tentang sewaan kenderaan di Ipoh:
Kenderaan: ${vehicle.name}
Tarikh: ${startDate} (${pickupTime})
Tempoh: ${durationDays} hari
Lokasi: ${pickupLocation}
Nama: ${customerName || '-'}
Anggaran Sewa: RM${rentalTotal} + Deposit RM${deposit}
Mohon semak availability. Terima kasih!`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#121214] border border-[#26262a] rounded-3xl shadow-2xl overflow-hidden z-10 text-white my-8 max-h-[90vh] flex flex-col"
        >
          <div className="relative p-6 border-b border-[#26262a] bg-[#18181b] flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Kiraan Sewa &amp; Tempah via WhatsApp</span>
                <span>·</span>
                <span className="text-zinc-400">Ipoh Area Only</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
                Borang Pertanyaan &amp; Tempahan Pantas
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6 overflow-y-auto flex-1 text-sm">
            <div>
              <label htmlFor={vehicleSelectId} className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Pilih Kenderaan (12 Pilihan Tersedia)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="sm:col-span-2">
                  <select
                    id={vehicleSelectId}
                    value={selectedVehicleId}
                    onChange={(e) => setSelectedVehicleId(e.target.value)}
                    className="w-full bg-[#1c1c20] border border-[#2e2e34] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 font-medium"
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
                <div className="p-3 bg-[#1c1c20] border border-[#2e2e34] rounded-xl flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Kadar Harian:</span>
                  <span className="text-base font-bold text-emerald-400">RM{effectiveRate}/hari</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3.5 bg-zinc-900/80 border border-zinc-800 rounded-2xl">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-20 h-16 object-cover rounded-xl border border-zinc-700/50"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white truncate">{vehicle.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {vehicle.seats} Tempat Duduk
                  </span>
                </div>
                <p className="text-xs text-zinc-400 truncate mt-0.5">
                  {vehicle.engine} · {vehicle.transmission} · {vehicle.luggageOrStorage}
                </p>
                <p className="text-[11px] text-emerald-400 mt-1 font-medium">
                  {vehicle.category === 'motorcycle'
                    ? '✓ Percuma 2 helmet & jas hujan'
                    : '✓ Kereta bersih & wangi, aircond sejuk beku'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor={startDateId} className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" /> Tarikh Mula
                </label>
                <input
                  id={startDateId}
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-[#1c1c20] border border-[#2e2e34] rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor={pickupTimeId} className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" /> Masa Ambil
                </label>
                <select
                  id={pickupTimeId}
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-[#1c1c20] border border-[#2e2e34] rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="08:00 AM">08:00 AM (Pagi)</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM (Tengah Hari)</option>
                  <option value="02:00 PM">02:00 PM (Petang)</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="08:00 PM">08:00 PM (Malam)</option>
                  <option value="10:00 PM">10:00 PM</option>
                </select>
              </div>

              <div>
                <label htmlFor={durationDaysId} className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-zinc-400" /> Tempoh (Hari)
                </label>
                <div className="flex items-center bg-[#1c1c20] border border-[#2e2e34] rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => setDurationDays((prev) => Math.max(1, prev - 1))}
                    className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-bold flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <input
                    id={durationDaysId}
                    type="number"
                    min="1"
                    max="60"
                    value={durationDays}
                    onChange={(e) => setDurationDays(Math.max(1, parseInt(e.target.value) || 1))}
                    aria-label="Tempoh Sewaan dalam Hari"
                    className="w-full bg-transparent text-center font-bold text-white focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setDurationDays((prev) => prev + 1)}
                    className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-bold flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor={pickupLocationId} className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Lokasi Ambil / Hantar (Kawasan Ipoh Sahaja)
              </label>
              <select
                id={pickupLocationId}
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full bg-[#1c1c20] border border-[#2e2e34] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 font-medium"
              >
                {IPOH_PICKUP_LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-zinc-400 mt-1">
                *Cik Ain boleh hantar terus ke stesen ETS / bas / airport atau lobi hotel anda di sekitar Ipoh.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={customerNameId} className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                  <User className="w-3.5 h-3.5 text-zinc-400" /> Nama Anda (Pilihan)
                </label>
                <input
                  id={customerNameId}
                  type="text"
                  placeholder="cth: Ahmad / Siti"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#1c1c20] border border-[#2e2e34] rounded-xl px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor={customerPhoneId} className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-zinc-400" /> No. Telefon / WhatsApp
                </label>
                <input
                  id={customerPhoneId}
                  type="tel"
                  placeholder="cth: 012-3456789"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#1c1c20] border border-[#2e2e34] rounded-xl px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-zinc-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1">
                Permintaan Tambahan:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {vehicle.category === 'car' ? (
                  <label className="flex items-center gap-3 p-3 bg-[#1c1c20] border border-[#2e2e34] rounded-xl cursor-pointer hover:border-zinc-600 transition-colors">
                    <input
                      type="checkbox"
                      checked={needChildSeat}
                      onChange={(e) => setNeedChildSeat(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-500 bg-zinc-900 border-zinc-700"
                    />
                    <div className="text-xs">
                      <div className="font-medium text-white">Kerusi Bayi (Baby Car Seat)</div>
                      <div className="text-zinc-400">+RM20 sekali sewa</div>
                    </div>
                  </label>
                ) : (
                  <label className="flex items-center gap-3 p-3 bg-[#1c1c20] border border-[#2e2e34] rounded-xl cursor-pointer hover:border-zinc-600 transition-colors">
                    <input
                      type="checkbox"
                      checked={needExtraHelmet}
                      onChange={(e) => setNeedExtraHelmet(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-500 bg-zinc-900 border-zinc-700"
                    />
                    <div className="text-xs">
                      <div className="font-medium text-white">2 Topi Keledar (Helmet)</div>
                      <div className="text-emerald-400">Percuma (Disertakan)</div>
                    </div>
                  </label>
                )}

                <div className="p-3 bg-[#1c1c20] border border-[#2e2e34] rounded-xl flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-xs text-zinc-400 leading-tight">
                    Insurans kenderaan &amp; servis berkala sentiasa lengkap.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor={notesId} className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                <FileText className="w-3.5 h-3.5 text-zinc-400" /> Nota / Pertanyaan Khas (Pilihan)
              </label>
              <textarea
                id={notesId}
                rows={2}
                placeholder="cth: Jam ketibaan train ETS 10:15 pagi di KTM Ipoh..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#1c1c20] border border-[#2e2e34] rounded-xl px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 text-xs"
              />
            </div>

            <div className="p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-2xl space-y-2">
              <div className="flex justify-between text-xs text-zinc-300">
                <span>
                  Sewa Kenderaan ({durationDays} hari × RM{effectiveRate}):
                </span>
                <span className="font-medium text-white">RM{rentalTotal}</span>
              </div>
              {childSeatFee > 0 && (
                <div className="flex justify-between text-xs text-zinc-300">
                  <span>Baby Car Seat:</span>
                  <span className="font-medium text-white">+RM{childSeatFee}</span>
                </div>
              )}
              <div className="flex justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-1">
                  Deposit Keselamatan (Dipulangkan):
                </span>
                <span className="font-medium text-emerald-400">RM{deposit}</span>
              </div>
              <div className="pt-2 border-t border-emerald-500/20 flex justify-between items-baseline">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-zinc-200">
                    Anggaran Jumlah:
                  </span>
                  <p className="text-[10px] text-zinc-400">*Deposit dikembalikan selepas semakan pemulangan</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-emerald-400">
                    RM{estimatedTotal}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-[#26262a] bg-[#18181b] flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleCopyMessage}
              type="button"
              className="w-full sm:w-auto px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  <span>Salin Teks Sahaja</span>
                </>
              )}
            </button>

            <button
              onClick={handleSendToWhatsApp}
              type="button"
              className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2.5 transition-transform active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Hantar ke WhatsApp Cik Ain ({CONTACT_INFO.whatsappFormatted})</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
