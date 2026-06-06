'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown, HiMail } from 'react-icons/hi';
import { useEffect, useState, useRef, useCallback } from 'react';

const roles = [
  'Engineer',
  'Full-Stack Developer',
  'Software Developer',
  'AI Engineer',
  'Programmer',
];

function TypewriterRole() {
  const [displayed, setDisplayed] = useState('');
  const state = useRef({ roleIndex: 0, isDeleting: false, charIndex: 0 });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tick = useCallback(() => {
    const { roleIndex, isDeleting, charIndex } = state.current;
    const current = roles[roleIndex];

    if (!isDeleting) {
      const next = charIndex + 1;
      state.current.charIndex = next;
      setDisplayed(current.slice(0, next));
      if (next === current.length) {
        state.current.isDeleting = true;
        timerRef.current = setTimeout(tick, 1600);
      } else {
        timerRef.current = setTimeout(tick, 85);
      }
    } else {
      const next = charIndex - 1;
      state.current.charIndex = next;
      setDisplayed(current.slice(0, next));
      if (next === 0) {
        state.current.isDeleting = false;
        state.current.roleIndex = (roleIndex + 1) % roles.length;
        timerRef.current = setTimeout(tick, 300);
      } else {
        timerRef.current = setTimeout(tick, 40);
      }
    }
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(tick, 600);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [tick]);

  return (
    <span className="inline-flex items-center gap-0.5">
      <span
        style={{
          background: 'linear-gradient(135deg, #c084fc, #a855f7, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {displayed}
      </span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block h-[1em] w-[3px] rounded-sm"
        style={{ background: 'linear-gradient(180deg, #a855f7, #ec4899)' }}
      />
    </span>
  );
}

const HERO_STARS = Array.from({ length: 140 }, (_, i) => {
  const seed = i * 137.508;
  return {
    id: i,
    x: (seed * 31) % 100,
    y: (seed * 17) % 100,
    size: (i % 3) * 0.7 + 0.4,
    duration: (i % 5) * 1.2 + 3,
    delay: (i % 8) * 0.4,
    opacity: (i % 4) * 0.15 + 0.15,
    drift: (i % 2 === 0 ? 1 : -1) * ((i % 5) * 4 + 3),
  };
});

function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {HERO_STARS.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
          }}
          animate={{
            y: [0, s.drift, 0],
            opacity: [s.opacity, Math.min(s.opacity * 3, 0.9), s.opacity],
            scale: [1, 1.8, 1],
          }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {/* Shooting stars */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`shoot-${i}`}
          className="absolute h-px rounded-full"
          style={{
            top: `${20 + i * 22}%`,
            left: '-5%',
            width: 80,
            background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.6), rgba(236,72,153,0.4), transparent)',
          }}
          animate={{ x: ['0vw', '115vw'], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, delay: 2 + i * 3.5, repeat: Infinity, repeatDelay: 8 + i * 2, ease: 'easeIn' }}
        />
      ))}
    </div>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 14 }, (_, i) => {
    const seed = i * 53.7;
    return {
      id: i,
      x: (seed * 29) % 100,
      y: (seed * 43) % 100,
      size: (i % 3) * 0.8 + 1.2,
      duration: (i % 4) * 1.5 + 4,
      delay: (i % 6) * 0.7,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.id % 2 === 0 ? '#a855f7' : '#ec4899',
            boxShadow: `0 0 ${p.size * 4}px ${p.id % 2 === 0 ? '#a855f7' : '#ec4899'}`,
          }}
          animate={{ y: [0, -50, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function TechieAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mb-8 h-40 w-40"
    >
      {/* Glow ring behind avatar */}
      <div
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
          filter: 'blur(12px)',
        }}
      />
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full relative">
        <motion.circle cx="80" cy="80" r="75" stroke="url(#ring-gradient)" strokeWidth="1.5" fill="none"
          animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '80px 80px' }} strokeDasharray="10 6" />
        <circle cx="80" cy="80" r="68" fill="url(#bg-gradient)" />
        <ellipse cx="80" cy="128" rx="34" ry="20" fill="#1a0533" />
        <rect x="50" y="108" width="60" height="28" rx="6" fill="#1a0533" />
        <path d="M70 108 L80 120 L90 108" stroke="#a855f7" strokeWidth="2" fill="none" />
        <rect x="74" y="98" width="12" height="14" rx="4" fill="#f5c5a3" />
        <ellipse cx="80" cy="82" rx="26" ry="28" fill="#f5c5a3" />
        <path d="M54 76 Q56 52 80 50 Q104 52 106 76 Q100 60 80 58 Q60 60 54 76Z" fill="#2d1b00" />
        <path d="M54 76 Q52 68 56 62 Q58 58 60 60 Q56 66 56 76Z" fill="#2d1b00" />
        <path d="M106 76 Q108 68 104 62 Q102 58 100 60 Q104 66 104 76Z" fill="#2d1b00" />
        <ellipse cx="54" cy="83" rx="5" ry="7" fill="#f0b090" />
        <ellipse cx="106" cy="83" rx="5" ry="7" fill="#f0b090" />
        <ellipse cx="70" cy="80" rx="8" ry="8" fill="white" />
        <ellipse cx="90" cy="80" rx="8" ry="8" fill="white" />
        <motion.ellipse cx="71" cy="80" rx="4" ry="4" fill="#1a1a2e"
          animate={{ scaleY: [1, 0.1, 1] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }} />
        <motion.ellipse cx="91" cy="80" rx="4" ry="4" fill="#1a1a2e"
          animate={{ scaleY: [1, 0.1, 1] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }} />
        <ellipse cx="72" cy="79" rx="1.5" ry="1.5" fill="white" />
        <ellipse cx="92" cy="79" rx="1.5" ry="1.5" fill="white" />
        <rect x="60" y="73" width="18" height="14" rx="5" stroke="url(#glasses-gradient)" strokeWidth="2" fill="none" />
        <rect x="82" y="73" width="18" height="14" rx="5" stroke="url(#glasses-gradient)" strokeWidth="2" fill="none" />
        <line x1="78" y1="80" x2="82" y2="80" stroke="url(#glasses-gradient)" strokeWidth="1.5" />
        <line x1="60" y1="80" x2="54" y2="78" stroke="url(#glasses-gradient)" strokeWidth="1.5" />
        <line x1="100" y1="80" x2="106" y2="78" stroke="url(#glasses-gradient)" strokeWidth="1.5" />
        <path d="M73 92 Q80 98 87 92" stroke="#c0896a" strokeWidth="2" fill="none" strokeLinecap="round" />
        <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="46" y="128" width="68" height="40" rx="4" fill="#0d0d1a" />
          <rect x="49" y="131" width="62" height="32" rx="2" fill="#06060f" />
          <rect x="52" y="134" width="56" height="2" rx="1" fill="#a855f7" opacity="0.8" />
          <rect x="52" y="139" width="40" height="2" rx="1" fill="#ec4899" opacity="0.6" />
          <rect x="52" y="144" width="48" height="2" rx="1" fill="#7c3aed" opacity="0.5" />
          <rect x="52" y="149" width="30" height="2" rx="1" fill="#f472b6" opacity="0.4" />
          <motion.rect x="82" y="149" width="2" height="8" rx="1" fill="#a855f7"
            animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />
          <rect x="40" y="167" width="80" height="5" rx="2" fill="#1a0533" />
        </motion.g>
        <circle cx="118" cy="48" r="14" fill="url(#badge-gradient)" />
        <text x="118" y="53" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace">MK</text>
        <defs>
          <linearGradient id="bg-gradient" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1a0533" />
            <stop offset="100%" stopColor="#06060f" />
          </linearGradient>
          <linearGradient id="ring-gradient" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="glasses-gradient" x1="54" y1="73" x2="100" y2="87" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="badge-gradient" x1="104" y1="34" x2="132" y2="62" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Deep background */}
      <div className="absolute inset-0 -z-10" style={{ background: '#06060f' }}>
        {/* Large purple orb top-left */}
        <div
          className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 60%)', filter: 'blur(80px)' }}
        />
        {/* Pink orb bottom-right */}
        <div
          className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 60%)', filter: 'blur(80px)' }}
        />
        {/* Center subtle glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 60%)' }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <FloatingParticles />
      <StarField />

      <div className="section-container relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={itemVariants}>
            <TechieAvatar />
          </motion.div>

          {/* Greeting pill */}
          <motion.div variants={itemVariants} className="mb-4">
            <span
              className="inline-block rounded-full px-4 py-2 text-sm font-medium"
              style={{
                border: '1px solid rgba(168,85,247,0.4)',
                background: 'rgba(168,85,247,0.08)',
                color: '#c084fc',
              }}
            >
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I'm{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e2e8f0 0%, #c084fc 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mithilesh Kumar
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={itemVariants}
            className="mb-6 text-2xl font-semibold text-dark-300 sm:text-3xl"
          >
            I am a <TypewriterRole />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg text-dark-400 sm:text-xl"
          >
            B.Tech student at Amrita School of Engineering, building scalable full-stack applications
            and intelligent AI/ML solutions. Currently interning at SAP Labs, open to exciting opportunities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="#projects" className="btn-primary">
              View My Work
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://www.linkedin.com/in/mithileshkumarus/overlay/1756226481101/single-media-viewer/?profileId=ACoAAEca3KgBeYqinMz3VUxoU9uTYs759hrwneQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Resume
            </a>
            <Link href="#contact" className="btn-secondary">
              Get In Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {[
              { href: 'https://github.com/mithilesh-kumar-us/', icon: FaGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/mithileshkumarus/', icon: FaLinkedin, label: 'LinkedIn' },
              { href: 'mailto:mithilesh02905@gmail.com', icon: HiMail, label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl text-dark-400 transition-colors"
                style={{
                  border: '1px solid rgba(168,85,247,0.25)',
                  background: 'rgba(168,85,247,0.05)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(168,85,247,0.6)';
                  (e.currentTarget as HTMLElement).style.color = '#c084fc';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(168,85,247,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(168,85,247,0.25)';
                  (e.currentTarget as HTMLElement).style.color = '';
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link href="#about" aria-label="Scroll to about section">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 transition-colors"
              style={{ color: 'rgba(168,85,247,0.5)' }}
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <HiArrowDown size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
