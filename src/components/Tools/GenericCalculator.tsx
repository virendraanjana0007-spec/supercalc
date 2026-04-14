'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button3D from '@/components/UI/Button3D';

interface CalculatorField {
  name: string;
  label: string;
  type: 'number' | 'select';
  placeholder?: string;
  options?: { value: number; label: string }[];
}

interface GenericCalculatorProps {
  title: string;
  fields: CalculatorField[];
  calculate: (values: Record<string, number>) => Record<string, any>;
  resultLabels: string[];
}

export default function GenericCalculator({ title, fields, calculate, resultLabels }: GenericCalculatorProps) {
  const [values, setValues] = useState<Record<string, number>>({});
  const [result, setResult] = useState<Record<string, any> | null>(null);

  const handleChange = (name: string, value: number) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    const calcResult = calculate(values);
    setResult(calcResult);
  };

  const allFilled = fields.every(field => values[field.name]);

  return (
    <div>
      {fields.map((field) => (
        <div key={field.name} className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            {field.label}
          </label>
          {field.type === 'select' && field.options ? (
            <select
              value={values[field.name] || ''}
              onChange={(e) => handleChange(field.name, Number(e.target.value))}
              className="input-3d"
            >
              <option value="">Select...</option>
              {field.options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          ) : (
            <input
              type="number"
              value={values[field.name] || ''}
              onChange={(e) => handleChange(field.name, Number(e.target.value))}
              className="input-3d"
              placeholder={field.placeholder || 'Enter value'}
            />
          )}
        </div>
      ))}

      <Button3D onClick={handleCalculate} disabled={!allFilled}>
        Calculate {title}
      </Button3D>

      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="result-box"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Result</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(result).map(([key, value], index) => (
              <div key={key} className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold gradient-text">
                  {typeof value === 'number' ? value.toLocaleString('en-IN', { maximumFractionDigits: 2 }) : value}
                </div>
                <div className="text-gray-600 mt-1 text-sm">
                  {resultLabels[index] || key}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
