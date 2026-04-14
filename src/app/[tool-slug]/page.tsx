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

  return {
    title: `${tool.name} - Free Online Calculator 2026 | SuperCalc`,
    description: tool.description,
    keywords: tool.keywords.join(', '),
    openGraph: {
      title: `${tool.name} - Free Online Calculator 2026`,
      description: tool.description,
      type: 'website',
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
