"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Button } from '@/app/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Utensils, ChefHat, Apple, Beef } from 'lucide-react';

export function MacroCalculator() {
  const [calories, setCalories] = useState('');
  const [goal, setGoal] = useState('balanced');
  const [macros, setMacros] = useState<{protein: number; carbs: number; fat: number} | null>(null);
  const [foodRecommendations, setFoodRecommendations] = useState<string[]>([]);
  const [showDietPlanQuestion, setShowDietPlanQuestion] = useState(false);
  const [dietType, setDietType] = useState<string>('');
  const [dietPlan, setDietPlan] = useState<any>(null);

  const calculateMacros = () => {
    const totalCalories = parseFloat(calories);

    // Validate input
    if (isNaN(totalCalories) || totalCalories <= 0) {
      setMacros(null);
      setFoodRecommendations([]);
      setShowDietPlanQuestion(false);
      setDietPlan(null);
      return;
    }

    let protein, carbs, fat, recommendations = [];

    if (goal === 'muscle') {
      protein = totalCalories * 0.30 / 4; // 30% protein
      carbs = totalCalories * 0.50 / 4;   // 50% carbs
      fat = totalCalories * 0.20 / 9;     // 20% fat
      recommendations = [
        '🍗 High-protein foods (chicken breast, turkey, eggs)',
        '🥔 Complex carbs (sweet potatoes, oats, brown rice)',
        '🥬 Leafy greens (spinach, kale, broccoli)',
        '🥜 Nuts and seeds (almonds, pumpkin seeds)',
        '🥛 Dairy (Greek yogurt, cottage cheese, milk)',
        '🥑 Healthy fats (avocado, olive oil, fatty fish)'
      ];
    } else if (goal === 'fat-loss') {
      protein = totalCalories * 0.40 / 4; // 40% protein
      carbs = totalCalories * 0.30 / 4;   // 30% carbs
      fat = totalCalories * 0.30 / 9;     // 30% fat
      recommendations = [
        '🍗 Lean proteins (chicken breast, turkey, fish, tofu)',
        '🥬 Non-starchy vegetables (broccoli, spinach, zucchini)',
        '🥖 Whole grains (quinoa, barley, brown rice)',
        '🥚 Eggs and egg whites',
        '🥛 Low-fat dairy (Greek yogurt, skim milk)',
        '🥑 Moderate healthy fats (olive oil, avocado)'
      ];
    } else { // balanced
      protein = totalCalories * 0.30 / 4; // 30% protein
      carbs = totalCalories * 0.40 / 4;   // 40% carbs
      fat = totalCalories * 0.30 / 9;     // 30% fat
      recommendations = [
        '🍗 Balanced proteins (chicken, fish, beans, tofu)',
        '🥔 Mixed carbs (sweet potatoes, whole grains, fruits)',
        '🥬 Variety of vegetables (broccoli, carrots, peppers)',
        '🥜 Nuts and seeds in moderation',
        '🥛 Dairy or alternatives',
        '🥑 Healthy fats (olive oil, nuts, avocado)'
      ];
    }

    setMacros({
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat),
    });
    setFoodRecommendations(recommendations);
    setShowDietPlanQuestion(true);
    setDietType('');
    setDietPlan(null);
  };

  const generateMacroDietPlan = () => {
    if (!macros || !dietType) return;

    const isVeg = dietType === 'veg';
    const targetProtein = macros.protein;
    const targetCarbs = macros.carbs;
    const targetFat = macros.fat;
    const totalCalories = targetProtein * 4 + targetCarbs * 4 + targetFat * 9;

    const vegMeals = {
      breakfast: [
        { name: 'Oats with nuts and fruits', protein: Math.round(targetProtein * 0.25), carbs: Math.round(targetCarbs * 0.3), fat: Math.round(targetFat * 0.2), calories: Math.round(totalCalories * 0.25) },
        { name: 'Greek yogurt parfait', protein: Math.round(targetProtein * 0.25), carbs: Math.round(targetCarbs * 0.3), fat: Math.round(targetFat * 0.2), calories: Math.round(totalCalories * 0.25) },
        { name: 'Vegetable sandwich', protein: Math.round(targetProtein * 0.25), carbs: Math.round(targetCarbs * 0.3), fat: Math.round(targetFat * 0.2), calories: Math.round(totalCalories * 0.25) }
      ],
      lunch: [
        { name: 'Chickpea salad with quinoa', protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3), calories: Math.round(totalCalories * 0.3) },
        { name: 'Lentil soup with brown rice', protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3), calories: Math.round(totalCalories * 0.3) },
        { name: 'Tofu stir-fry with vegetables', protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3), calories: Math.round(totalCalories * 0.3) }
      ],
      dinner: [
        { name: 'Paneer curry with quinoa', protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3), calories: Math.round(totalCalories * 0.3) },
        { name: 'Vegetable biryani', protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3), calories: Math.round(totalCalories * 0.3) },
        { name: 'Mixed vegetable curry', protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3), calories: Math.round(totalCalories * 0.3) }
      ],
      snacks: [
        { name: 'Protein shake with fruits', protein: Math.round(targetProtein * 0.05), carbs: Math.round(targetCarbs * 0.05), fat: Math.round(targetFat * 0.2), calories: Math.round(totalCalories * 0.15) },
        { name: 'Nuts and seeds mix', protein: Math.round(targetProtein * 0.05), carbs: Math.round(targetCarbs * 0.05), fat: Math.round(targetFat * 0.2), calories: Math.round(totalCalories * 0.15) }
      ]
    };

    const nonVegMeals = {
      breakfast: [
        { name: 'Egg white omelette with veggies', protein: Math.round(targetProtein * 0.25), carbs: Math.round(targetCarbs * 0.3), fat: Math.round(targetFat * 0.2), calories: Math.round(totalCalories * 0.25) },
        { name: 'Chicken breast with oatmeal', protein: Math.round(targetProtein * 0.25), carbs: Math.round(targetCarbs * 0.3), fat: Math.round(targetFat * 0.2), calories: Math.round(totalCalories * 0.25) },
        { name: 'Greek yogurt with boiled eggs', protein: Math.round(targetProtein * 0.25), carbs: Math.round(targetCarbs * 0.3), fat: Math.round(targetFat * 0.2), calories: Math.round(totalCalories * 0.25) }
      ],
      lunch: [
        { name: 'Grilled chicken salad', protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3), calories: Math.round(totalCalories * 0.3) },
        { name: 'Fish with brown rice', protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3), calories: Math.round(totalCalories * 0.3) },
        { name: 'Turkey wrap with vegetables', protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3), calories: Math.round(totalCalories * 0.3) }
      ],
      dinner: [
        { name: 'Salmon with sweet potato', protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3), calories: Math.round(totalCalories * 0.3) },
        { name: 'Chicken curry with quinoa', protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3), calories: Math.round(totalCalories * 0.3) },
        { name: 'Grilled tuna steak', protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3), calories: Math.round(totalCalories * 0.3) }
      ],
      snacks: [
        { name: 'Protein shake with banana', protein: Math.round(targetProtein * 0.05), carbs: Math.round(targetCarbs * 0.05), fat: Math.round(targetFat * 0.2), calories: Math.round(totalCalories * 0.15) },
        { name: 'Cottage cheese with fruit', protein: Math.round(targetProtein * 0.05), carbs: Math.round(targetCarbs * 0.05), fat: Math.round(targetFat * 0.2), calories: Math.round(totalCalories * 0.15) }
      ]
    };

    const mealData = isVeg ? vegMeals : nonVegMeals;

    const plan = {
      dietType: dietType,
      totalCalories: Math.round(totalCalories),
      totalProtein: targetProtein,
      totalCarbs: targetCarbs,
      totalFat: targetFat,
      meals: {
        breakfast: mealData.breakfast[Math.floor(Math.random() * mealData.breakfast.length)],
        lunch: mealData.lunch[Math.floor(Math.random() * mealData.lunch.length)],
        dinner: mealData.dinner[Math.floor(Math.random() * mealData.dinner.length)],
        snacks: mealData.snacks[Math.floor(Math.random() * mealData.snacks.length)]
      }
    };

    setDietPlan(plan);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Utensils className="h-5 w-5" />
          Macro Calculator
        </CardTitle>
        <CardDescription>
          Calculate your protein, carbs, and fat targets
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div>
            <Label htmlFor="macro-calories">Daily Calories</Label>
            <Input
              id="macro-calories"
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="2000"
            />
          </div>

          <div>
            <Label htmlFor="macro-goal">Goal</Label>
            <Select value={goal} onValueChange={setGoal}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="muscle">Muscle Building</SelectItem>
                <SelectItem value="balanced">Balanced/Maintenance</SelectItem>
                <SelectItem value="fat-loss">Fat Loss</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={calculateMacros}
          className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 cursor-pointer"
        >
          Calculate Macros
        </Button>

        {macros && (
          <div className="mt-6 space-y-6">
            {/* Macro Results */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Protein</p>
                <p className="text-3xl font-bold text-blue-600">{macros.protein}g</p>
              </div>
              <div className="rounded-xl bg-green-50 p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Carbs</p>
                <p className="text-3xl font-bold text-green-600">{macros.carbs}g</p>
              </div>
              <div className="rounded-xl bg-orange-50 p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Fat</p>
                <p className="text-3xl font-bold text-orange-600">{macros.fat}g</p>
              </div>
            </div>

            {/* Food Recommendations */}
            {foodRecommendations.length > 0 && (
              <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-6">
                <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Apple className="h-5 w-5" />
                  Recommended Foods for Your Goal
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {foodRecommendations.map((food, index) => (
                    <div key={index} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {food}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Diet Plan Question */}
            {showDietPlanQuestion && (
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <ChefHat className="h-5 w-5" />
                  Would you like a personalized diet plan?
                </h4>

                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">Diet Type:</Label>
                    <RadioGroup value={dietType} onValueChange={setDietType} className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="veg" id="macro-veg" />
                        <Label htmlFor="macro-veg" className="text-sm flex items-center gap-1">
                          <Apple className="h-4 w-4" />
                          Vegetarian
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nonveg" id="macro-nonveg" />
                        <Label htmlFor="macro-nonveg" className="text-sm flex items-center gap-1">
                          <Beef className="h-4 w-4" />
                          Non-Vegetarian
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    onClick={generateMacroDietPlan}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 cursor-pointer"
                    disabled={!dietType}
                  >
                    Generate My Diet Plan
                  </Button>
                </div>
              </div>
            )}

            {/* Generated Diet Plan */}
            {dietPlan && (
              <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-6">
                <h4 className="font-semibold text-purple-800 mb-4 flex items-center gap-2">
                  <ChefHat className="h-5 w-5" />
                  Your Personalized Macro-Based Diet Plan
                </h4>

                <div className="bg-white/50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                      <p className="font-medium text-gray-700">Total Calories</p>
                      <p className="text-lg font-bold text-purple-600">{dietPlan.totalCalories}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-700">Protein</p>
                      <p className="text-lg font-bold text-blue-600">{dietPlan.totalProtein}g</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-700">Carbs</p>
                      <p className="text-lg font-bold text-green-600">{dietPlan.totalCarbs}g</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-700">Fat</p>
                      <p className="text-lg font-bold text-orange-600">{dietPlan.totalFat}g</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {Object.entries(dietPlan.meals).map(([mealType, meal]: [string, any]) => (
                    <div key={mealType} className="bg-white/50 rounded-lg p-4">
                      <h5 className="font-medium text-gray-800 capitalize mb-2">{mealType}</h5>
                      <p className="text-sm text-gray-700 mb-2">{meal.name}</p>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <span className="font-medium">{meal.calories} cal</span>
                        <span className="text-blue-600">{meal.protein}g P</span>
                        <span className="text-green-600">{meal.carbs}g C</span>
                        <span className="text-orange-600">{meal.fat}g F</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-xs text-yellow-800">
                    💡 <strong>Tip:</strong> Track your macros daily using a food scale and app. Adjust portions as needed while staying within your macro targets.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
