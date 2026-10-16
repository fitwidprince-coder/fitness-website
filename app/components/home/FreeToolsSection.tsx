import { Calculator, Activity, Heart, Droplet, Scale, TrendingUp, Utensils, Flame } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export function FreeToolsSection() {
  const tools = [
    {
      icon: Flame,
      name: 'Calorie Calculator',
      description: 'Calculate your daily calorie needs based on age, weight, and activity level',
      color: 'from-orange-500 to-red-600',
      href: '/tools#calorie',
    },
    {
      icon: Scale,
      name: 'BMI Calculator',
      description: 'Determine your Body Mass Index and health category',
      color: 'from-blue-500 to-cyan-600',
      href: '/tools#bmi',
    },
    {
      icon: Utensils,
      name: 'Macro Calculator',
      description: 'Get personalized protein, carbs, and fat targets',
      color: 'from-green-500 to-emerald-600',
      href: '/tools#macro',
    },
    {
      icon: Activity,
      name: 'TDEE Calculator',
      description: 'Calculate your Total Daily Energy Expenditure',
      color: 'from-purple-500 to-pink-600',
      href: '/tools#tdee',
    },
    {
      icon: TrendingUp,
      name: 'BMR Calculator',
      description: 'Find your Basal Metabolic Rate',
      color: 'from-amber-500 to-orange-600',
      href: '/tools#bmr',
    },
    {
      icon: Heart,
      name: 'Body Fat Calculator',
      description: 'Estimate your body fat percentage',
      color: 'from-red-500 to-rose-600',
      href: '/tools#bodyfat',
    },
    {
      icon: Droplet,
      name: 'Water Intake Calculator',
      description: 'Calculate daily water needs based on your stats',
      color: 'from-cyan-500 to-blue-600',
      href: '/tools#water',
    },
    {
      icon: Calculator,
      name: 'Meal Planner',
      description: 'Generate meal plans based on macro targets',
      color: 'from-indigo-500 to-purple-600',
      href: '/tools#meal',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-600 mb-4">
            Free Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fitness & Nutrition Calculators
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Use our free tools to kickstart your fitness journey. Get instant calculations
            and personalized recommendations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-12">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Link
                key={index}
                href={tool.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg cursor-pointer block"
              >
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-white transition-transform group-hover:scale-110`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                <div className="text-xs text-orange-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Try Calculator →
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          >
            <Link href="/tools">Try All Free Tools</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
