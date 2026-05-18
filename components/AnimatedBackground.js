'use client';

/**
 * CSS-only animated background (replaces @tsparticles — avoids broken
 * postinstall scripts on Windows / Node 24).
 */
export default function AnimatedBackground() {
  return (
    <div className="animated-bg absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="animated-bg-gradient absolute inset-0" />
      <div className="animated-bg-glow animated-bg-glow-a" />
      <div className="animated-bg-glow animated-bg-glow-b" />
      <div className="animated-bg-dots absolute inset-0" />
      <div className="animated-bg-links absolute inset-0" />
    </div>
  );
}
