import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass-card mx-4 mt-8 mb-4 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">SuperCalc</h3>
            <p className="text-gray-600 text-sm">
              Free online calculators for every need. Fast, accurate, and beautiful.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/finance-calculators" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Finance Calculators
                </Link>
              </li>
              <li>
                <Link href="/student-tools" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Student Tools
                </Link>
              </li>
              <li>
                <Link href="/health-fitness" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Health & Fitness
                </Link>
              </li>
              <li>
                <Link href="/unit-converters" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Unit Converters
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Popular Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/age-calculator" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Age Calculator
                </Link>
              </li>
              <li>
                <Link href="/emi-calculator" className="text-gray-600 hover:text-blue-600 transition-colors">
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/gst-calculator" className="text-gray-600 hover:text-blue-600 transition-colors">
                  GST Calculator
                </Link>
              </li>
              <li>
                <Link href="/bmi-calculator" className="text-gray-600 hover:text-blue-600 transition-colors">
                  BMI Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} SuperCalc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
