'use client';

import Image from 'next/image';
import { useState } from 'react';
import { LayoutDashboard, FileEdit, Bot, Shield, Sparkles } from 'lucide-react';
import AIPipelineMotion from './AIPipelineMotion.jsx';

const views = [
  {
    id: 'dashboard',
    label: 'Compliance Dashboard',
    icon: LayoutDashboard,
    image: '/platform/dashboard.png',
    alt: 'Cmplai compliance dashboard with documents, tasks, and analytics',
    description:
      'Monitor active documents, pending tasks, and compliance rates — with real-time analytics built for pharma operations.',
    tags: ['GMP metrics', 'Document tracking', 'Team workflows'],
  },
  {
    id: 'editor',
    label: 'AI Document Editor',
    icon: FileEdit,
    image: '/platform/editor.png',
    alt: 'Cmplai AI-powered SOP editor with TipTap and compliance assistant',
    description:
      'Author and review SOPs with an AI co-pilot — generate tables of contents, summarize risks, and send for regulatory review in one workspace.',
    tags: ['SOP generation', 'AI assistant', 'Regulatory review'],
  },
];

const aiFeatures = [
  { icon: Bot, title: 'Pharma LLM', desc: 'Fine-tuned on GMP, ISO & FDA corpora' },
  { icon: Shield, title: 'Zero-error validation', desc: 'Every record checked before release' },
  { icon: Sparkles, title: 'Live audit agent', desc: '24/7 inspection readiness' },
];

export default function PlatformShowcase() {
  const [active, setActive] = useState('dashboard');
  const current = views.find((v) => v.id === active) ?? views[0];
  const Icon = current.icon;

  return (
    <section
      id="platform"
      className="relative section-dark py-28 px-4 overflow-hidden border-t border-white/5"
    >
      <div className="glow-orb w-[700px] h-[400px] top-0 left-1/2 -translate-x-1/2 bg-cyan-500/8" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="label-caps mb-4">The platform</p>
          <h2 className="heading-lg mb-4">See Cmplai in action</h2>
          <p className="text-body max-w-2xl mx-auto text-sm">
            AI-native compliance software for pharmaceutical plants — from dashboard
            insights to GMP document generation.
          </p>
        </div>

        {/* AI pipeline motion */}
        <div className="mb-14" data-aos="fade-up" data-aos-delay="50">
          <AIPipelineMotion />
        </div>

        {/* AI capability pills */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {aiFeatures.map(({ icon: FeatureIcon, title, desc }) => (
            <div
              key={title}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5"
            >
              <FeatureIcon className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-medium text-white">{title}</p>
                <p className="text-[10px] text-zinc-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View switcher */}
        <div
          className="flex justify-center gap-2 mb-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {views.map((view) => {
            const TabIcon = view.icon;
            const isActive = active === view.id;
            return (
              <button
                key={view.id}
                type="button"
                onClick={() => setActive(view.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white text-black'
                    : 'border border-white/15 text-zinc-400 hover:text-white hover:border-white/25'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {view.label}
              </button>
            );
          })}
        </div>

        {/* Platform frame */}
        <div
          className="relative max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="platform-browser-frame rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl shadow-cyan-500/5">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-zinc-900/80">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-zinc-600" />
                <span className="w-3 h-3 rounded-full bg-zinc-600" />
                <span className="w-3 h-3 rounded-full bg-zinc-600" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-black/50 border border-white/5 text-xs text-zinc-500 font-mono max-w-xs sm:max-w-md truncate">
                  <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  app.cmplai.com / {active === 'dashboard' ? 'dashboard' : 'documents/sop'}
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] text-cyan-400/80 font-medium">
                <span className="ai-status-dot w-1.5 h-1.5" />
                AI active
              </span>
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
              {views.map((view) => (
                <Image
                  key={view.id}
                  src={view.image}
                  alt={view.alt}
                  fill
                  className={`object-cover object-top transition-opacity duration-700 ${
                    active === view.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority={view.id === 'dashboard'}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating AI chip */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 platform-ai-chip card-dark px-4 py-3 flex items-center gap-3 max-w-[240px]">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">AI Assistant</p>
                  <p className="text-[10px] text-zinc-500 ai-typing-text">
                    Generating compliant content…
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scan line effect */}
          <div className="platform-scan-line pointer-events-none" aria-hidden />
        </div>

        {/* Caption */}
        <div
          className="mt-8 text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <p className="text-body text-sm mb-4">{current.description}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-white/10 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
