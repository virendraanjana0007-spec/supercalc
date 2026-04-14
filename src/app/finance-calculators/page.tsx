import { getToolsByCategory, categories } from '@/lib/tools';
import { Metadata } from 'next';
import ToolCard from '@/components/UI/ToolCard';
import AdSpace from '@/components/Layout/AdSpace';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Finance Calculators - EMI, GST, SIP, Loan | SuperCalc 2026',
  description: 'Free finance calculators for EMI, GST, SIP, FD, Loan, and more. Calculate your finances with accuracy.',
  keywords: 'finance calculator, EMI calculator, GST calculator, SIP calculator, loan calculator',
};

export default function FinanceCalculators() {
  const tools = getToolsByCategory('finance');
  const category = categories.find(c => c.id === 'finance');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-4 gradient-text">
          {category?.icon} {category?.name}
        </h1>
        <p className="text-lg text-gray-700">
          Calculate EMI, GST, SIP returns, Fixed Deposits, and more with our free finance calculators.
        </p>
      </div>

      <AdSpace position="category-top" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {tools.map((tool) => (
          <ToolCard
            key={tool.slug}
            slug={tool.slug}
            name={tool.name}
            description={tool.description}
            category={tool.category}
            icon={tool.icon}
          />
        ))}
      </div>

      <AdSpace position="category-bottom" />

      <div className="text-center">
        <Link href="/" className="button-3d inline-block">
          ← Back to All Calculators
        </Link>
      </div>
    </div>
  );
}
