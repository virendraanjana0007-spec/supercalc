'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ToolCardProps {
  slug: string;
  name: string;
  description: string;
  category: string;
  icon?: string;
}

export default function ToolCard({ slug, name, description, category, icon = '🧮' }: ToolCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/${slug}`}>
        <div className="glass-card p-6 h-full cursor-pointer group">
          <div className="text-4xl mb-3">{icon}</div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          <span className="category-badge text-xs">{category}</span>
        </div>
      </Link>
    </motion.div>
  );
}
