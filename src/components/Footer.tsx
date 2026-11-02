import { MessageCircle, Instagram, Mail, MapPin, Car, Bike, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { CONTACT_INFO, VEHICLES } from '../data/vehicles';

export default function Footer() {
  const cars = VEHICLES.filter((v) => v.category === 'car');
  const bikes = VEHICLES.filter((v) => v.category === 'motorcycle');

  return (
    <footer className="bg-[#060608] border-t border-zinc-800/80 pt-16 pb-12 text-white text-xs">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-zinc-800/60">
          
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Car className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                Ain Kereta &amp; Motor Sewa Ipoh
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed pr-4">
              Perkhidmatan sewaan kereta dan motor berpatutan, bersih dan mesra di Ipoh, Perak. Beroperasi sepenuhnya di atas talian dan media sosial untuk kemudahan anda.
            </p>
            <div className="pt-2 flex items-center gap-2 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Kawasan Operasi: IPOH SAHAJA, PERAK</span>
            </div>
          </div>

          {/* Kereta Sewa Fleet list */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kereta Sewa (9 Model)</span>
            </div>
            <ul className="space-y-1.5 text-zinc-400">
              {cars.map((car) => (
                <li key={car.id}>
                  <a href="#fleet" className="hover:text-emerald-400 transition-colors">
                    {car.name} <span className="text-zinc-400">· RM{car.rateDay}/hari</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Motor Sewa Fleet list */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Bike className="w-3.5 h-3.5 text-emerald-400" />
              <span>Motor Sewa (3 Model)</span>
            </div>
            <ul className="space-y-1.5 text-zinc-400">
              {bikes.map((bike) => (
                <li key={bike.id}>
                  <a href="#fleet" className="hover:text-emerald-400 transition-colors">
                    {bike.name} <span className="text-zinc-400">· RM{bike.rateDay}/hari</span>
                  </a>
                </li>
              ))}
              <li className="pt-2 text-[11px] text-emerald-400/90 font-medium">
                *Percuma 2 helmet &amp; jas hujan
              </li>
            </ul>
          </div>

          {/* Social and Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Hubungi Kami (Media Sosial)
            </div>
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Salam%20Cik%20Ain%2C%20saya%20nak%20tanya%20sewa%20kereta%2Fmotor%20di%20Ipoh`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <span>WhatsApp: {CONTACT_INFO.whatsappFormatted}</span>
              </a>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-pink-400 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Instagram: {CONTACT_INFO.instagramHandle}</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-zinc-400 pt-1">
                <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Ipoh, Perak, Malaysia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Kereta &amp; Motor Sewa Ipoh - Ain (Nurul Ain). Hak Cipta Terpelihara.
          </div>
          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-zinc-200 transition-colors">Syarat Sewa</a>
            <span>·</span>
            <a href="#faq" className="hover:text-zinc-200 transition-colors">Soalan Lazim</a>
            <span>·</span>
            <a href="#fleet" className="hover:text-zinc-200 transition-colors">Kadar Harian</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
