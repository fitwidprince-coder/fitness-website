"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { CalorieCalculator } from "@/app/components/tools/CalorieCalculator";
import { BMICalculator } from "@/app/components/tools/BMICalculator";
import { MacroCalculator } from "@/app/components/tools/MacroCalculator";
import { TDEECalculator } from "@/app/components/tools/TDEECalculator";
import { BMRCalculator } from "@/app/components/tools/BMRCalculator";
import { BodyFatCalculator } from "@/app/components/tools/BodyFatCalculator";
import { WaterIntakeCalculator } from "@/app/components/tools/WaterIntakeCalculator";
import { MealPlanner } from "@/app/components/tools/MealPlanner";

export function ToolsView() {
  const [activeTab, setActiveTab] = useState('calorie');

  // Get URL fragment for direct calculator access
  const getDefaultTab = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['calorie', 'bmi', 'macro', 'tdee', 'bmr', 'bodyfat', 'water', 'meal'];
      return validTabs.includes(hash) ? hash : 'calorie';
    }
    return 'calorie';
  };

  useEffect(() => {
    // Set initial tab from URL hash
    const initialTab = getDefaultTab();
    setActiveTab(initialTab);

    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['calorie', 'bmi', 'macro', 'tdee', 'bmr', 'bodyfat', 'water', 'meal'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-600 mb-4">
            Free Tools
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fitness & Nutrition Calculators
          </h1>
          <p className="text-xl text-gray-600">
            Use our free calculators to get personalized insights into your fitness
            and nutrition needs. All calculations are based on scientific formulas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 h-auto p-2 bg-white rounded-2xl shadow-sm">
              <TabsTrigger value="calorie" className="cursor-pointer data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                Calorie
              </TabsTrigger>
              <TabsTrigger value="bmi" className="cursor-pointer data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                BMI
              </TabsTrigger>
              <TabsTrigger value="macro" className="cursor-pointer data-[state=active]:bg-green-500 data-[state=active]:text-white">
                Macros
              </TabsTrigger>
              <TabsTrigger value="tdee" className="cursor-pointer data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                TDEE
              </TabsTrigger>
              <TabsTrigger value="bmr" className="cursor-pointer data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                BMR
              </TabsTrigger>
              <TabsTrigger value="bodyfat" className="cursor-pointer data-[state=active]:bg-red-500 data-[state=active]:text-white">
                Body Fat
              </TabsTrigger>
              <TabsTrigger value="water" className="cursor-pointer data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
                Water
              </TabsTrigger>
              <TabsTrigger value="meal" className="cursor-pointer data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
                Meal Plan
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value="calorie">
                <CalorieCalculator />
              </TabsContent>
              <TabsContent value="bmi">
                <BMICalculator />
              </TabsContent>
              <TabsContent value="macro">
                <MacroCalculator />
              </TabsContent>
              <TabsContent value="tdee">
                <TDEECalculator />
              </TabsContent>
              <TabsContent value="bmr">
                <BMRCalculator />
              </TabsContent>
              <TabsContent value="bodyfat">
                <BodyFatCalculator />
              </TabsContent>
              <TabsContent value="water">
                <WaterIntakeCalculator />
              </TabsContent>
              <TabsContent value="meal">
                <MealPlanner />
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-6">
            <p className="text-sm text-yellow-900">
              <strong>Disclaimer:</strong> These calculators provide estimates based on standard
              formulas. Individual results may vary. For personalized guidance tailored to your
              specific needs and goals, consult with Prince Rajput for a custom fitness and
              nutrition plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}