import React from 'react'
import { recipesData } from '@/lib/recepies-data';
import { ChefHat, TrendingDown, TrendingUp } from "lucide-react";
import { RecipeCard } from '../components/RecipeCard';
import { CTASection } from '../components/home/CTASection';

const page = () => {
    const fatLossRecipes = recipesData.filter((r) => r.category === "Fat Loss");
    const muscleBuildingRecipes = recipesData.filter(
      (r) => r.category === "Muscle Building"
    );
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-center gap-3">
              <ChefHat className="size-8 text-orange-600" />
              <h1 className="text-center">
                20 Fitness Recipes for Muscle Building & Fat Loss
              </h1>
            </div>
            <p className="text-center text-gray-600 mt-2">
              Complete with macros, timing, and step-by-step preparation
            </p>
          </div>
        </header>
  
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Fat Loss Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <TrendingDown className="size-8 text-orange-600" />
              <h2>🥗 Fat Loss Recipes</h2>
            </div>
            <p className="text-gray-600 mb-8">
              Low-calorie, high-protein recipes designed to help you burn fat
              while preserving muscle mass.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fatLossRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
  
          {/* Muscle Building Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="size-8 text-red-600" />
              <h2>🍗 Muscle Building Recipes</h2>
            </div>
            <p className="text-gray-600 mb-8">
              High-protein recipes with quality carbs to fuel your workouts and
              support muscle growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {muscleBuildingRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
  
          {/* Footer Note */}
          <div className="mt-16 p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl">
            <h3 className="mb-3 text-center">💪 Important Notes</h3>
            <ul className="space-y-2 text-gray-700 max-w-3xl mx-auto">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>
                  <strong>Timing matters:</strong> Eat protein-rich meals within
                  30-60 minutes post-workout for optimal recovery.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>
                  <strong>Macros are approximate:</strong> Adjust portion sizes
                  based on your body weight and fitness goals.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>
                  <strong>Stay hydrated:</strong> Drink 3-4 liters of water daily
                  for optimal performance and recovery.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>
                  <strong>Consistency is key:</strong> Results come from
                  consistent nutrition over time, not perfect meals.
                </span>
              </li>
            </ul>
          </div>
        </main>

        {/* Footer */}
        <CTASection />
      </div>
    );
}

export default page