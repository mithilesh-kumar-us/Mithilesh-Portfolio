'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STAR_COUNT = 120;

const STARS = Array.from({ length: STAR_COUNT }, (_, i) => {
  const seed = i * 137.508;
  return {
    id: i,
    x: ((seed * 31) % 100),
    y: ((seed * 17) % 100),
    size: (i % 3) * 0.8 + 0.6,
    speed: (i % 5) * 0.6 + 1.5,
    delay: (i % 10) * 0.3,
    opacity: (i % 4) * 0.2 + 0.2,
    drift: (i % 2 === 0 ? 1 : -1) * ((i % 6) * 3 + 2),
  };
});

const LINES = [
  { text: 'Mithilesh Kumar U S', delay: 0.4 },
  { text: 'Full Stack · AI/ML · Engineer', delay: 1.2 },
  { text: 'Building intelligent solutions', delay: 2.0 },
];

export function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 2800),
      setTimeout(() => setPhase(3), 3600),
      setTimeout(() => onComplete(), 4500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#03010a' }}
        >
          {/* Stars layer */}
          <div className="absolute inset-0">
            {STARS.map((s) => (
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
                  opacity: [s.opacity, s.opacity * 2.5, s.opacity],
                  scale: [1, 1.6, 1],
                }}
                transition={{
                  duration: s.speed * 2,
                  delay: s.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Shooting stars */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`shoot-${i}`}
              className="absolute h-px rounded-full"
              style={{
                top: `${15 + i * 25}%`,
                left: '-10%',
                width: 120,
                background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.8), rgba(236,72,153,0.6), transparent)',
              }}
              animate={{ x: ['0vw', '120vw'], opacity: [0, 1, 0] }}
              transition={{
                duration: 1.4,
                delay: 0.5 + i * 0.8,
                repeat: Infinity,
                repeatDelay: 3 + i * 1.2,
                ease: 'easeIn',
              }}
            />
          ))}

          {/* Deep space glow orbs */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 500, height: 500,
              left: '10%', top: '5%',
              background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)',
              filter: 'blur(40px)',
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 400, height: 400,
              right: '5%', bottom: '10%',
              background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 65%)',
              filter: 'blur(40px)',
            }}
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* Centre content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">

            {/* Constellation / orbit graphic */}
            <AnimatePresence>
              {phase >= 1 && (
                <motion.div
                  key="orbit"
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex items-center justify-center"
                  style={{ width: 140, height: 140 }}
                >
                  {/* Outer orbit */}
                  <motion.div
                    className="absolute rounded-full border"
                    style={{ width: 130, height: 130, borderColor: 'rgba(168,85,247,0.25)' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                  >
                    <div
                      className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                        boxShadow: '0 0 14px #a855f7',
                      }}
                    />
                  </motion.div>

                  {/* Inner orbit */}
                  <motion.div
                    className="absolute rounded-full border"
                    style={{ width: 80, height: 80, borderColor: 'rgba(236,72,153,0.2)' }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  >
                    <div
                      className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #ec4899, #f472b6)',
                        boxShadow: '0 0 10px #ec4899',
                      }}
                    />
                  </motion.div>

                  {/* Centre star */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: 'radial-gradient(circle, #fff 0%, #c084fc 50%, transparent 80%)',
                      boxShadow: '0 0 20px #a855f7, 0 0 40px rgba(168,85,247,0.5)',
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Text lines */}
            <div className="flex flex-col items-center gap-3">
              {LINES.map((line, i) => (
                <AnimatePresence key={line.text}>
                  {phase >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.65, delay: line.delay, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {i === 0 ? (
                        <h1
                          className="text-4xl font-bold sm:text-5xl"
                          style={{
                            background: 'linear-gradient(135deg, #f1f5f9 0%, #c084fc 50%, #ec4899 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {line.text}
                        </h1>
                      ) : i === 1 ? (
                        <p className="text-sm font-medium tracking-[0.25em] uppercase" style={{ color: 'rgba(192,132,252,0.75)' }}>
                          {line.text}
                        </p>
                      ) : (
                        <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(148,163,184,0.5)' }}>
                          {line.text}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>

            {/* Progress bar */}
            <AnimatePresence>
              {phase >= 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="overflow-hidden rounded-full"
                  style={{ width: 200, height: 2, background: 'rgba(168,85,247,0.15)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7, #ec4899)' }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2.4, delay: 1.0, ease: 'easeInOut' }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
