import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Instagram, Car, Bike, MapPin, Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/vehicles';
import { cn } from '../lib/utils';

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export default function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Katalog Kenderaan', href: '#fleet' },
    { name: 'Jadual Harga', href: '#rates' },
    { name: 'Syarat Sewa', href: '#terms' },
    { name: 'Ulasan Pelanggan', href: '#testimonials' },
    { name: 'Spot Menarik Ipoh', href: '#ipoh-guide' },
    { name: 'Soalan Lazim', href: '#faq' },
    { name: 'Hubungi', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 pt-3 sm:pt-4">
        <div className="max-w-[1400px] mx-auto">
          <div
            className={cn(
              "w-full rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 transition-all duration-300 flex items-center justify-between border",
              scrolled
                ? "bg-[#0c0d12]/92 backdrop-blur-md border-zinc-800 shadow-2xl shadow-black/80"
                : "bg-[#12141c]/80 backdrop-blur-sm border-zinc-800/80"
            )}
          >
            {/* Logo & Brand */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 p-[1.5px] shrink-0">
                <div className="w-full h-full rounded-full bg-[#0d0f15] flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Car className="w-4 h-4" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                    Ain Kereta &amp; Motor Sewa Ipoh
                  </span>
                  <span className="hidden md:inline-flex text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Ipoh Only
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>KTM ETS · Amanjaya · Airport Ipoh</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 bg-[#181a24]/80 p-1.5 rounded-full border border-zinc-800/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold px-3.5 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social & Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Instagram link */}
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-800/90 hover:bg-zinc-700 text-zinc-300 hover:text-pink-400 border border-zinc-700/60 transition-colors"
                title="Ikuti Instagram @keretasewaipoh.ain"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Instant WhatsApp CTA */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Salam%20Cik%20Ain%2C%20saya%20nak%20tanya%20sewa%20kereta%2Fmotor%20di%20Ipoh`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-extrabold transition-all shadow-md shadow-emerald-500/20 flex items-center gap-2 group"
              >
                <span className="w-2 h-2 rounded-full bg-black group-hover:scale-125 transition-transform" />
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {CONTACT_INFO.whatsappFormatted}</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-emerald-500 text-zinc-950"
                title="WhatsApp Cik Ain"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white"
                aria-label="Buka Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#07080b]/95 backdrop-blur-xl pt-24 px-6 pb-12 flex flex-col justify-between sm:hidden">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2">
              Navigasi Halaman
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-zinc-200 hover:text-emerald-400 py-2.5 border-b border-zinc-800/80"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-zinc-800">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 text-black font-extrabold text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Cik Ain ({CONTACT_INFO.whatsappFormatted})</span>
            </a>

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-medium text-xs flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram: {CONTACT_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
