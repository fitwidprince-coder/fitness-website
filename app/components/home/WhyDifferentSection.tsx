import { Brain, ClipboardCheck, Heart, Pill, Shield, Sparkles } from 'lucide-react';

export function WhyDifferentSection() {
  const differentiators = [
    {
      icon: Brain,
      title: 'Science-Based Nutrition Plans',
      description: 'Our nutrition plans are backed by the latest scientific research, customized to your body type, metabolism, and specific goals - not generic meal plans.',
    },
    {
      icon: ClipboardCheck,
      title: 'Personalized Training Programs',
      description: 'Every training plan is uniquely designed for you, considering your injury history, current fitness level, and specific objectives. No cookie-cutter workouts.',
    },
    {
      icon: Pill,
      title: 'Expert Supplement Guidance',
      description: 'Honest, evidence-based supplement recommendations tailored to your needs. We focus on what actually works, not what\'s trendy or profitable.',
    },
    {
      icon: Heart,
      title: 'Liver & Kidney Support',
      description: 'Specialized protocols to support liver detoxification and kidney health, especially important for those who consume alcohol or use supplements.',
    },
    {
      icon: Shield,
      title: 'Cholesterol Management',
      description: 'Comprehensive approach to managing cholesterol through diet, exercise, and lifestyle modifications for optimal cardiovascular health.',
    },
    {
      icon: Sparkles,
      title: 'Holistic Wellness Approach',
      description: 'We address not just fitness and nutrition, but also sleep, stress management, and lifestyle factors for complete transformation.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600 mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our approach goes beyond standard fitness training. We provide comprehensive,
            personalized solutions that address your unique needs and goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-orange-50/30 p-6 transition-all hover:border-orange-300 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Our Commitment to You
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
            <div>
              <p className="font-semibold mb-2">✓ 100% Personalized Approach</p>
              <p className="text-white/90 text-sm">No two clients get the same plan</p>
            </div>
            <div>
              <p className="font-semibold mb-2">✓ Evidence-Based Methods</p>
              <p className="text-white/90 text-sm">Scientific principles, proven results</p>
            </div>
            <div>
              <p className="font-semibold mb-2">✓ Ongoing Support</p>
              <p className="text-white/90 text-sm">We're with you every step of the way</p>
            </div>
            <div>
              <p className="font-semibold mb-2">✓ Sustainable Results</p>
              <p className="text-white/90 text-sm">Long-term health, not quick fixes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
