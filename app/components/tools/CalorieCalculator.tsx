"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Button } from '@/app/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Calculator, ChefHat, Apple, Beef } from 'lucide-react';

export function CalorieCalculator() {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activity: '1.2',
    goal: 'maintain',
  });
  const [result, setResult] = useState<number | null>(null);
  const [surplusDeficit, setSurplusDeficit] = useState<{amount: number, type: string, explanation: string} | null>(null);
  const [foodRecommendations, setFoodRecommendations] = useState<string[]>([]);
  const [showDietPlanQuestion, setShowDietPlanQuestion] = useState(false);
  const [dietPlanType, setDietPlanType] = useState<string>('');
  const [dietType, setDietType] = useState<string>('');
  const [dietPlan, setDietPlan] = useState<any>(null);

  const generateDietPlan = () => {
    if (!result || !dietPlanType || !dietType) return;

    const isVeg = dietType === 'veg';
    const targetCalories = result;
    const targetProtein = formData.goal === 'lose' ? Math.round(targetCalories * 0.40 / 4) :
                         formData.goal === 'gain' ? Math.round(targetCalories * 0.30 / 4) :
                         Math.round(targetCalories * 0.30 / 4);
    const targetCarbs = formData.goal === 'lose' ? Math.round(targetCalories * 0.30 / 4) :
                       formData.goal === 'gain' ? Math.round(targetCalories * 0.50 / 4) :
                       Math.round(targetCalories * 0.40 / 4);
    const targetFat = formData.goal === 'lose' ? Math.round(targetCalories * 0.30 / 9) :
                     formData.goal === 'gain' ? Math.round(targetCalories * 0.20 / 9) :
                     Math.round(targetCalories * 0.30 / 9);

    const vegMeals = {
      breakfast: [
        { name: 'Oats with fruits and nuts', calories: Math.round(targetCalories * 0.25), protein: Math.round(targetProtein * 0.25), carbs: Math.round(targetCarbs * 0.3), fat: Math.round(targetFat * 0.2) },
        { name: 'Vegetable sandwich with avocado', calories: Math.round(targetCalories * 0.25), protein: Math.round(targetProtein * 0.25), carbs: Math.round(targetCarbs * 0.3), fat: Math.round(targetFat * 0.2) },
        { name: 'Greek yogurt with berries', calories: Math.round(targetCalories * 0.25), protein: Math.round(targetProtein * 0.25), carbs: Math.round(targetCarbs * 0.3), fat: Math.round(targetFat * 0.2) }
      ],
      lunch: [
        { name: 'Quinoa salad with chickpeas', calories: Math.round(targetCalories * 0.3), protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3) },
        { name: 'Brown rice with mixed vegetables', calories: Math.round(targetCalories * 0.3), protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3) },
        { name: 'Lentil soup with whole grain bread', calories: Math.round(targetCalories * 0.3), protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3) }
      ],
      dinner: [
        { name: 'Tofu stir-fry with vegetables', calories: Math.round(targetCalories * 0.3), protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3) },
        { name: 'Vegetable curry with brown rice', calories: Math.round(targetCalories * 0.3), protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3) },
        { name: 'Paneer with mixed vegetables', calories: Math.round(targetCalories * 0.3), protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3) }
      ],
      snacks: [
        { name: 'Apple with almond butter', calories: Math.round(targetCalories * 0.15), protein: Math.round(targetProtein * 0.05), carbs: Math.round(targetCarbs * 0.05), fat: Math.round(targetFat * 0.2) },
        { name: 'Greek yogurt with nuts', calories: Math.round(targetCalories * 0.15), protein: Math.round(targetProtein * 0.05), carbs: Math.round(targetCarbs * 0.05), fat: Math.round(targetFat * 0.2) }
      ]
    };

    const nonVegMeals = {
      breakfast: [
        { name: 'Egg white omelette with vegetables', calories: Math.round(targetCalories * 0.25), protein: Math.round(targetProtein * 0.25), carbs: Math.round(targetCarbs * 0.3), fat: Math.round(targetFat * 0.2) },
        { name: 'Chicken sandwich with whole grain bread', calories: Math.round(targetCalories * 0.25), protein: Math.round(targetProtein * 0.25), carbs: Math.round(targetCarbs * 0.3), fat: Math.round(targetFat * 0.2) },
        { name: 'Greek yogurt with boiled eggs', calories: Math.round(targetCalories * 0.25), protein: Math.round(targetProtein * 0.25), carbs: Math.round(targetCarbs * 0.3), fat: Math.round(targetFat * 0.2) }
      ],
      lunch: [
        { name: 'Grilled chicken with quinoa', calories: Math.round(targetCalories * 0.3), protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3) },
        { name: 'Fish with brown rice and vegetables', calories: Math.round(targetCalories * 0.3), protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3) },
        { name: 'Turkey breast with sweet potato', calories: Math.round(targetCalories * 0.3), protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3) }
      ],
      dinner: [
        { name: 'Grilled salmon with vegetables', calories: Math.round(targetCalories * 0.3), protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3) },
        { name: 'Chicken curry with brown rice', calories: Math.round(targetCalories * 0.3), protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3) },
        { name: 'Tuna salad with whole grains', calories: Math.round(targetCalories * 0.3), protein: Math.round(targetProtein * 0.35), carbs: Math.round(targetCarbs * 0.35), fat: Math.round(targetFat * 0.3) }
      ],
      snacks: [
        { name: 'Protein shake with banana', calories: Math.round(targetCalories * 0.15), protein: Math.round(targetProtein * 0.05), carbs: Math.round(targetCarbs * 0.05), fat: Math.round(targetFat * 0.2) },
        { name: 'Cottage cheese with fruit', calories: Math.round(targetCalories * 0.15), protein: Math.round(targetProtein * 0.05), carbs: Math.round(targetCarbs * 0.05), fat: Math.round(targetFat * 0.2) }
      ]
    };

    const mealData = isVeg ? vegMeals : nonVegMeals;

    const plan = {
      type: dietPlanType,
      dietType: dietType,
      totalCalories: targetCalories,
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

  const calculateCalories = () => {
    const age = parseInt(formData.age);
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const activity = parseFloat(formData.activity);

    // Validate inputs
    if (isNaN(age) || isNaN(weight) || isNaN(height) || isNaN(activity) ||
        age <= 0 || weight <= 0 || height <= 0 || activity <= 0) {
      setResult(null);
      setSurplusDeficit(null);
      setFoodRecommendations([]);
      setShowDietPlanQuestion(false);
      setDietPlan(null);
      return;
    }

    // Mifflin-St Jeor Equation
    let bmr;
    if (formData.gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const baseTDEE = bmr * activity;
    let targetCalories = baseTDEE;

    // Calculate surplus/deficit and recommendations
    let surplusDeficitInfo = null;
    let recommendations = [];

    if (formData.goal === 'lose') {
      targetCalories = baseTDEE * 0.85; // 15% deficit
      const deficit = baseTDEE - targetCalories;
      surplusDeficitInfo = {
        amount: Math.round(deficit),
        type: 'deficit',
        explanation: `Create a ${Math.round(deficit)} calorie deficit per day for healthy weight loss`
      };
      recommendations = [
        '🍗 Lean proteins (chicken breast, turkey, fish)',
        '🥬 Leafy greens (spinach, kale, broccoli)',
        '🍎 Whole fruits (apples, berries, oranges)',
        '🥖 Whole grains (oats, brown rice, quinoa)',
        '🥜 Nuts and seeds (almonds, chia seeds, flaxseeds)',
        '🥛 Low-fat dairy (Greek yogurt, cottage cheese)',
        '🥑 Healthy fats (avocado, olive oil, fatty fish)'
      ];
    } else if (formData.goal === 'gain') {
      targetCalories = baseTDEE * 1.10; // 10% surplus
      const surplus = targetCalories - baseTDEE;
      surplusDeficitInfo = {
        amount: Math.round(surplus),
        type: 'surplus',
        explanation: `Create a ${Math.round(surplus)} calorie surplus per day for healthy weight gain`
      };
      recommendations = [
        '🥩 Lean meats (chicken, turkey, lean beef)',
        '🥔 Complex carbs (sweet potatoes, brown rice, oats)',
        '🥚 Eggs and egg whites',
        '🥛 Full-fat dairy (milk, cheese, yogurt)',
        '🥜 Nuts and nut butters',
        '🥑 Healthy fats (avocado, olive oil, coconut)',
        '🍌 Bananas and tropical fruits'
      ];
    } else {
      surplusDeficitInfo = {
        amount: 0,
        type: 'maintenance',
        explanation: 'Maintain your current weight by eating at maintenance calories'
      };
      recommendations = [
        '🍗 Balanced proteins (chicken, fish, tofu)',
        '🥬 Mixed vegetables (broccoli, carrots, peppers)',
        '🍎 Seasonal fruits (apples, berries, citrus)',
        '🥖 Whole grains (brown rice, quinoa, whole wheat)',
        '🥜 Mixed nuts and seeds',
        '🥛 Dairy or alternatives (yogurt, cheese, plant milk)',
        '🥑 Healthy fats in moderation'
      ];
    }

    setResult(Math.round(targetCalories));
    setSurplusDeficit(surplusDeficitInfo);
    setFoodRecommendations(recommendations);
    setShowDietPlanQuestion(true);
    setDietPlanType('');
    setDietType('');
    setDietPlan(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Calorie Calculator
        </CardTitle>
        <CardDescription>
          Calculate your daily calorie needs based on your goals
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              placeholder="25"
            />
          </div>

          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              placeholder="70"
            />
          </div>

          <div>
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              placeholder="175"
            />
          </div>

          <div>
            <Label htmlFor="activity">Activity Level</Label>
            <Select value={formData.activity} onValueChange={(value) => setFormData({ ...formData, activity: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1.2">Sedentary (little/no exercise)</SelectItem>
                <SelectItem value="1.375">Lightly active (1-3 days/week)</SelectItem>
                <SelectItem value="1.55">Moderately active (3-5 days/week)</SelectItem>
                <SelectItem value="1.725">Very active (6-7 days/week)</SelectItem>
                <SelectItem value="1.9">Extra active (athlete)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="goal">Goal</Label>
            <Select value={formData.goal} onValueChange={(value) => setFormData({ ...formData, goal: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lose">Lose Weight</SelectItem>
                <SelectItem value="maintain">Maintain Weight</SelectItem>
                <SelectItem value="gain">Gain Weight</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={calculateCalories}
          className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 cursor-pointer"
        >
          Calculate
        </Button>

        {result !== null && (
          <div className="mt-6 space-y-6">
            {/* Main Result */}
            <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Your Daily Calorie Target</p>
            <p className="text-4xl font-bold text-orange-600">{result} cal</p>
              {surplusDeficit && (
                <div className="mt-4 p-3 bg-white/50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">{surplusDeficit.explanation}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    {surplusDeficit.type === 'deficit' && 'Aim for 0.5-1kg weight loss per week'}
                    {surplusDeficit.type === 'surplus' && 'Aim for 0.25-0.5kg weight gain per week'}
                    {surplusDeficit.type === 'maintenance' && 'This maintains your current weight'}
                  </p>
                </div>
              )}
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
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">Diet Plan Type:</Label>
                    <RadioGroup value={dietPlanType} onValueChange={setDietPlanType} className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="calories" id="calories" />
                        <Label htmlFor="calories" className="text-sm">Based on Calories</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="macros" id="macros" />
                        <Label htmlFor="macros" className="text-sm">Based on Macros</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">Diet Type:</Label>
                    <RadioGroup value={dietType} onValueChange={setDietType} className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="veg" id="veg" />
                        <Label htmlFor="veg" className="text-sm flex items-center gap-1">
                          <Apple className="h-4 w-4" />
                          Vegetarian
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nonveg" id="nonveg" />
                        <Label htmlFor="nonveg" className="text-sm flex items-center gap-1">
                          <Beef className="h-4 w-4" />
                          Non-Vegetarian
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    onClick={generateDietPlan}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 cursor-pointer"
                    disabled={!dietPlanType || !dietType}
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
                  Your Personalized Diet Plan
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
                    💡 <strong>Tip:</strong> Adjust portions based on your hunger levels. Track your progress weekly and consult a nutritionist for personalized adjustments.
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
