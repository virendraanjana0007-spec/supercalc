'use client';

import { motion } from 'framer-motion';

interface Button3DProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export default function Button3D({ onClick, children, disabled = false, className = '' }: Button3DProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`button-3d w-full ${className}`}
    >
      {children}
    </motion.button>
  );
}
