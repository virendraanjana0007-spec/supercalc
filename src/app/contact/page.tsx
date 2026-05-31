'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Have a question, feedback, or a tool request? We would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info Column */}
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold mb-2 text-gray-800">📧 Email Us</h3>
            <p className="text-sm text-gray-600 mb-4">
              Send your questions or feedback directly to our support inbox.
            </p>
            <a
              href="mailto:support@supercalc-dun.vercel.app"
              className="text-blue-600 hover:underline text-sm font-semibold break-all"
            >
              support@supercalc-dun.vercel.app
            </a>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold mb-2 text-gray-800">🚀 Fast Response</h3>
            <p className="text-sm text-gray-600">
              We typically review and respond to all feedback and tool requests within 24–48 hours.
            </p>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-2">
          <div className="glass-card p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your message has been sent successfully. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="button-3d"
                  id="send-another-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-gray-700 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-3d"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-3d"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-gray-700 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="input-3d"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-3d min-h-[120px]"
                    placeholder="Type your message here..."
                  />
                </div>

                <button type="submit" className="button-3d w-full" id="submit-contact-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="/" className="button-3d inline-block">
          ← Back to Calculators
        </Link>
      </div>
    </div>
  );
}
