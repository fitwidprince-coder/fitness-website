"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Scale } from 'lucide-react';

export function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to m

    // Validate inputs
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      setBMI(null);
      setCategory('');
      return;
    }

    const bmiValue = w / (h * h);

    setBMI(parseFloat(bmiValue.toFixed(1)));

    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue < 25) {
      setCategory('Normal weight');
    } else if (bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  const getCategoryColor = () => {
    if (category === 'Normal weight') return 'text-green-600';
    if (category === 'Underweight') return 'text-blue-600';
    if (category === 'Overweight') return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Scale className="h-5 w-5" />
          BMI Calculator
        </CardTitle>
        <CardDescription>
          Calculate your Body Mass Index and health category
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="bmi-weight">Weight (kg)</Label>
            <Input
              id="bmi-weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="70"
            />
          </div>

          <div>
            <Label htmlFor="bmi-height">Height (cm)</Label>
            <Input
              id="bmi-height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="175"
            />
          </div>
        </div>

        <Button
          onClick={calculateBMI}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 cursor-pointer"
        >
          Calculate BMI
        </Button>

        {bmi !== null && (
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 mb-2">Your BMI</p>
              <p className="text-5xl font-bold text-blue-600">{bmi}</p>
              <p className={`text-lg font-semibold mt-2 ${getCategoryColor()}`}>
                {category}
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Underweight:</span>
                <span className="font-medium">&lt; 18.5</span>
              </div>
              <div className="flex justify-between">
                <span>Normal weight:</span>
                <span className="font-medium">18.5 - 24.9</span>
              </div>
              <div className="flex justify-between">
                <span>Overweight:</span>
                <span className="font-medium">25 - 29.9</span>
              </div>
              <div className="flex justify-between">
                <span>Obese:</span>
                <span className="font-medium">≥ 30</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
