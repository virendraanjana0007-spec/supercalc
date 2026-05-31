'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { getToolBySlug } from '@/lib/tools';

// Import individual calculators
const AgeCalculator = dynamic(() => import('./AgeCalculator'));

// Generic Calculator with configurations for each tool
const GenericCalculator = dynamic(() => import('./GenericCalculator'));

const calculatorConfigs: Record<string, any> = {
  // Basic Calculators
  'percentage-calculator': {
    title: 'Percentage',
    fields: [
      { name: 'value', label: 'Value', type: 'number', placeholder: 'Enter value' },
      { name: 'total', label: 'Total', type: 'number', placeholder: 'Enter total' },
    ],
    calculate: (values: any) => ({
      percentage: values.total === 0 ? '0.00' : ((values.value / values.total) * 100).toFixed(2),
    }),
    resultLabels: ['Percentage (%)'],
  },
  'discount-calculator': {
    title: 'Discount',
    fields: [
      { name: 'original', label: 'Original Price (₹)', type: 'number', placeholder: 'Enter original price' },
      { name: 'discount', label: 'Discount (%)', type: 'number', placeholder: 'Enter discount %' },
    ],
    calculate: (values: any) => ({
      discountAmount: (values.original * values.discount / 100).toFixed(2),
      finalPrice: (values.original - (values.original * values.discount / 100)).toFixed(2),
    }),
    resultLabels: ['Discount Amount (₹)', 'Final Price (₹)'],
  },
  'profit-loss-calculator': {
    title: 'Profit/Loss',
    fields: [
      { name: 'cost', label: 'Cost Price (₹)', type: 'number', placeholder: 'Enter cost price' },
      { name: 'selling', label: 'Selling Price (₹)', type: 'number', placeholder: 'Enter selling price' },
    ],
    calculate: (values: any) => {
      const diff = values.selling - values.cost;
      const percent = values.cost === 0 ? 0 : (diff / values.cost) * 100;
      return {
        amount: Math.abs(diff).toFixed(2),
        percent: Math.abs(percent).toFixed(2),
        type: diff >= 0 ? 'Profit' : 'Loss',
      };
    },
    resultLabels: ['Amount (₹)', 'Percentage (%)', 'Type'],
  },
  'average-calculator': {
    title: 'Average',
    fields: [
      { name: 'num1', label: 'Number 1', type: 'number', placeholder: 'Enter first number' },
      { name: 'num2', label: 'Number 2', type: 'number', placeholder: 'Enter second number' },
      { name: 'num3', label: 'Number 3', type: 'number', placeholder: 'Enter third number' },
    ],
    calculate: (values: any) => ({
      average: ((values.num1 + values.num2 + values.num3) / 3).toFixed(2),
      sum: (values.num1 + values.num2 + values.num3).toFixed(2),
    }),
    resultLabels: ['Average', 'Sum'],
  },
  'simple-interest-calculator': {
    title: 'Simple Interest',
    fields: [
      { name: 'principal', label: 'Principal Amount (₹)', type: 'number', placeholder: 'Enter principal' },
      { name: 'rate', label: 'Rate of Interest (%)', type: 'number', placeholder: 'Enter rate %' },
      { name: 'time', label: 'Time (Years)', type: 'number', placeholder: 'Enter time in years' },
    ],
    calculate: (values: any) => ({
      interest: (values.principal * values.rate * values.time / 100).toFixed(2),
      totalAmount: (values.principal + (values.principal * values.rate * values.time / 100)).toFixed(2),
    }),
    resultLabels: ['Simple Interest (₹)', 'Total Amount (₹)'],
  },
  'compound-interest-calculator': {
    title: 'Compound Interest',
    fields: [
      { name: 'principal', label: 'Principal Amount (₹)', type: 'number', placeholder: 'Enter principal' },
      { name: 'rate', label: 'Rate of Interest (%)', type: 'number', placeholder: 'Enter rate %' },
      { name: 'time', label: 'Time (Years)', type: 'number', placeholder: 'Enter time in years' },
      { name: 'n', label: 'Compounding Frequency', type: 'select', options: [
        { value: 1, label: 'Annually' },
        { value: 2, label: 'Semi-Annually' },
        { value: 4, label: 'Quarterly' },
        { value: 12, label: 'Monthly' },
      ]},
    ],
    calculate: (values: any) => {
      const amount = values.principal * Math.pow((1 + values.rate / 100 / values.n), values.n * values.time);
      const interest = amount - values.principal;
      return {
        amount: amount.toFixed(2),
        interest: interest.toFixed(2),
      };
    },
    resultLabels: ['Total Amount (₹)', 'Compound Interest (₹)'],
  },
  'ratio-calculator': {
    title: 'Ratio',
    fields: [
      { name: 'a', label: 'A', type: 'number', placeholder: 'Enter A' },
      { name: 'b', label: 'B', type: 'number', placeholder: 'Enter B' },
    ],
    calculate: (values: any) => {
      const gcd = (x: number, y: number): number => y === 0 ? x : gcd(y, x % y);
      const divisor = gcd(values.a, values.b);
      const simplifiedA = divisor === 0 ? 0 : values.a / divisor;
      const simplifiedB = divisor === 0 ? 0 : values.b / divisor;
      const decimalVal = values.b === 0 ? 0 : values.a / values.b;
      return {
        ratio: `${simplifiedA}:${simplifiedB}`,
        decimal: decimalVal.toFixed(4),
      };
    },
    resultLabels: ['Simplified Ratio', 'Decimal Value'],
  },
  
  // Finance Calculators
  'emi-calculator': {
    title: 'EMI',
    fields: [
      { name: 'principal', label: 'Loan Amount (₹)', type: 'number', placeholder: 'Enter loan amount' },
      { name: 'rate', label: 'Interest Rate (% per annum)', type: 'number', placeholder: 'Enter interest rate' },
      { name: 'tenure', label: 'Loan Tenure (Years)', type: 'number', placeholder: 'Enter tenure in years' },
    ],
    calculate: (values: any) => {
      const n = values.tenure * 12;
      if (values.rate === 0) {
        const emi = values.principal / n;
        return {
          emi: emi.toFixed(2),
          totalPayment: values.principal.toFixed(2),
          totalInterest: '0.00',
        };
      }
      const r = values.rate / 12 / 100;
      const emi = (values.principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - values.principal;
      
      return {
        emi: emi.toFixed(2),
        totalPayment: totalPayment.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
      };
    },
    resultLabels: ['Monthly EMI (₹)', 'Total Payment (₹)', 'Total Interest (₹)'],
  },
  'loan-calculator': {
    title: 'Loan',
    fields: [
      { name: 'emi', label: 'Monthly EMI (₹)', type: 'number', placeholder: 'Enter EMI' },
      { name: 'rate', label: 'Interest Rate (%)', type: 'number', placeholder: 'Enter rate' },
      { name: 'tenure', label: 'Tenure (Years)', type: 'number', placeholder: 'Enter tenure' },
    ],
    calculate: (values: any) => {
      const n = values.tenure * 12;
      if (values.rate === 0) {
        const principal = values.emi * n;
        return {
          principal: principal.toFixed(2),
          totalPayment: principal.toFixed(2),
        };
      }
      const r = values.rate / 12 / 100;
      const principal = values.emi * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
      return {
        principal: principal.toFixed(2),
        totalPayment: (values.emi * n).toFixed(2),
      };
    },
    resultLabels: ['Loan Amount (₹)', 'Total Payment (₹)'],
  },
  'sip-calculator': {
    title: 'SIP Returns',
    fields: [
      { name: 'monthly', label: 'Monthly Investment (₹)', type: 'number', placeholder: 'Enter monthly amount' },
      { name: 'rate', label: 'Expected Return Rate (%)', type: 'number', placeholder: 'Enter expected return' },
      { name: 'years', label: 'Time Period (Years)', type: 'number', placeholder: 'Enter years' },
    ],
    calculate: (values: any) => {
      const n = values.years * 12;
      const invested = values.monthly * n;
      if (values.rate === 0) {
        return {
          invested: invested.toFixed(2),
          gains: '0.00',
          total: invested.toFixed(2),
        };
      }
      const r = values.rate / 12 / 100;
      const futureValue = values.monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const gains = futureValue - invested;
      return {
        invested: invested.toFixed(2),
        gains: gains.toFixed(2),
        total: futureValue.toFixed(2),
      };
    },
    resultLabels: ['Total Invested (₹)', 'Wealth Gained (₹)', 'Total Value (₹)'],
  },
  'fd-calculator': {
    title: 'FD Maturity',
    fields: [
      { name: 'principal', label: 'Deposit Amount (₹)', type: 'number', placeholder: 'Enter deposit amount' },
      { name: 'rate', label: 'Interest Rate (%)', type: 'number', placeholder: 'Enter interest rate' },
      { name: 'years', label: 'Time Period (Years)', type: 'number', placeholder: 'Enter years' },
    ],
    calculate: (values: any) => {
      const maturity = values.principal * Math.pow((1 + values.rate / 100), values.years);
      const interest = maturity - values.principal;
      return {
        interest: interest.toFixed(2),
        maturity: maturity.toFixed(2),
      };
    },
    resultLabels: ['Interest Earned (₹)', 'Maturity Amount (₹)'],
  },
  'rd-calculator': {
    title: 'RD Maturity',
    fields: [
      { name: 'monthly', label: 'Monthly Deposit (₹)', type: 'number', placeholder: 'Enter monthly deposit' },
      { name: 'rate', label: 'Interest Rate (%)', type: 'number', placeholder: 'Enter rate' },
      { name: 'months', label: 'Time Period (Months)', type: 'number', placeholder: 'Enter months' },
    ],
    calculate: (values: any) => {
      const r = values.rate / 400;
      const n = values.months;
      const maturity = values.monthly * n + values.monthly * (n * (n + 1) / 2) * (values.rate / 100) * (1/12);
      const deposited = values.monthly * n;
      return {
        deposited: deposited.toFixed(2),
        interest: (maturity - deposited).toFixed(2),
        maturity: maturity.toFixed(2),
      };
    },
    resultLabels: ['Total Deposited (₹)', 'Interest Earned (₹)', 'Maturity Amount (₹)'],
  },
  
  // India Tools
  'gst-calculator': {
    title: 'GST',
    fields: [
      { name: 'amount', label: 'Amount (₹)', type: 'number', placeholder: 'Enter amount' },
      { name: 'gstRate', label: 'GST Rate (%)', type: 'select', options: [
        { value: 5, label: '5%' },
        { value: 12, label: '12%' },
        { value: 18, label: '18%' },
        { value: 28, label: '28%' },
      ]},
    ],
    calculate: (values: any) => {
      const gstAmount = (values.amount * values.gstRate / 100);
      const totalAmount = values.amount + gstAmount;
      
      return {
        gstAmount: gstAmount.toFixed(2),
        cgst: (gstAmount / 2).toFixed(2),
        sgst: (gstAmount / 2).toFixed(2),
        totalAmount: totalAmount.toFixed(2),
      };
    },
    resultLabels: ['GST Amount (₹)', 'CGST (₹)', 'SGST (₹)', 'Total Amount (₹)'],
  },
  
  // Health Calculators
  'bmi-calculator': {
    title: 'BMI',
    fields: [
      { name: 'weight', label: 'Weight (kg)', type: 'number', placeholder: 'Enter weight in kg' },
      { name: 'height', label: 'Height (cm)', type: 'number', placeholder: 'Enter height in cm' },
    ],
    calculate: (values: any) => {
      const heightInM = values.height / 100;
      const bmi = values.weight / (heightInM * heightInM);
      let category = '';
      
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obese';
      
      return {
        bmi: bmi.toFixed(2),
        category,
      };
    },
    resultLabels: ['BMI', 'Category'],
  },
  'bmr-calculator': {
    title: 'BMR',
    fields: [
      { name: 'weight', label: 'Weight (kg)', type: 'number', placeholder: 'Enter weight' },
      { name: 'height', label: 'Height (cm)', type: 'number', placeholder: 'Enter height' },
      { name: 'age', label: 'Age (Years)', type: 'number', placeholder: 'Enter age' },
      { name: 'gender', label: 'Gender', type: 'select', options: [
        { value: 1, label: 'Male' },
        { value: 0, label: 'Female' },
      ]},
    ],
    calculate: (values: any) => {
      const bmr = (10 * values.weight) + (6.25 * values.height) - (5 * values.age) + (values.gender === 1 ? 5 : -161);
      return {
        bmr: bmr.toFixed(2),
        light: (bmr * 1.375).toFixed(0),
        moderate: (bmr * 1.55).toFixed(0),
        active: (bmr * 1.725).toFixed(0),
      };
    },
    resultLabels: ['BMR (calories/day)', 'Light Activity', 'Moderate Activity', 'Very Active'],
  },
  'calorie-calculator': {
    title: 'Daily Calories',
    fields: [
      { name: 'bmr', label: 'Your BMR', type: 'number', placeholder: 'Enter BMR' },
      { name: 'activity', label: 'Activity Level', type: 'select', options: [
        { value: 1.2, label: 'Sedentary' },
        { value: 1.375, label: 'Light' },
        { value: 1.55, label: 'Moderate' },
        { value: 1.725, label: 'Very Active' },
      ]},
    ],
    calculate: (values: any) => {
      const maintenance = values.bmr * values.activity;
      return {
        lose: (maintenance - 500).toFixed(0),
        maintain: maintenance.toFixed(0),
        gain: (maintenance + 500).toFixed(0),
      };
    },
    resultLabels: ['Weight Loss', 'Maintain Weight', 'Weight Gain'],
  },
  'water-intake-calculator': {
    title: 'Water Intake',
    fields: [
      { name: 'weight', label: 'Weight (kg)', type: 'number', placeholder: 'Enter weight' },
      { name: 'activity', label: 'Activity Level', type: 'select', options: [
        { value: 30, label: 'Low' },
        { value: 35, label: 'Moderate' },
        { value: 40, label: 'High' },
      ]},
    ],
    calculate: (values: any) => {
      const water = (values.weight * values.activity) / 1000;
      return {
        liters: water.toFixed(2),
        glasses: Math.ceil(water / 0.25),
      };
    },
    resultLabels: ['Daily Water (Liters)', 'Glasses (250ml)'],
  },
  
  // Advanced
  'cagr-calculator': {
    title: 'CAGR',
    fields: [
      { name: 'beginning', label: 'Beginning Value (₹)', type: 'number', placeholder: 'Enter beginning value' },
      { name: 'ending', label: 'Ending Value (₹)', type: 'number', placeholder: 'Enter ending value' },
      { name: 'years', label: 'Time Period (Years)', type: 'number', placeholder: 'Enter years' },
    ],
    calculate: (values: any) => {
      if (values.beginning === 0 || values.years === 0) {
        return { cagr: '0.00' };
      }
      const cagr = (Math.pow(values.ending / values.beginning, 1 / values.years) - 1) * 100;
      return {
        cagr: cagr.toFixed(2),
      };
    },
    resultLabels: ['CAGR (%)'],
  },
  'roi-calculator': {
    title: 'ROI',
    fields: [
      { name: 'invested', label: 'Amount Invested (₹)', type: 'number', placeholder: 'Enter invested amount' },
      { name: 'returned', label: 'Amount Returned (₹)', type: 'number', placeholder: 'Enter returned amount' },
    ],
    calculate: (values: any) => {
      if (values.invested === 0) {
        return {
          roi: '0.00',
          profit: (values.returned - values.invested).toFixed(2),
        };
      }
      const roi = ((values.returned - values.invested) / values.invested) * 100;
      return {
        roi: roi.toFixed(2),
        profit: (values.returned - values.invested).toFixed(2),
      };
    },
    resultLabels: ['ROI (%)', 'Profit/Loss (₹)'],
  },
  'percentage-change-calculator': {
    title: 'Percentage Change',
    fields: [
      { name: 'old', label: 'Old Value', type: 'number', placeholder: 'Enter old value' },
      { name: 'new', label: 'New Value', type: 'number', placeholder: 'Enter new value' },
    ],
    calculate: (values: any) => {
      if (values.old === 0) {
        return {
          change: '0.00',
          type: 'No Change',
        };
      }
      const change = ((values.new - values.old) / values.old) * 100;
      return {
        change: change.toFixed(2),
        type: change >= 0 ? 'Increase' : 'Decrease',
      };
    },
    resultLabels: ['Change (%)', 'Type'],
  },
  
  // Fun Tools
  'random-number-generator': {
    title: 'Random Number',
    fields: [
      { name: 'min', label: 'Minimum Value', type: 'number', placeholder: 'Enter min' },
      { name: 'max', label: 'Maximum Value', type: 'number', placeholder: 'Enter max' },
    ],
    calculate: (values: any) => {
      const random = Math.floor(Math.random() * (values.max - values.min + 1)) + values.min;
      return {
        number: random,
      };
    },
    resultLabels: ['Random Number'],
  },
  'password-generator': {
    title: 'Password',
    fields: [
      { name: 'length', label: 'Password Length', type: 'number', placeholder: 'Enter length (8-32)', },
    ],
    calculate: (values: any) => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
      let password = '';
      for (let i = 0; i < values.length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return {
        password,
      };
    },
    resultLabels: ['Generated Password'],
  },
};

interface CalculatorLoaderProps {
  slug: string;
}

export default function CalculatorLoader({ slug }: CalculatorLoaderProps) {
  // Get tool details to determine category
  const tool = getToolBySlug(slug);
  const category = tool?.category;

  // Special calculators with custom components
  if (slug === 'age-calculator') {
    return (
      <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
        <AgeCalculator />
      </Suspense>
    );
  }

  // Generic calculators
  const config = calculatorConfigs[slug];
  if (config) {
    return (
      <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
        <GenericCalculator
          title={config.title}
          fields={config.fields}
          calculate={config.calculate}
          resultLabels={config.resultLabels}
          category={category}
        />
      </Suspense>
    );
  }


  return (
    <div className="text-center py-8 text-gray-600">
      <p className="text-lg">Calculator coming soon!</p>
      <p className="text-sm mt-2">We're building this tool for you.</p>
    </div>
  );
}
