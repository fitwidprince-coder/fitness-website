import { AlertTriangle, CheckCircle, Heart, Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

export function AlcoholSection() {
  const safetyTips = [
    'Limit consumption to 1-2 drinks maximum per occasion',
    'Never drink on an empty stomach - have protein and fats first',
    'Stay hydrated - drink water between alcoholic beverages',
    'Avoid mixing different types of alcohol',
    'Take liver support supplements (Milk Thistle, NAC)',
    'Schedule alcohol-free days throughout the week',
  ];

  const detoxStrategies = [
    {
      title: 'Hydration Protocol',
      description: 'Drink 3-4 liters of water daily. Add lemon, cucumber, or mint for enhanced detoxification.',
    },
    {
      title: 'Liver-Supporting Foods',
      description: 'Include cruciferous vegetables (broccoli, cauliflower), garlic, turmeric, green tea, and citrus fruits.',
    },
    {
      title: 'Quality Sleep',
      description: 'Aim for 7-9 hours of sleep. The liver performs most detoxification during deep sleep.',
    },
    {
      title: 'Exercise Regularly',
      description: 'Moderate exercise promotes blood circulation and helps eliminate toxins through sweat.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-red-50 via-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600 mb-4">
            Health Awareness
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alcohol, Smoking & Liver Health
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding the impact of alcohol and smoking on your fitness goals
            and learning how to protect your health.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto mb-12">
          {/* Prevention */}
          <div className="rounded-3xl border-2 border-red-200 bg-white p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold">Why Avoid or Limit?</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-900 mb-2">Impact on Fitness Goals:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    Disrupts protein synthesis and muscle recovery
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    Increases fat storage, especially around the midsection
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    Dehydrates the body and impairs performance
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    Disrupts sleep quality and hormone production
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-900 mb-2">Health Risks:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    Liver damage and fatty liver disease
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    Increased risk of heart disease
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    Weakened immune system
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    Nutritional deficiencies
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Safe Consumption */}
          <div className="rounded-3xl border-2 border-green-200 bg-white p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold">Safe Consumption Guidelines</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                If you choose to drink, follow these guidelines to minimize harm:
              </p>
              <div className="space-y-3">
                {safetyTips.map((tip, index) => (
                  <div key={index} className="flex gap-3">
                    <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Liver Detox */}
        <div className="max-w-4xl mx-auto rounded-3xl border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50 p-8 md:p-12">
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Liver Detox & Support</h3>
          </div>

          <p className="text-gray-700 mb-6 text-center">
            The liver is your body's primary detoxification organ. Here's how to support it:
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {detoxStrategies.map((strategy, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-orange-200 bg-white px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-semibold">{strategy.title}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {strategy.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 rounded-2xl bg-orange-100 p-6 text-center">
            <p className="font-semibold text-orange-900 mb-2">
              💊 Recommended Supplements for Liver Support
            </p>
            <p className="text-sm text-orange-800">
              Milk Thistle • N-Acetyl Cysteine (NAC) • Glutathione • Alpha-Lipoic Acid
            </p>
            <p className="text-xs text-orange-700 mt-2">
              *Consult with Prince Rajput for personalized supplement recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
