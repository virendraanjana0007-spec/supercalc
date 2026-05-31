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
  category?: string;
}

export default function GenericCalculator({ title, fields, calculate, resultLabels, category }: GenericCalculatorProps) {
  // Check if this calculator uses currency fields
  const hasCurrency = fields.some(f => f.label.includes('₹')) || resultLabels.some(l => l.includes('₹'));

  // Default to $ for global/US audience, ₹ for India category
  const [currency, setCurrency] = useState<'$' | '₹' | '€' | '£'>(
    category === 'india' ? '₹' : '$'
  );

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

  // Helper to replace Rupee symbol with selected currency
  const formatLabel = (label: string) => {
    return label.replace(/₹/g, currency);
  };

  // Format result values as currency if the label indicates currency
  const formatResultValue = (val: any, label: string) => {
    if (typeof val === 'number') {
      return val.toLocaleString(currency === '₹' ? 'en-IN' : 'en-US', {
        maximumFractionDigits: 2,
      });
    }
    if (typeof val === 'string') {
      const parsed = parseFloat(val);
      const isNumeric = !isNaN(parsed) && isFinite(parsed) && !val.includes(':') && !/^[a-zA-Z\s]+$/.test(val);
      
      if (isNumeric && label.includes('₹')) {
        return parsed.toLocaleString(currency === '₹' ? 'en-IN' : 'en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      }
    }
    return val;
  };

  return (
    <div>
      {/* Currency Switcher */}
      {hasCurrency && (
        <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <span className="text-sm font-semibold text-gray-600">Select Currency:</span>
          <div className="flex gap-2">
            {[
              { symbol: '$', label: 'USD' },
              { symbol: '₹', label: 'INR' },
              { symbol: '€', label: 'EUR' },
              { symbol: '£', label: 'GBP' },
            ].map((opt) => (
              <button
                key={opt.symbol}
                type="button"
                onClick={() => setCurrency(opt.symbol as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === opt.symbol
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'
                }`}
                id={`currency-select-${opt.label.toLowerCase()}`}
              >
                {opt.symbol} {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {fields.map((field) => (
        <div key={field.name} className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            {formatLabel(field.label)}
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
            <div className="relative">
              {field.label.includes('₹') && (
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                  {currency}
                </span>
              )}
              <input
                type="number"
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, Number(e.target.value))}
                className={`input-3d ${field.label.includes('₹') ? 'pl-10' : ''}`}
                placeholder={field.placeholder ? formatLabel(field.placeholder) : 'Enter value'}
              />
            </div>
          )}
        </div>
      ))}

      <Button3D onClick={handleCalculate} disabled={!allFilled}>
        Calculate {title}
      </Button3D>

      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="result-box mt-8"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Result</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(result).map(([key, value], index) => {
              const originalLabel = resultLabels[index] || key;
              const formattedLabel = formatLabel(originalLabel);
              const formattedValue = formatResultValue(value, originalLabel);

              return (
                <div key={key} className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold gradient-text">
                    {originalLabel.includes('₹') && typeof formattedValue === 'string' && !formattedValue.startsWith(currency) ? `${currency}${formattedValue}` : formattedValue}
                  </div>
                  <div className="text-gray-600 mt-1 text-sm font-medium">
                    {formattedLabel}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}

