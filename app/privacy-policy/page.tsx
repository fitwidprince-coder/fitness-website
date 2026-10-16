import type { Metadata } from "next";

const BASE_URL = "https://yourwebsite.com";

export const metadata: Metadata = {
  title: "Privacy Policy - Prince Rajput Fitness",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
  keywords: ["privacy policy", "data protection", "personal information", "fitness privacy"],
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy - Prince Rajput Fitness",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
    url: `${BASE_URL}/privacy-policy`,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600 mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create an account or use our services</li>
                  <li>Contact us for consultation or support</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Use our fitness calculators and tools</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p>
                  This information may include your name, email address, phone number, fitness goals,
                  health information, and other details you choose to provide.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide personalized fitness and nutrition guidance</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Send you newsletters and marketing communications (with your consent)</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties,
                  except in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With trusted service providers who assist our operations (under strict confidentiality agreements)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure.
                  While we strive to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We use cookies and similar technologies to enhance your experience on our website,
                  analyze usage patterns, and provide personalized content.
                </p>
                <p>
                  You can control cookie settings through your browser preferences. However,
                  disabling certain cookies may affect website functionality.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our website may contain links to third-party websites or integrate with third-party services.
                  We are not responsible for the privacy practices of these external sites or services.
                </p>
                <p>
                  We encourage you to review the privacy policies of any third-party services you use.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our services are not intended for children under 18 years of age. We do not knowingly
                  collect personal information from children under 18. If we become aware that we have
                  collected personal information from a child under 18, we will take steps to delete such information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes
                  by posting the new policy on this page and updating the "Last updated" date.
                </p>
                <p>
                  Your continued use of our services after any changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@princrajputfitness.com</p>
                  <p><strong>Phone:</strong> +91 9871890607</p>
                  <p><strong>Address:</strong> New Delhi, 110059, India</p>
                </div>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}