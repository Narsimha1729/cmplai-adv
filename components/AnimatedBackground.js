'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadLinksPreset } from '@tsparticles/preset-links';

export default function AnimatedBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    preset: 'links',
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: {
        value: '#00b4bc', // fallback
      },
    },
    style: {
      background: 'linear-gradient(135deg, #a0f0f4, #7ee8ec, #00b4bc)',
    },
    particles: {
      color: { value: '#ffffff' },
      links: {
        color: '#ffffff',
        distance: 140,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
      },
      size: {
        value: { min: 1, max: 3 },
      },
      opacity: {
        value: 0.5,
      },
    },
  };

  if (!init) {
    return null;
  }

  return <Particles id="tsparticles" options={particlesOptions} />;
}
