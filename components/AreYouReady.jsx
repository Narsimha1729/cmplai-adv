'use client';

import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground.js";

export default function AreYouReady() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    if (!email || !email.includes('@')) {
      setStatus('Please enter a valid email.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: "Demo Request",
          email,
          message: `This user is requesting a demo: ${email}`,
        }),
      });

      if (res.ok) {
        setStatus('Demo request sent successfully.');
        setEmail('');
      } else {
        setStatus('Failed to send. Try again.');
      }
    } catch {
      setStatus('Something went wrong.');
    }
  };

  return (
    <div id="areyouready" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black border-t border-white/5">
      <AnimatedBackground />

      <div className="relative z-10 px-4 max-w-3xl">
        <p className="label-caps mb-6">Get started</p>
        <h1 className="heading-xl mb-6">
          Understand compliance.<br />
          <span className="text-gradient-ai">Automate the universe</span> of GMP docs.
        </h1>
        <p className="text-body text-lg mb-10 max-w-xl mx-auto">
          Join pharma teams transforming compliance — save thousands of hours with AI agents built for regulated industries.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            className="px-5 py-3.5 w-full sm:flex-1 rounded-full bg-white/5 border border-white/15 text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
            required
          />
          <button type="submit" className="btn-primary w-full sm:w-auto shrink-0">
            Schedule a Demo
          </button>
        </form>

        {status && (
          <p className="mt-4 text-sm text-zinc-400">{status}</p>
        )}
      </div>
    </div>
  );
}
