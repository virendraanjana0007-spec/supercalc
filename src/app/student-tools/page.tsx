import { getToolsByCategory, categories } from '@/lib/tools';
import { Metadata } from 'next';
import ToolCard from '@/components/UI/ToolCard';
import AdSpace from '@/components/Layout/AdSpace';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Student Tools - GPA, CGPA, Marks Calculator | SuperCalc',
  description: 'Free student tools for GPA, CGPA, marks percentage calculation, and study planning.',
};

export default function StudentTools() {
  const tools = getToolsByCategory('student');
  const category = categories.find(c => c.id === 'student');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-4 gradient-text">
          {category?.icon} {category?.name}
        </h1>
        <p className="text-lg text-gray-700">
          Calculate GPA, CGPA, marks percentage, and plan your study schedule.
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
