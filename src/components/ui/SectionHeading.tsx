'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({
  title,
  subtitle,
  children,
  align = 'center',
}: SectionHeadingProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
        <span className="gradient-text">.</span>
      </h2>
      {subtitle && <p className="mt-4 text-lg text-dark-400">{subtitle}</p>}
      {children}
    </motion.div>
  );
}
