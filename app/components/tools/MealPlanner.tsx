"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Calculator } from 'lucide-react';

export function MealPlanner() {
  const [macros, setMacros] = useState({
    protein: '',
    carbs: '',
    fat: '',
  });
  const [meals, setMeals] = useState<any>(null);

  const generatePlan = () => {
    const protein = parseInt(macros.protein);
    const carbs = parseInt(macros.carbs);
    const fat = parseInt(macros.fat);

    // Validate inputs
    if (isNaN(protein) || isNaN(carbs) || isNaN(fat) ||
        protein <= 0 || carbs <= 0 || fat <= 0) {
      setMeals(null);
      return;
    }

    // Simple 3-meal distribution
    setMeals({
      breakfast: {
        protein: Math.round(protein * 0.3),
        carbs: Math.round(carbs * 0.3),
        fat: Math.round(fat * 0.3),
      },
      lunch: {
        protein: Math.round(protein * 0.4),
        carbs: Math.round(carbs * 0.4),
        fat: Math.round(fat * 0.4),
      },
      dinner: {
        protein: Math.round(protein * 0.3),
        carbs: Math.round(carbs * 0.3),
        fat: Math.round(fat * 0.3),
      },
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Meal Planner
        </CardTitle>
        <CardDescription>
          Distribute your macros across meals
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <Label>Protein (g)</Label>
            <Input
              type="number"
              value={macros.protein}
              onChange={(e) => setMacros({ ...macros, protein: e.target.value })}
            />
          </div>
          <div>
            <Label>Carbs (g)</Label>
            <Input
              type="number"
              value={macros.carbs}
              onChange={(e) => setMacros({ ...macros, carbs: e.target.value })}
            />
          </div>
          <div>
            <Label>Fat (g)</Label>
            <Input
              type="number"
              value={macros.fat}
              onChange={(e) => setMacros({ ...macros, fat: e.target.value })}
            />
          </div>
        </div>

        <Button
          onClick={generatePlan}
          className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 cursor-pointer"
        >
          Generate Meal Plan
        </Button>

        {meals && (
          <div className="mt-6 space-y-4">
            {['breakfast', 'lunch', 'dinner'].map((meal) => (
              <div key={meal} className="rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
                <h4 className="font-semibold mb-3 capitalize">{meal}</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Protein:</span>
                    <p className="font-semibold">{meals[meal].protein}g</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Carbs:</span>
                    <p className="font-semibold">{meals[meal].carbs}g</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Fat:</span>
                    <p className="font-semibold">{meals[meal].fat}g</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
