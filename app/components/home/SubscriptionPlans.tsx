"use client";

import { Check, Crown, Sparkles, Star } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export function SubscriptionPlans() {
  const plans = [
    {
      name: 'Monthly',
      price: '$99',
      period: '/month',
      description: 'Perfect for getting started',
      icon: Star,
      popular: false,
      features: [
        'Personalized Training Plan',
        'Custom Nutrition Plan',
        'Weekly Check-ins',
        'Email Support',
        'Progress Tracking',
        'Supplement Guidance',
      ],
    },
    {
      name: 'Quarterly',
      price: '$249',
      period: '/3 months',
      description: 'Best value for serious transformation',
      icon: Crown,
      popular: true,
      savings: 'Save $48',
      features: [
        'Everything in Monthly',
        'Bi-weekly Video Calls',
        'Priority Support',
        'Meal Planning Templates',
        'Exercise Library Access',
        'Body Composition Analysis',
        'Lifestyle Coaching',
        'Recipe Database',
      ],
    },
    {
      name: 'Yearly',
      price: '$899',
      period: '/year',
      description: 'Ultimate commitment to your goals',
      icon: Sparkles,
      popular: false,
      savings: 'Save $289',
      features: [
        'Everything in Quarterly',
        'Weekly Video Calls',
        '24/7 WhatsApp Support',
        'Custom Supplement Plan',
        'Injury Prevention Program',
        'Advanced Training Techniques',
        'Quarterly Goal Reviews',
        'Lifetime Recipe Access',
        'Group Community Access',
      ],
    },
  ];

  return (
    <section id="plans" className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600 mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Transformation Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select the plan that best fits your fitness journey. All plans include
            personalized guidance and ongoing support.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-3xl border-2 bg-white p-8 shadow-lg transition-all hover:shadow-xl ${
                  plan.popular
                    ? 'border-orange-500 scale-105'
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 mb-1">{plan.period}</span>
                  </div>
                  
                  {plan.savings && (
                    <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                      {plan.savings}
                    </div>
                  )}
                </div>

                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700'
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => {
                    const event = new CustomEvent('open-chat');
                    window.dispatchEvent(event);
                  }}
                >
                  Get Started
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you? Let's talk!
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const event = new CustomEvent('open-chat');
              window.dispatchEvent(event);
            }}
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
