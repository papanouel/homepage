import React from 'react';
import {
  Gamepad2,
  Cloud,
  Users,
  TrendingUp,
  Bot,
  Lightbulb,
  ChevronRight,
  Mail,
  Handshake,
  MapPin,
  Languages
} from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.125 0 2.062 2.062 0 01-2.062 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
import { motion } from 'motion/react';
import { MENTOR_DATA } from '@/constants';
// 3D view disabled for now — re-enable by uncommenting this import and the <HeroScene /> render below.
// import { HeroScene } from './components/HeroScene';

const iconMap: Record<string, React.ReactNode> = {
  Gamepad2: <Gamepad2 className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />,
};

const expertiseColors = [
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "text-blue-400 bg-blue-500/10 border-blue-500/20",
  "text-violet-400 bg-violet-500/10 border-violet-500/20",
  "text-rose-400 bg-rose-500/10 border-rose-500/20",
  "text-amber-400 bg-emerald-500/10 border-emerald-500/20",
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 bg-mesh pointer-events-none z-0" />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-16 z-10">
          <div className="container max-w-6xl mx-auto px-6">
            {/* Text & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 leading-[0.8]">
                Frederic<br />Nouel
              </h1>

              <p className="text-emerald-400 font-display text-sm md:text-base tracking-[0.2em] uppercase mb-8 font-semibold">
                {MENTOR_DATA.title}
              </p>

              <p className="max-w-xl text-lg md:text-xl text-zinc-400 leading-relaxed mb-12 font-light text-center md:text-left">
                {MENTOR_DATA.tagline}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="/?page=poc"
                  className="w-full sm:w-auto px-8 py-5 bg-white text-black font-bold rounded-full hover:bg-emerald-400 transition-all duration-500 flex items-center justify-center gap-2 group shadow-xl shadow-white/5"
                >
                  Book a POC Kickoff
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={MENTOR_DATA.booking.discovery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-5 glass rounded-full hover:bg-white/10 transition-all duration-500 font-medium text-center inline-flex items-center justify-center"
                >
                  Book a discovery call
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="vision" className="relative py-32 z-10">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left flex flex-col items-center md:items-start"
              >
                <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.3em] mb-6 block font-bold">The Experience</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">An experienced <br />Tech Lead & Founder</h2>
                <p className="text-zinc-400 text-xl leading-relaxed mb-10 font-light text-center md:text-left">
                  {MENTOR_DATA.bio}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
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
                  { label: "Years Experience", value: "25+", color: "text-blue-400" },
                  { label: "Game Shipped", value: "50+", color: "text-emerald-400" },
                  { label: "Years in Japan", value: "17+", color: "text-violet-400" },
                  { label: "ventures", value: "4", color: "text-rose-400" }
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
        <section id="expertise" className="relative py-32 z-10">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="text-center mb-24">
              <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.3em] mb-6 block font-bold">Expertise</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Consulting & Mentorship</h2>
              <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-light">Specialized in game development, system automation and startup ecosystem  </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              {MENTOR_DATA.expertise.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-10 rounded-[2.5rem] glass hover:bg-white/[0.06] transition-all duration-500 group relative overflow-hidden md:col-span-2 ${idx === 3 ? 'md:col-start-2' : ''}`}
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
        <section id="journey" className="relative py-32 z-10">
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
                      {item.link && (
                        <a
                          href={item.link.url}
                          className="inline-flex items-center gap-2 mt-6 text-emerald-400 hover:text-emerald-300 font-medium transition-colors group"
                        >
                          {item.link.text}
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Toolkit Section */}
        <section id="toolkit" className="relative py-32 z-10 overflow-hidden">
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
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

              {/* Mentor Philosophy */}
              <div className="text-center md:text-left flex flex-col h-full">
                <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.4em] mb-10 block font-bold">The Mentor Philosophy</span>
                <motion.blockquote
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="text-xl md:text-2xl lg:text-3xl font-light italic leading-[1.3] mb-12 tracking-tight flex-grow"
                >
                  "{MENTOR_DATA.philosophy}"
                </motion.blockquote>
                <div className="flex items-center justify-center md:justify-start gap-4 opacity-50">
                  <div className="w-12 h-px bg-zinc-600" />
                  <span className="text-zinc-400 uppercase tracking-[0.2em] text-xs font-bold">Mindset</span>
                </div>
              </div>

              {/* Consultant Philosophy */}
              <div className="text-center md:text-left flex flex-col h-full">
                <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.4em] mb-10 block font-bold">The Consultant Philosophy</span>
                <motion.blockquote
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl lg:text-3xl font-light italic leading-[1.3] mb-12 tracking-tight flex-grow"
                >
                  "{MENTOR_DATA.consultantPhilosophy}"
                </motion.blockquote>
                <div className="flex items-center justify-center md:justify-start gap-4 opacity-50">
                  <div className="w-12 h-px bg-zinc-600" />
                  <span className="text-zinc-400 uppercase tracking-[0.2em] text-xs font-bold">Objective</span>
                </div>
              </div>

            </div>

            {/* Signature at bottom */}
            <div className="mt-24 flex items-center justify-center gap-6">
              <div className="w-16 h-px bg-zinc-800" />
              <span className="text-zinc-500 uppercase tracking-[0.3em] text-sm font-bold">{MENTOR_DATA.name}</span>
              <div className="w-16 h-px bg-zinc-800" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-16 z-10 bg-[#050505] border-t border-white/5">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <nav className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-medium my-2">
                <a href="#vision" className="text-zinc-500 hover:text-emerald-400 transition-colors">Vision</a>
                <a href="#expertise" className="text-zinc-500 hover:text-emerald-400 transition-colors">Expertise</a>
                <a href="#journey" className="text-zinc-500 hover:text-emerald-400 transition-colors">Journey</a>
                <a href="#toolkit" className="text-zinc-500 hover:text-emerald-400 transition-colors">Toolkit</a>
                <a href="/?page=disclosure" className="text-zinc-500 hover:text-emerald-400 text-xs transition-colors">特定商取引法に基づく表記 (Commercial Disclosure)</a>
              </nav>
              <div className="text-zinc-500 text-sm font-medium">
                © 2026 {MENTOR_DATA.name}. Built with passion in Tokyo.
              </div>
            </div>
            <div className="flex items-center gap-8">
              {[
                { icon: <XIcon className="w-5 h-5" />, href: MENTOR_DATA.socials.twitter, label: "Twitter/X Profile" },
                { icon: <LinkedinIcon className="w-5 h-5" />, href: MENTOR_DATA.socials.linkedin, label: "LinkedIn Profile" },
                { icon: <InstagramIcon className="w-5 h-5" />, href: MENTOR_DATA.socials.instagram, label: "Instagram Profile" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
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
