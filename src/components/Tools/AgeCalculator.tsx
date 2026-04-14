'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button3D from '@/components/UI/Button3D';

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({ years, months, days });
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="input-3d"
          max={new Date().toISOString().split('T')[0]}
        />
      </div>

      <Button3D onClick={calculateAge} disabled={!birthDate}>
        Calculate Age
      </Button3D>

      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="result-box"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Your Age</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text">{result.years}</div>
              <div className="text-gray-600 mt-1">Years</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">{result.months}</div>
              <div className="text-gray-600 mt-1">Months</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">{result.days}</div>
              <div className="text-gray-600 mt-1">Days</div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
