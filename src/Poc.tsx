import React, { useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Target,
  Bot,
  Rocket,
  FileCode,
  BookOpen,
  Map,
  Video,
} from 'lucide-react';
import { motion } from 'motion/react';
import { MENTOR_DATA } from '@/constants';

const BookKickoffButton = ({ className = '' }: { className?: string }) => (
  <a
    href={MENTOR_DATA.booking.pocKickoff}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-emerald-400 transition-all duration-500 group ${className}`}
  >
    <Rocket className="w-5 h-5" />
    Book the POC Kickoff
    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </a>
);

export default function Poc() {
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
            <Rocket className="w-3 h-3" />
            POC Kickoff
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            POC Kickoff<br />
            <span className="text-3xl md:text-5xl text-zinc-400 font-light mt-4 block">
              A 30min strategy call, before you spend a cent on development
            </span>
          </h1>

          <p className="text-zinc-300 text-xl leading-relaxed font-light max-w-2xl">
            Let's map out a lean strategy before you waste budget on a dev agency or a heavy
            business plan.
          </p>

          <div className="mt-10">
            <BookKickoffButton />
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-16">
          {/* What we'll do */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.3em] mb-4 block font-bold">
                The Call
              </span>
              <h2 className="text-4xl font-bold">What we'll do</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Lightbulb className="w-6 h-6 text-emerald-400" />,
                  color: 'bg-emerald-500/10 border-emerald-500/20',
                  title: 'Concept Review',
                  desc: 'Pitch your idea and target audience.',
                },
                {
                  icon: <Target className="w-6 h-6 text-blue-400" />,
                  color: 'bg-blue-500/10 border-blue-500/20',
                  title: 'MVP Scoping',
                  desc: 'Find the core feature to test the market fast and cheap.',
                },
                {
                  icon: <Bot className="w-6 h-6 text-violet-400" />,
                  color: 'bg-violet-500/10 border-violet-500/20',
                  title: 'AI Strategy',
                  desc: 'See how AI can slash your development costs and time.',
                },
              ].map((item, i) => (
                <div key={i} className="glass p-8 rounded-[2rem] flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="glass p-8 rounded-[2rem] border-emerald-500/20 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-emerald-400">Outcome</h3>
                <p className="text-zinc-300 leading-relaxed font-light">
                  If we match, we'll launch a 2-Hour POC Sprint to build a live mobile prototype
                  and your technical roadmap.
                </p>
              </div>
            </div>
          </motion.section>

          {/* The Package */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-emerald-400 font-display text-xs uppercase tracking-[0.3em] mb-4 block font-bold">
                Next Step
              </span>
              <h2 className="text-4xl font-bold mb-4">The POC Package</h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                After the kickoff, if we agree, I sign your NDA and we move forward with the POC
                package —{' '}
                <span className="text-white font-medium">$350 to $490 USD</span>.
              </p>
            </div>

            {/* 1. Objective */}
            <div className="glass p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
              <h3 className="text-2xl font-bold mb-6">1. Objective</h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                To validate the method for creating an MVP (Minimum Viable Product) with a very
                limited budget, in order to test key features with your first users before
                committing to significant development costs.
              </p>
            </div>

            {/* 2. How our collaboration unfolds */}
            <div className="glass p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
              <h3 className="text-2xl font-bold mb-8">2. How the POC Collaboration unfolds</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <FileCode className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">
                      Step 1 — Preparation{' '}
                      <span className="text-zinc-500 font-normal text-base">(1 hour, on my end)</span>
                    </h4>
                    <p className="text-zinc-400 leading-relaxed font-light">
                      Based on your existing documents (specs, documentation, etc.), I
                      independently prepare a first visual and simplified version (App, Web App,
                      or website). This work serves as the basis for our working session.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-bold mb-4">
                      Step 2 — Online Co-creation Workshop{' '}
                      <span className="text-zinc-500 font-normal text-base">
                        (1 hour, via video conference)
                      </span>
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-zinc-400 font-light">
                        <span className="text-blue-400 font-bold text-sm mt-0.5 flex-shrink-0">
                          15 min
                        </span>
                        <span className="leading-relaxed">
                          Presentation of the basic mobile version.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-zinc-400 font-light">
                        <span className="text-blue-400 font-bold text-sm mt-0.5 flex-shrink-0">
                          45 min
                        </span>
                        <span className="leading-relaxed">
                          We iterate and modify the application together live, using the power of
                          Artificial Intelligence (LLM), to adjust it based on your immediate
                          feedback.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Deliverables */}
            <div className="glass p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-violet-500" />
              <h3 className="text-2xl font-bold mb-3">3. Deliverables</h3>
              <p className="text-zinc-500 text-sm mb-8 uppercase tracking-wider font-bold">
                Sent to you within 1–2 days following the POC
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <FileCode className="w-6 h-6 text-violet-400" />,
                    title: 'Source code + GitHub repository URL',
                    desc: 'The source code of the created version along with the associated GitHub repository URL. This code belongs to you and can be shared and reused with any development company afterward.',
                  },
                  {
                    icon: <BookOpen className="w-6 h-6 text-violet-400" />,
                    title: 'Documented AI process',
                    desc: 'The documented process for using the AI that we will have shared during the workshop.',
                  },
                  {
                    icon: <Map className="w-6 h-6 text-violet-400" />,
                    title: 'Complete MVP roadmap',
                    desc: 'A complete roadmap for finalizing a limited MVP — selection of priority features, potential timeline, budget, and deployment methods on the Apple and Google App Stores.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-14 rounded-[2.5rem] border-emerald-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to map your POC?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-10 max-w-xl mx-auto">
              Start with the kickoff call. We'll see if it's a match — no commitment.
            </p>
            <BookKickoffButton />
          </motion.section>
        </div>
      </main>
    </div>
  );
}
