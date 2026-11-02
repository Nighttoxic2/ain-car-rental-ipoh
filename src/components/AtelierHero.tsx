import { useState, useEffect } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';

interface AtelierHeroProps {
  onOpenReel?: () => void;
  onOpenTalk?: () => void;
  onOpenCases?: (section?: string) => void;
}

export default function AtelierHero({
  onOpenReel,
  onOpenTalk,
  onOpenCases,
}: AtelierHeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const desktopNavItems = ['Projects', 'Expertise', 'Studio', 'Insights'];
  const mobileNavItems = ['Projects', 'Expertise', 'Studio', 'Insights', 'Reach Out'];

  const videoUrl =
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4';

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (item: string) => {
    setIsMenuOpen(false);
    if (item === 'Reach Out') {
      onOpenTalk?.();
    } else {
      onOpenCases?.(item);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white select-none">
      {/* Fullscreen Looping Autoplay Muted Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src={videoUrl}
        />
        {/* Subtle cinematic gradient overlay to ensure perfect text legibility */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
      </div>

      {/* Relative z-10 Content Layer */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Navbar */}
        <header className="w-full px-6 md:px-12 lg:px-16 py-5 md:py-6 flex items-center justify-between">
          {/* Left Side: Logo + Desktop Nav Links */}
          <div className="flex items-center gap-8 lg:gap-12">
            <a
              href="#"
              className="text-white font-semibold text-lg tracking-tight font-sans hover:opacity-90 transition-opacity"
            >
              Atelier
            </a>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {desktopNavItems.map((item) => (
                <button
                  key={item}
                  onClick={() => onOpenCases?.(item)}
                  className="text-white/80 hover:text-white text-sm font-light transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Side: Reach Out + Let's Talk button + Hamburger */}
          <div className="flex items-center gap-5 sm:gap-6">
            <button
              onClick={onOpenTalk}
              className="hidden md:block text-white/80 hover:text-white text-sm font-light transition-colors duration-200 cursor-pointer"
            >
              Reach Out
            </button>

            <button
              onClick={onOpenTalk}
              className="hidden md:inline-flex items-center justify-center bg-white text-black font-medium text-sm rounded-full px-5 py-2 hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Let's Talk
            </button>

            {/* Hamburger Button (Mobile only) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-end justify-center gap-[6px] focus:outline-none cursor-pointer z-50 p-2"
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMenuOpen}
            >
              {/* Top line */}
              <span
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
                  transitionDuration: '500ms',
                }}
                className={`h-[2px] bg-white rounded-full transition-all origin-center ${
                  isMenuOpen
                    ? 'w-6 rotate-45 translate-y-[8px]'
                    : 'w-6 rotate-0 translate-y-0'
                }`}
              />

              {/* Middle line (shorter: w-4) */}
              <span
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
                  transitionDuration: '500ms',
                }}
                className={`h-[2px] bg-white rounded-full transition-all ${
                  isMenuOpen ? 'w-4 opacity-0' : 'w-4 opacity-100'
                }`}
              />

              {/* Bottom line */}
              <span
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
                  transitionDuration: '500ms',
                }}
                className={`h-[2px] bg-white rounded-full transition-all origin-center ${
                  isMenuOpen
                    ? 'w-6 -rotate-45 -translate-y-[8px]'
                    : 'w-6 rotate-0 translate-y-0'
                }`}
              />
            </button>
          </div>
        </header>

        {/* Hero Content (Centered below navbar) */}
        <main className="flex-1 flex flex-col items-center justify-start pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-6 text-center">
          {/* Main Heading */}
          <h1 className="font-instrument-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-5xl tracking-normal">
            UX <span className="italic font-instrument-serif font-normal">and</span> APP
            <br />
            DESIGN <span className="italic font-instrument-serif font-normal">for</span> BOLD
            <br />
            VENTURES
          </h1>

          {/* Subtext */}
          <p className="mt-4 md:mt-5 text-white/70 text-sm md:text-base font-light max-w-md leading-relaxed font-sans">
            We shape digital products that define brands
            <br className="hidden sm:block" /> and unlock exponential growth.
          </p>

          {/* Buttons Row */}
          <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center gap-4">
            {/* Primary Button: See Cases */}
            <button
              onClick={() => onOpenCases?.('Projects')}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-black font-medium text-sm rounded-full px-7 py-3 transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-black/20"
            >
              <span>See Cases</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary Button: Watch Reel */}
            <button
              onClick={onOpenReel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent border border-white/40 text-white font-normal text-sm rounded-full px-7 py-3 transition-all duration-300 hover:bg-white/10 hover:border-white/60 active:scale-[0.98] cursor-pointer backdrop-blur-xs"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch Reel</span>
            </button>
          </div>
        </main>

        {/* Subtle Bottom Ambient Spacer / Indicator */}
        <div className="pb-6 px-6 flex items-center justify-between text-[11px] text-white/40 font-light tracking-widest uppercase">
          <span className="hidden sm:inline">Design &amp; Innovation Studio</span>
          <span className="mx-auto sm:mx-0">London · New York · Paris</span>
          <span className="hidden sm:inline">&copy; {new Date().getFullYear()} Atelier</span>
        </div>
      </div>

      {/* Mobile Menu Overlay (fixed inset-0 z-50, md:hidden) */}
      <div
        style={{
          transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
          transitionDuration: '700ms',
        }}
        className={`fixed inset-0 z-50 md:hidden bg-black/90 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 transition-all ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* Mobile Header: Logo + Close Button */}
        <div className="flex items-center justify-between py-2 border-b border-white/10">
          <span className="text-white font-semibold text-lg tracking-tight font-sans">
            Atelier
          </span>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav Links: Stacked Vertically, Centered, font-instrument-serif */}
        <div className="flex-1 flex flex-col justify-center my-6 space-y-1">
          {mobileNavItems.map((item, index) => (
            <div
              key={item}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
                transitionDuration: '500ms',
                transitionDelay: isMenuOpen
                  ? `${150 + index * 80}ms`
                  : '0ms',
              }}
              className={`border-b border-white/10 py-3.5 sm:py-4 transition-all transform ${
                isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <button
                onClick={() => handleNavClick(item)}
                className="w-full text-left text-4xl sm:text-5xl font-instrument-serif text-white hover:text-white/80 transition-all duration-300 hover:pl-4 cursor-pointer block"
              >
                {item}
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Footer: Full-width Let's Talk button with 550ms delay fade-in */}
        <div
          style={{
            transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
            transitionDuration: '500ms',
            transitionDelay: isMenuOpen ? '550ms' : '0ms',
          }}
          className={`pt-2 transition-all transform ${
            isMenuOpen
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <button
            onClick={() => {
              setIsMenuOpen(false);
              onOpenTalk?.();
            }}
            className="w-full bg-white text-black font-medium text-base rounded-full py-4 text-center hover:bg-white/90 active:scale-[0.99] transition-all cursor-pointer shadow-xl shadow-black/40"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
