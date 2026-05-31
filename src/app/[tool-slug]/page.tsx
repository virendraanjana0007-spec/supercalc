import { tools, getToolBySlug, getAllSlugs } from '@/lib/tools';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CalculatorWrapper from '@/components/UI/CalculatorWrapper';
import AdSpace from '@/components/Layout/AdSpace';
import ToolCard from '@/components/UI/ToolCard';
import CalculatorLoader from '@/components/Tools/CalculatorRegistry';
import SEOContentSection from '@/components/UI/SEOContentSection';
import Link from 'next/link';

// Generate static params for all tools
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Per-category title templates for higher CTR
function getTitleForTool(toolName: string, slug: string, category: string): string {
  if (slug === 'percentage-change-calculator') {
    return `Percentage Change Calculator — Instant % Increase/Decrease | SuperCalc`;
  }
  if (slug === 'emi-calculator') {
    return `EMI Calculator India 2026 — Home, Car & Personal Loan | SuperCalc`;
  }
  if (slug === 'age-calculator') {
    return `Age Calculator Online 2026 — Exact Age in Years, Months & Days | SuperCalc`;
  }
  if (slug === 'roi-calculator') {
    return `ROI Calculator — Calculate Return on Investment Online Free | SuperCalc`;
  }
  if (slug === 'calorie-calculator') {
    return `Calorie Calculator — Daily Calorie Needs for Weight Loss | SuperCalc`;
  }
  if (slug === 'fd-calculator') {
    return `FD Calculator — Fixed Deposit Maturity & Interest Calculator | SuperCalc`;
  }
  if (slug === 'rd-calculator') {
    return `RD Calculator — Recurring Deposit Maturity Amount Online | SuperCalc`;
  }
  if (slug === 'bmi-calculator') {
    return `BMI Calculator 2026 — Check Body Mass Index Online Free | SuperCalc`;
  }
  if (slug === 'compound-interest-calculator') {
    return `Compound Interest Calculator — Formula & Examples Online | SuperCalc`;
  }
  if (slug === 'sip-calculator') {
    return `SIP Calculator India 2026 — Mutual Fund Returns Estimator | SuperCalc`;
  }
  if (slug === 'percentage-calculator') {
    return `Percentage Calculator — X% of Y, Percent Formula Online Free | SuperCalc`;
  }
  if (category === 'finance' || category === 'india') {
    return `${toolName} India 2026 — Free & Accurate | SuperCalc`;
  }
  if (category === 'health') {
    return `${toolName} — Free Online Health Calculator 2026 | SuperCalc`;
  }
  return `${toolName} — Free Online Calculator 2026 | SuperCalc`;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ 'tool-slug': string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams['tool-slug'];
  const tool = getToolBySlug(slug);
  
  if (!tool) {
    return {
      title: 'Tool Not Found - SuperCalc',
    };
  }

  const pageTitle = getTitleForTool(tool.name, slug, tool.category);
  const canonicalUrl = `https://supercalc-dun.vercel.app/${slug}`;

  return {
    title: pageTitle,
    description: tool.description,
    keywords: tool.keywords.join(', '),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: tool.description,
      type: 'website',
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary',
      title: pageTitle,
      description: tool.description,
    },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ 'tool-slug': string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams['tool-slug'];
  console.log('🔍 Tool Page - Resolved Params:', resolvedParams);
  console.log('🔍 Tool Page - Slug:', slug);
  
  const tool = getToolBySlug(slug);
  console.log('🔍 Tool Page - Found Tool:', tool);
  
  if (!tool) {
    console.error('❌ Tool not found for slug:', slug);
    notFound();
  }

  // Get related tools
  const relatedToolsList = tools.filter(t => tool.relatedTools.includes(t.slug)).slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">{tool.icon}</span>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {tool.name}
            </h1>
            <span className="category-badge">{tool.category}</span>
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-4">{tool.description}</p>
      </div>

      {/* Top Ad */}
      <AdSpace position="top" />

      {/* Calculator */}
      <CalculatorWrapper>
        <CalculatorLoader slug={slug} />
      </CalculatorWrapper>

      {/* Middle Ad */}
      <AdSpace position="middle" />

      {/* SEO Content Section */}
      <SEOContentSection slug={slug} toolName={tool.name} category={tool.category} />

      {/* Bottom Ad */}
      <AdSpace position="bottom" />

      {/* Related Tools */}
      {relatedToolsList.length > 0 && (
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Related Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedToolsList.map((relatedTool) => (
              <ToolCard
                key={relatedTool.slug}
                slug={relatedTool.slug}
                name={relatedTool.name}
                description={relatedTool.description}
                category={relatedTool.category}
                icon={relatedTool.icon}
              />
            ))}
          </div>
        </div>
      )}

      {/* Back to Home */}
      <div className="text-center mt-8">
        <Link 
          href="/"
          className="inline-block button-3d"
        >
          ← Back to All Calculators
        </Link>
      </div>
    </div>
  );
}
