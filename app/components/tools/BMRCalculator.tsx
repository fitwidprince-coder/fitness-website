"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Button } from '@/app/components/ui/button';
import { TrendingUp } from 'lucide-react';

export function BMRCalculator() {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
  });
  const [bmr, setBMR] = useState<number | null>(null);

  const calculate = () => {
    const age = parseInt(formData.age);
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);

    // Validate inputs
    if (isNaN(age) || isNaN(weight) || isNaN(height) ||
        age <= 0 || weight <= 0 || height <= 0) {
      setBMR(null);
      return;
    }

    let bmrValue;
    if (formData.gender === 'male') {
      bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setBMR(Math.round(bmrValue));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          BMR Calculator
        </CardTitle>
        <CardDescription>
          Basal Metabolic Rate - calories burned at rest
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label>Age</Label>
            <Input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </div>
          <div>
            <Label>Gender</Label>
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
            <Label>Weight (kg)</Label>
            <Input
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            />
          </div>
          <div>
            <Label>Height (cm)</Label>
            <Input
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
            />
          </div>
        </div>

        <Button
          onClick={calculate}
          className="w-full mt-6 bg-gradient-to-r from-amber-500 to-orange-600 cursor-pointer"
        >
          Calculate BMR
        </Button>

        {bmr !== null && (
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Your BMR</p>
            <p className="text-4xl font-bold text-amber-600">{bmr} cal/day</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
