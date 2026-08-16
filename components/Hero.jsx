import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-28 sm:pt-32 pb-16 lg:pb-20"
    >
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="hero-horizon absolute inset-x-0 top-[62%] pointer-events-none" />
      <div className="glow-orb w-[520px] h-[520px] -top-40 right-0 bg-blue-600/15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-10 items-center">
          <div className="text-center lg:text-left" data-aos="fade-up">
            <p className="label-caps mb-8">
              Enterprise intelligence / Pharmaceutical operations
            </p>

            <h1 className="hero-title">
              Entreprise AI RegTech Platform for Pharmaceutical Compliance
            </h1>

            <p className="mt-7 text-base sm:text-lg text-body max-w-2xl mx-auto lg:mx-0">
              One intelligent platform to generate, validate, and audit regulated
              documentation—keeping pharmaceutical operations inspection-ready around the clock.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
              <Link href="#platform" className="btn-primary w-full sm:w-auto">
                Explore platform
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#contact" className="btn-ghost w-full sm:w-auto">
                Request a demo
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 border-y border-white/10 text-left">
              {[
                ['24/7', 'AI audit readiness'],
                ['GMP', 'Native validation'],
                ['01', 'Unified platform'],
              ].map(([value, label]) => (
                <div key={label} className="py-4 px-3 first:pl-0 border-r border-white/10 last:border-r-0">
                  <p className="font-mono text-sm text-white">{value}</p>
                  <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.12em] text-zinc-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]" data-aos="fade-up" data-aos-delay="120">
            <div className="absolute -inset-6 border border-white/[0.04] rounded-[2rem] pointer-events-none" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#f7f7f5] shadow-2xl shadow-blue-500/10">
              <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/80 px-4 py-3 backdrop-blur">
                <span className="font-mono text-[10px] tracking-[0.18em] text-zinc-600">CMPLAI / REGTECH-01</span>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] text-blue-700">
                  <span className="ai-status-dot !w-1.5 !h-1.5 !bg-blue-600" />
                  ACTIVE
                </span>
              </div>
              <div className="relative aspect-[4/5] mt-7">
                <Image
                  src="/cmplai-regtech-robot.png"
                  alt="Cmplai AI pharmaceutical compliance assistant holding medicine and a compliance checklist"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 90vw, 520px"
                  priority
                />
              </div>
            </div>

            <div className="absolute -left-3 sm:-left-8 bottom-12 rounded-lg border border-white/15 bg-black/90 px-4 py-3 backdrop-blur-xl">
              <p className="font-mono text-[9px] tracking-[0.16em] text-zinc-500">COMPLIANCE CORE</p>
              <p className="mt-1 text-xs text-white">Validated in real time</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-3 font-mono text-[9px] tracking-[0.22em] text-zinc-600">
        <span className="h-px w-10 bg-zinc-800" />
        SCROLL TO EXPLORE
        <span className="h-px w-10 bg-zinc-800" />
      </div>
    </section>
  );
}
