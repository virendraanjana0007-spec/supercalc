'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { tools, categories, getToolsByCategory } from '@/lib/tools';
import ToolCard from '@/components/UI/ToolCard';
import AdSpace from '@/components/Layout/AdSpace';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          SuperCalc
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          60+ Free Online Calculators for Every Need
        </p>
        <p className="text-lg text-gray-600 mb-12">
          Finance, Health, Student Tools, Converters & More - Fast, Accurate & Beautiful
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search calculators... (e.g., EMI, GST, BMI)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-3d text-lg"
          />
        </div>
      </motion.div>

      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              !selectedCategory
                ? 'button-3d'
                : 'bg-white hover:bg-gray-100 text-gray-700'
            }`}
          >
            All Tools
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'button-3d'
                  : 'bg-white hover:bg-gray-100 text-gray-700'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Ad Space */}
      <AdSpace position="home-top" />

      {/* Tools Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 gradient-text">
          {selectedCategory
            ? categories.find(c => c.id === selectedCategory)?.name
            : searchQuery
            ? `Search Results for "${searchQuery}"`
            : 'All Calculators'}
        </h2>
        
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ToolCard
                  slug={tool.slug}
                  name={tool.name}
                  description={tool.description}
                  category={tool.category}
                  icon={tool.icon}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-600 mb-4">No calculators found</p>
            <p className="text-gray-500">Try a different search term or category</p>
          </div>
        )}
      </div>

      {/* Category Sections */}
      {!searchQuery && !selectedCategory && (
        <>
          {categories.map((category, index) => {
            const categoryTools = getToolsByCategory(category.id);
            if (categoryTools.length === 0) return null;

            return (
              <div key={category.id} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-3xl font-bold gradient-text">
                    {category.name}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryTools.slice(0, 4).map((tool) => (
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
                {categoryTools.length > 4 && (
                  <div className="text-center mt-6">
                    <a
                      href={`/${category.id === 'basic' ? 'basic-calculators' : category.id === 'finance' ? 'finance-calculators' : category.id === 'student' ? 'student-tools' : category.id === 'health' ? 'health-fitness' : category.id === 'converter' ? 'unit-converters' : category.id + '-tools'}`}
                      className="button-3d inline-block"
                    >
                      View All {category.name} ({categoryTools.length})
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </>
      )}

      {/* Bottom Ad */}
      <AdSpace position="home-bottom" />

      {/* Why Choose Us */}
      <div className="glass-card p-8 my-12">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
          Why Choose SuperCalc?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Get instant results with our optimized calculators</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">100% Accurate</h3>
            <p className="text-gray-600">Precise calculations you can rely on</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Mobile Friendly</h3>
            <p className="text-gray-600">Works perfectly on all devices</p>
          </div>
        </div>
      </div>
    </div>
  );
}
