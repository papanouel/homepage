import React, { useEffect } from 'react';
import { ChevronLeft, ExternalLink, Gamepad2, ChevronRight, Zap, Target } from 'lucide-react';
import { motion } from 'motion/react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.48,80.1a105.73,105.73,0,0,0,32.22,16.26,77.7,77.7,0,0,0,7.34-11.97,64.3,64.3,0,0,1-11.53-5.46c.97-.7,1.92-1.43,2.83-2.19a74.14,74.14,0,0,0,64.13,0c.92.76,1.86,1.49,2.83,2.19a64.67,64.67,0,0,1-11.53,5.46,77.7,77.7,0,0,0,7.34,11.97,105.41,105.41,0,0,0,32.25-16.27c2.72-27.11-4.66-50.64-19.74-72.03ZM42.48,65.69c-6.3,0-11.48-5.78-11.48-12.89S36.08,39.9,42.48,39.9s11.59,5.78,11.48,12.89S48.88,65.69,42.48,65.69Zm42.27,0c-6.3,0-11.48-5.78-11.48-12.89S78.36,39.9,84.75,39.9s11.59,5.78,11.48,12.89S91.15,65.69,84.75,65.69Z" />
  </svg>
);

const PlayStoreIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 0c-.396.03-.782.16-1.11.38L15.14 12.86l3.52-3.52L3.609 0zm15.11 9.4 3.73 2.14c.4.23.64.65.64 1.12s-.24.89-.64 1.12l-3.73 2.14-3.52-3.52 3.52-3.52zM2.5 1.1c-.22.33-.35.72-.38 1.11L13.84 14.14 2.5 25.48c.03.39.16.78.38 1.11l13.1-6.55L14.4 12.86 2.5 1.1zm14.34 18.24L3.609 25.72c.328.22.714.35 1.11.38l12.12-12.12-2.48 2.48z" />
  </svg>
);

export default function TinyHoopers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 overflow-x-hidden font-sans">
      <div className="fixed inset-0 bg-mesh pointer-events-none z-0" />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        {/* Navigation */}
        <div className="mb-16">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors w-fit"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </a>
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 mb-8">
            <Gamepad2 className="w-3 h-3" />
            Use Case
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            TinyHoopers —<br />
            <span className="text-3xl md:text-5xl text-zinc-400 font-light mt-4 block">From Automated Content to Game Product</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 mb-16 relative aspect-[16/7] w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl glass"
          >
            <img
              src="/images/tinyhoopers_preview.png"
              alt="TinyHoopers Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://instagram.com/papanouel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-emerald-400 transition-all duration-500 group"
            >
              <InstagramIcon className="w-5 h-5" />
              Instagram
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.imerwise.hooperapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all duration-500 group"
            >
              <PlayStoreIcon className="w-5 h-5" />
              Google Play (Beta)
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://discord.gg/5QDqAeFDEu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all duration-500 group"
            >
              <DiscordIcon className="w-5 h-5" />
              Discord
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-16">
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-14 rounded-[2.5rem]"
          >
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Overview</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6 font-light">
              TinyHoopers started as an experiment to test whether a strong visual identity + automation could grow an audience around basketball content.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              It evolved into a full game project, backed by real user validation and multi-platform traction.
            </p>
          </motion.section>

          {/* Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="glass p-10 rounded-[2.5rem] flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-rose-400" />
              </div>
              <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
              <ul className="space-y-4">
                {[
                  "Validate a new product idea without building a full game upfront",
                  "Stand out in a crowded basketball / gaming space",
                  "Build traction with limited time and resources"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-10 rounded-[2.5rem] flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold mb-6">Current Status</h2>
              <p className="text-zinc-400 leading-relaxed font-light">
                TinyHoopers is currently in beta, with ongoing improvements to gameplay systems, UI/UX, and live features.
              </p>
            </div>
          </motion.section>

          {/* Approach */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.3em] mb-4 block font-bold">Strategy</span>
              <h2 className="text-4xl font-bold mb-10">The Approach</h2>
            </div>

            <div className="glass p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
              <h3 className="text-2xl font-bold mb-6">1. Start with a System, Not a Product</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
                Instead of building the game first, I built an automated content engine on Instagram:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Pixel-art basketball players with a consistent style",
                  "Posts based on real NBA games and player stats",
                  "Daily publishing through automated pipelines"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 font-light">
                    <ChevronRight className="w-4 h-4 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-emerald-400 text-sm font-medium">
                The focus was speed, consistency, and scalability.
              </div>
            </div>

            <div className="glass p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
              <h3 className="text-2xl font-bold mb-6">2. Automate and Iterate</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
                The system was designed to:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Generate content efficiently (AI-assisted workflows)",
                  "Test different formats and visuals",
                  "Adapt quickly based on engagement data"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 font-light">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-blue-400 text-sm font-medium">
                This turned content into a continuous feedback loop.
              </div>
            </div>

            <div className="glass p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-violet-500" />
              <h3 className="text-2xl font-bold mb-6">3. Validate Before Building</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
                The audience grew rapidly across platforms:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Instagram", val: "40K+" },
                  { label: "Discord", val: "12K+" },
                  { label: "Email", val: "27K+" },
                  { label: "Beta DLs", val: "80K+" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-violet-400 mb-1">{stat.val}</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">This confirmed:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Strong appeal of the visual identity",
                  "High engagement with the concept",
                  "Clear demand for a product experience"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 font-light">
                    <ChevronRight className="w-4 h-4 text-violet-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-violet-400 text-sm font-medium">
                At this point, the project shifted from content to product.
              </div>
            </div>
          </motion.section>

          {/* Deep Dives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="glass p-10 rounded-[2.5rem]">
              <h3 className="text-xl font-bold mb-6 text-emerald-400">From Audience to Product</h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                With validation in place, TinyHoopers evolved into a game focused on:
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  "Pickup-style basketball (fast, social, expressive)",
                  "System-driven gameplay (emergent interactions over rigid rules)",
                  "A strong visual identity carried over from the content"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300 font-light text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-sm italic text-zinc-500">
                "The audience didn’t just validate the idea — it helped shape it."
              </div>
            </div>

            <div className="glass p-10 rounded-[2.5rem]">
              <h3 className="text-xl font-bold mb-6 text-emerald-400">Tech & Execution</h3>
              <ul className="space-y-4">
                {[
                  "Rapid prototyping to test gameplay loops early",
                  "AI used to accelerate content and development workflows",
                  "Scalable backend approach (GCP, event-driven systems)",
                  "Tooling to support continuous iteration"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300 font-light text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Takeaways */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-14 rounded-[2.5rem] border-emerald-500/20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Key Takeaways</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Validate before you build",
                "Automation enables scale without overhead",
                "Content can drive product discovery",
                "AI is an execution multiplier, not a feature"
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center text-lg font-light text-emerald-100">
                  {item}
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
}
