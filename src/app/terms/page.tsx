import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - SuperCalc',
  description: 'Read the terms of service of SuperCalc. Understand your rights and guidelines regarding our free online calculation tools.',
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-600">Last Updated: May 31, 2026</p>
      </div>

      <div className="space-y-8">
        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using SuperCalc (<strong>supercalc-dun.vercel.app</strong>), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">2. Calculator Accuracy & Disclaimers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The calculators and tools provided on SuperCalc are intended solely for educational, informational, and personal planning purposes. 
            While we strive to ensure that our mathematical formulas, financial estimations, and health calculation tools are completely accurate, <strong>SuperCalc does not guarantee the accuracy, completeness, or reliability of any calculation results</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Specifically:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
            <li><strong>Financial Calculators (EMI, SIP, FD, RD, Loan, CAGR, ROI):</strong> Calculations are estimates. Actual loan interest, returns, and taxes can vary based on banking policies, changing interest rates, and government regulations. Always consult a certified financial adviser before making investment decisions.</li>
            <li><strong>Health & Fitness Calculators (BMI, BMR, Calorie, Water Intake):</strong> Results are approximations based on generalized body metrics. They are not a substitute for professional medical advice, diagnosis, or treatment.</li>
            <li><strong>Student Tools & Converters:</strong> Grade conversions and unit measurements should be cross-verified for critical projects or official school admissions.</li>
          </ul>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">3. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            The design, code, calculators, graphics, content, and organization of SuperCalc are the property of SuperCalc. 
            You may use our calculators for your personal, non-commercial use. You may not copy, scraping, reverse engineer, or reproduce the calculator engines or code for commercial purposes without prior written consent from us.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">4. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            Under no circumstances shall SuperCalc or its creators be held liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of, or inability to use, our calculators, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">5. Modifications to the Website</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify, suspend, or discontinue any calculator, feature, or page on SuperCalc at any time without notice. We are not liable to you or any third party for any such modification or discontinuation.
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
