import React from 'react';
import { 
  Gamepad2, 
  Cloud, 
  Users, 
  TrendingUp, 
  Globe,
  ChevronRight,
  Mail,
  Handshake,
  Linkedin,
  Twitter,
  MapPin,
  Languages
} from 'lucide-react';
import { motion } from 'motion/react';
import { MENTOR_DATA } from '@/constants';
import { HeroScene } from './components/HeroScene';

declare global {
  interface Window {
    Calendly: any;
  }
}

const iconMap: Record<string, React.ReactNode> = {
  Gamepad2: <Gamepad2 className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />,
};

const expertiseColors = [
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "text-blue-400 bg-blue-500/10 border-blue-500/20",
  "text-violet-400 bg-violet-500/10 border-violet-500/20",
  "text-rose-400 bg-rose-500/10 border-rose-500/20",
  "text-amber-400 bg-amber-500/10 border-amber-500/20",
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 bg-mesh pointer-events-none z-0" />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-16 z-10">
        <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-left order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Mentoring & Consulting
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 leading-[0.8]">
              Frederic<br />Nouel
            </h1>
            
            <p className="text-emerald-400 font-display text-sm md:text-base tracking-[0.2em] uppercase mb-8 font-semibold">
              {MENTOR_DATA.title}
            </p>
            
            <p className="max-w-xl text-lg md:text-xl text-zinc-400 leading-relaxed mb-12 font-light">
              {MENTOR_DATA.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => {
                  if (window.Calendly) {
                    window.Calendly.initPopupWidget({ url: MENTOR_DATA.calendly });
                  }
                }}
                className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-emerald-400 transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl shadow-white/5"
              >
                Book a Session
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 glass rounded-full hover:bg-white/10 transition-all duration-500 font-medium">
                View Expertise
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3D Scene */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative aspect-[16/13] w-full max-w-2xl mx-auto order-1 md:order-2 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-sky-400 via-sky-300 to-indigo-400 border-[6px] border-white/10 shadow-[0_0_80px_rgba(56,189,248,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-20" />
            
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-white/20 blur-3xl rounded-full z-0 animate-pulse" />
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full z-0 animate-pulse delay-1000" />
            
            <div className="relative z-10 w-full h-full">
              <HeroScene />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 z-10">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.3em] mb-6 block font-bold">The Vision</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Executive Tech Lead &<br />Growth Architect</h2>
              <p className="text-zinc-400 text-xl leading-relaxed mb-10 font-light">
                {MENTOR_DATA.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-3 text-zinc-400 glass px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium">{MENTOR_DATA.location}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400 glass px-4 py-2 rounded-full">
                  <Languages className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium">{MENTOR_DATA.languages.join(' • ')}</span>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Years Experience", value: "20+", color: "text-blue-400" },
                { label: "Titles Shipped", value: "45+", color: "text-emerald-400" },
                { label: "Downloads", value: "80K+", color: "text-violet-400" },
                { label: "Community", value: "50K+", color: "text-rose-400" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square glass rounded-[2rem] p-8 flex flex-col justify-center text-center group hover:bg-white/[0.06] transition-all duration-500"
                >
                  <span className={`text-5xl font-bold mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-500`}>{stat.value}</span>
                  <span className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-bold">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative py-32 z-10">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.3em] mb-6 block font-bold">Expertise</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Consulting & Mentorship</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-light">Specialized guidance for scaling tech products and high-performing teams.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MENTOR_DATA.expertise.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] glass hover:bg-white/[0.06] transition-all duration-500 group relative overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${expertiseColors[idx % expertiseColors.length]}`}>
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-lg font-light">
                  {item.description}
                </p>
                
                {/* Subtle background glow for the card */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${expertiseColors[idx % expertiseColors.length].split(' ')[1]}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Snapshot */}
      <section className="relative py-32 z-10">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.3em] mb-6 block font-bold">Journey</span>
            <h2 className="text-4xl md:text-6xl font-bold">Career Snapshot</h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent md:-translate-x-1/2" />
            
            <div className="space-y-24">
              {MENTOR_DATA.career.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-4px] md:left-1/2 top-0 w-2 h-2 rounded-full bg-emerald-500 md:-translate-x-1/2 shadow-[0_0_10px_rgba(16,185,129,0.5)] z-20" />
                  
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.2em] mb-3 block font-bold">{item.company}</span>
                    <h3 className="text-2xl font-bold mb-4">{item.role}</h3>
                    <p className="text-zinc-400 leading-relaxed text-lg font-light">
                      {item.description}
                    </p>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="relative py-32 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950/50 backdrop-blur-3xl -z-10" />
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.3em] mb-6 block font-bold">Stack</span>
            <h2 className="text-4xl md:text-6xl font-bold">Technical Toolkit</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {MENTOR_DATA.toolkit.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl"
              >
                <h4 className="text-emerald-400 font-display text-xs uppercase tracking-[0.2em] mb-8 font-bold">{cat.category}</h4>
                <ul className="space-y-5">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-zinc-400 flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors" />
                      <span className="text-sm font-medium group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-48 z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.4em] mb-12 block font-bold">The Mentor Philosophy</span>
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-light italic leading-[1.1] mb-16 tracking-tight"
          >
            "{MENTOR_DATA.philosophy}"
          </motion.blockquote>
          <div className="flex items-center justify-center gap-6">
            <div className="w-16 h-px bg-zinc-800" />
            <span className="text-zinc-500 uppercase tracking-[0.3em] text-sm font-bold">{MENTOR_DATA.name}</span>
            <div className="w-16 h-px bg-zinc-800" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 z-10 bg-[#050505] border-t border-white/5">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-zinc-500 text-sm font-medium">
              © 2026 {MENTOR_DATA.name}. Built with passion in Tokyo.
            </div>
            <div className="flex items-center gap-8">
              {[
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Mail className="w-5 h-5" />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="text-zinc-500 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
