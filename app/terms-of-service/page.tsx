import type { Metadata } from "next";

const BASE_URL = "https://yourwebsite.com";

export const metadata: Metadata = {
  title: "Terms of Service - Prince Rajput Fitness",
  description: "Read our terms of service to understand the rules and guidelines for using our fitness training and nutrition services.",
  keywords: ["terms of service", "terms and conditions", "fitness terms", "service agreement"],
  alternates: {
    canonical: `${BASE_URL}/terms-of-service`,
  },
  openGraph: {
    title: "Terms of Service - Prince Rajput Fitness",
    description: "Read our terms of service to understand the rules and guidelines for using our fitness training and nutrition services.",
    url: `${BASE_URL}/terms-of-service`,
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600 mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These terms govern your use of Prince Rajput Fitness services and website.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  By accessing and using Prince Rajput Fitness services, you accept and agree to be bound by
                  the terms and provision of this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Prince Rajput Fitness provides personalized fitness training, nutrition counseling,
                  and wellness services including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>One-on-one personal training sessions</li>
                  <li>Online coaching and consultation</li>
                  <li>Customized nutrition plans and meal planning</li>
                  <li>Fitness assessments and progress tracking</li>
                  <li>Educational content and resources</li>
                  <li>Free fitness calculators and tools</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <div className="space-y-4 text-gray-700">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information about your health and fitness goals</li>
                  <li>Inform us of any medical conditions, injuries, or medications</li>
                  <li>Follow the provided exercise and nutrition recommendations responsibly</li>
                  <li>Consult with a physician before starting any new fitness or nutrition program</li>
                  <li>Use our services for personal, non-commercial purposes only</li>
                  <li>Respect our intellectual property and proprietary information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Medical Disclaimer</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="font-semibold text-yellow-800 mb-2">Important Medical Notice</p>
                  <p>
                    The information and services provided by Prince Rajput Fitness are not intended to
                    diagnose, treat, cure, or prevent any medical condition. Always consult with your
                    physician or qualified healthcare provider before beginning any fitness or nutrition program.
                  </p>
                </div>
                <p>
                  Prince Rajput is not a licensed medical doctor. The services provided are for educational
                  and informational purposes only. Results may vary based on individual circumstances.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment and Refunds</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Payment terms for our services will be clearly outlined in your service agreement.
                  All fees are non-refundable except as expressly stated in our refund policy.
                </p>
                <p>
                  For coaching packages and training programs, payments are due according to the
                  agreed schedule. Late payments may result in suspension of services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  All content, features, and functionality on our website and in our services,
                  including but not limited to text, graphics, logos, and software, are owned by
                  Prince Rajput Fitness and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Prince Rajput Fitness shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including without limitation, loss of profits,
                  data, use, goodwill, or other intangible losses.
                </p>
                <p>
                  Our total liability shall not exceed the amount paid for the specific service in question.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Either party may terminate the service agreement at any time. Upon termination,
                  you remain responsible for all fees incurred up to the termination date.
                </p>
                <p>
                  Prince Rajput Fitness reserves the right to terminate services immediately if
                  you violate these terms or engage in harmful behavior.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also
                  governs your use of our services, to understand our practices.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  These terms shall be governed by and construed in accordance with the laws of India,
                  without regard to its conflict of law provisions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective
                  immediately upon posting on our website. Your continued use of our services
                  constitutes acceptance of the modified terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> legal@princrajputfitness.com</p>
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