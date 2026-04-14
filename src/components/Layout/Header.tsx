'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-card sticky top-4 mx-4 mt-4 z-50 px-6 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold gradient-text">
          SuperCalc
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/finance-calculators" className="hover:text-blue-600 transition-colors">
            Finance
          </Link>
          <Link href="/student-tools" className="hover:text-blue-600 transition-colors">
            Student
          </Link>
          <Link href="/health-fitness" className="hover:text-blue-600 transition-colors">
            Health
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden mt-4 pb-4"
        >
          <div className="flex flex-col space-y-3">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/finance-calculators" className="hover:text-blue-600 transition-colors">
              Finance
            </Link>
            <Link href="/student-tools" className="hover:text-blue-600 transition-colors">
              Student
            </Link>
            <Link href="/health-fitness" className="hover:text-blue-600 transition-colors">
              Health
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
