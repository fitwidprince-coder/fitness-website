"use client";

import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

import Image from 'next/image';
export function HeroSection() {
  const stats = [
    { icon: Users, label: '500+', description: 'Happy Clients' },
    { icon: Award, label: '12+', description: 'Years Experience' },
    { icon: TrendingUp, label: '95%', description: 'Success Rate' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm w-fit">
              <span className="font-semibold text-orange-600">✨ 12+ Years of Excellence</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Transform Your Body,
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {' '}Transform Your Life
              </span>
            </h1>

            <p className="text-lg text-gray-600 md:text-xl">
              Expert fitness training and personalized nutrition plans by Prince Rajput
              - Your trusted partner in achieving muscle building, fat loss, strength,
              and endurance goals. Specialized in back injury recovery and holistic wellness.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg px-8"
                onClick={() => {
                  const event = new CustomEvent('open-chat');
                  window.dispatchEvent(event);
                }}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                onClick={() => {
                  document
                    .getElementById("plans")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                View Plans
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <Icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="font-bold text-2xl">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

 <div className="relative">
  <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl relative">
  <img 
    src="/hero-section.png" 
    alt="Fitness training" 
    className="h-full w-full object-cover"
  />
    {/* Optional overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-600/10" />
  </div>
  {/* Floating cards remain the same */}

</div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -right-12 top-0 h-64 w-64 rounded-full bg-orange-200 opacity-20 blur-3xl" />
      <div className="absolute -left-12 bottom-0 h-64 w-64 rounded-full bg-red-200 opacity-20 blur-3xl" />
    </section>
  );
}
