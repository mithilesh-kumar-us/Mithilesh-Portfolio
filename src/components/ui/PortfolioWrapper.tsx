'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IntroScreen } from '@/components/ui/IntroScreen';

export function PortfolioWrapper({ children }: { children: React.ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && <IntroScreen onComplete={() => setIntroComplete(true)} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </>
  );
}
