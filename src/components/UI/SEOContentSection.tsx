import { seoContent, generateGenericContent } from '@/lib/seoContent';

interface SEOContentSectionProps {
  slug: string;
  toolName: string;
  category: string;
}

export default function SEOContentSection({ slug, toolName, category }: SEOContentSectionProps) {
  // Get specific content or generate generic
  const content = seoContent[slug] || generateGenericContent(toolName, category);

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <article className="glass-card p-8">
        <h2 className="text-3xl font-bold mb-6 gradient-text">
          What is {toolName}? Complete Guide 2026
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
            {content.introduction}
          </p>
        </div>
      </article>

      {/* What Is Section */}
      <article className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-4">
          Understanding {toolName}
        </h2>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {content.whatIs}
        </div>
      </article>

      {/* How to Use Section */}
      <article className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-4">
          How to Use {toolName} - Step by Step Guide
        </h2>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {content.howToUse}
        </div>
      </article>

      {/* Formula Section */}
      <article className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-4">
          {toolName} Formula & Calculation Method
        </h2>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {content.formula}
        </div>
      </article>

      {/* Example Section */}
      <article className="glass-card p-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <h2 className="text-2xl font-bold mb-4">
          Practical Example with Step-by-Step Solution
        </h2>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {content.example}
        </div>
      </article>

      {/* Middle Ad */}
      <div className="ad-space">
        <p>📢 Ad Space - In-Content</p>
        <p className="text-xs mt-1">Google AdSense will be integrated here</p>
      </div>

      {/* Benefits Section */}
      <article className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-4">
          Benefits of Using Our {toolName}
        </h2>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {content.benefits}
        </div>
      </article>

      {/* Tips Section */}
      <article className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-4">
          Expert Tips & Best Practices
        </h2>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {content.tips}
        </div>
      </article>

      {/* FAQ Section */}
      <article className="glass-card p-8">
        <h2 className="text-3xl font-bold mb-6 gradient-text">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-6">
          {content.faq.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
