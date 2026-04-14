'use client';

import { motion } from 'framer-motion';

export default function CalculatorWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 my-8"
    >
      {children}
    </motion.div>
  );
}
