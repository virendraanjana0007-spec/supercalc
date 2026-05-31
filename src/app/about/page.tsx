import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - SuperCalc Free Online Calculators',
  description: 'Learn more about SuperCalc, our mission to provide free, fast, and accurate calculation tools, and the technology behind our platform.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          About SuperCalc
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Empowering users worldwide with fast, accurate, and beautifully designed calculation tools.
        </p>
      </div>

      <div className="space-y-8">
        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At SuperCalc, we believe that access to high-quality utility tools should be free and accessible to everyone. 
            Whether you are calculating a loan EMI, planning your retirement, tracking health metrics like BMI, or doing academic homework, our mission is to eliminate the complexity of manual mathematical calculations. 
            We provide clean, responsive, and distraction-free calculators designed for instant answers.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Why Choose SuperCalc?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">⚡ Lightning Fast & Client-Side</h3>
              <p className="text-gray-600 text-sm">
                All calculations happen instantly right inside your browser. No long loading times, no round-trips to a server.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">🎯 100% Accurate Formulas</h3>
              <p className="text-gray-600 text-sm">
                Our tools are built using industry-standard mathematical and financial formulas, ensuring absolute precision in every calculation.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">🛡️ Privacy-First Design</h3>
              <p className="text-gray-600 text-sm">
                Your data is safe. Because calculations are processed locally on your device, we never store or transmit the values you enter.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">📱 Responsive & Cross-Platform</h3>
              <p className="text-gray-600 text-sm">
                SuperCalc is fully optimized for smartphones, tablets, laptops, and desktops. Calculate on the go, anytime, anywhere.
              </p>
            </div>
          </div>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Our Team & Technology</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SuperCalc is built using modern web development standards including Next.js, React, TailwindCSS, and TypeScript. We continually update our algorithms to ensure compliance with the latest regulations (such as updated tax rules, financial metrics, and health standards).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Have feedback, suggestions, or want to report a bug? We would love to hear from you. Visit our{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact Page
            </Link>{' '}
            to get in touch.
          </p>
        </section>
      </div>

      <div className="text-center mt-12">
        <Link href="/" className="button-3d inline-block">
          ← Back to Calculators
        </Link>
      </div>
    </div>
  );
}
