import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - SuperCalc',
  description: 'Read the privacy policy of SuperCalc. Learn how we handle your data, our use of cookies, and Google AdSense compliance policies.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600">Last Updated: May 31, 2026</p>
      </div>

      <div className="space-y-8">
        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At SuperCalc, accessible from <strong>supercalc-dun.vercel.app</strong>, one of our main priorities is the privacy of our visitors. 
            This Privacy Policy document contains types of information that is collected and recorded by SuperCalc and how we use it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">2. Consent</h2>
          <p className="text-gray-700 leading-relaxed">
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">3. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SuperCalc is a client-side web application. All computations, calculations, and inputs entered into our calculators are processed locally in your browser and are never transmitted to our servers or stored by us.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you contact us directly, we may receive additional information about you such as your name, email address, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">4. Log Files</h2>
          <p className="text-gray-700 leading-relaxed">
            SuperCalc follows a standard procedure of using log files. These files log visitors when they visit websites. 
            The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. 
            These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">5. Cookies and Web Beacons</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Like any other website, SuperCalc uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. 
            The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">6. Google DoubleClick DART Cookie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">7. Advertising Partners Privacy Policies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on SuperCalc, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. 
            These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Note that SuperCalc has no access to or control over these cookies that are used by third-party advertisers.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4 gradient-text">8. GDPR & CCPA Data Protection Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
            <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
            <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
            <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
            <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>
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
