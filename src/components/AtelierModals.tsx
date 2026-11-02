import { useState, type FormEvent } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface WatchReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export function WatchReelModal({ isOpen, onClose, videoUrl }: WatchReelModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl">
      <div className="relative w-full max-w-5xl bg-zinc-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/60">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-instrument-serif text-xl sm:text-2xl text-white">
              Atelier · Showreel 2026
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Showreel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
            src={videoUrl}
          />
        </div>

        {/* Controls footer */}
        <div className="p-4 sm:p-5 bg-zinc-900/90 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
          <span>Direction &amp; Motion Design by Atelier</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isMuted ? 'Unmute' : 'Mute'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LetsTalkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LetsTalkModal({ isOpen, onClose }: LetsTalkModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UX & Product Design',
    budget: '$25k – $50k',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
      <div className="relative w-full max-w-xl bg-zinc-950 border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-instrument-serif text-3xl sm:text-4xl">
              Thank You for Reaching Out
            </h3>
            <p className="text-white/60 text-sm max-w-md mx-auto">
              Our partners will review your inquiry and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-white/50 block mb-1">
                New Business Inquiries
              </span>
              <h2 className="font-instrument-serif text-3xl sm:text-4xl text-white">
                Let's Build Something Bold
              </h2>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                Tell us about your product vision, timeline, and goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 mb-1.5 uppercase tracking-wider text-[10px]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-1.5 uppercase tracking-wider text-[10px]">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@venture.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 mb-1.5 uppercase tracking-wider text-[10px]">
                    Project Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="UX & Product Design">UX &amp; Product Design</option>
                    <option value="Mobile App Design (iOS/Android)">Mobile App Design</option>
                    <option value="Brand Identity & Design System">Brand Identity &amp; System</option>
                    <option value="Full-Stack Prototype & Launch">Full-Stack Prototype</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 mb-1.5 uppercase tracking-wider text-[10px]">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="$15k – $25k">$15,000 – $25,000</option>
                    <option value="$25k – $50k">$25,000 – $50,000</option>
                    <option value="$50k – $100k">$50,000 – $100,000</option>
                    <option value="$100k+">$100,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 mb-1.5 uppercase tracking-wider text-[10px]">
                  Project Overview
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share a brief overview of what you are aiming to build..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-white text-black font-semibold rounded-full hover:bg-white/90 active:scale-[0.99] transition-all cursor-pointer shadow-lg shadow-black/40 mt-2"
              >
                Send Inquiry to Partners
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

interface CasesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export function CasesModal({ isOpen, onClose, initialTab }: CasesModalProps) {
  if (!isOpen) return null;

  const cases = [
    {
      title: "Solace Autonomous OS",
      category: "Spatial UX · Autonomous Mobility",
      year: "2026",
      desc: "Revolutionary vehicle operating system interface built for Level 4 autonomous transit.",
      stats: "+140% Driver Confidence · Red Dot Best of the Best",
    },
    {
      title: "Verve Liquidity Protocol",
      category: "Fintech App · High-Frequency Trading",
      year: "2025",
      desc: "Ultra low-latency institutional crypto asset management mobile application with biometric vaults.",
      stats: "$4.2B Volume Processed · App Store App of the Year",
    },
    {
      title: "Kroma Spatial Studio",
      category: "AI Creative Suite · VisionOS",
      year: "2026",
      desc: "3D generative audio-visual studio platform empowering spatial creatives and game directors.",
      stats: "320k Active Creators · Webby Award Nominee",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-white/50 block mb-1">
            Atelier Portfolio
          </span>
          <h2 className="font-instrument-serif text-3xl sm:text-4xl text-white">
            Selected Works &amp; Ventures
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-1">
            A small curation of digital products engineered for global category leaders.
          </p>
        </div>

        <div className="space-y-4">
          {cases.map((project, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all group"
            >
              <div className="flex items-center justify-between text-xs text-white/50 mb-2">
                <span>{project.category}</span>
                <span className="font-mono">{project.year}</span>
              </div>
              <h3 className="font-instrument-serif text-2xl sm:text-3xl text-white group-hover:text-white/90 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm mt-2 leading-relaxed">
                {project.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-medium">
                <span>{project.stats}</span>
                <ArrowRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
