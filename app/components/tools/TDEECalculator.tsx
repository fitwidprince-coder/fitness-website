"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Button } from '@/app/components/ui/button';
import { Activity } from 'lucide-react';

export function TDEECalculator() {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activity: '1.2',
  });
  const [tdee, setTDEE] = useState<number | null>(null);

  const calculate = () => {
    const age = parseInt(formData.age);
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const activity = parseFloat(formData.activity);

    // Validate inputs
    if (isNaN(age) || isNaN(weight) || isNaN(height) || isNaN(activity) ||
        age <= 0 || weight <= 0 || height <= 0 || activity <= 0) {
      setTDEE(null);
      return;
    }

    let bmr;
    if (formData.gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setTDEE(Math.round(bmr * activity));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          TDEE Calculator
        </CardTitle>
        <CardDescription>
          Total Daily Energy Expenditure - calories burned per day
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
              placeholder="25"
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
              placeholder="70"
            />
          </div>

          <div>
            <Label>Height (cm)</Label>
            <Input
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              placeholder="175"
            />
          </div>

          <div className="md:col-span-2">
            <Label>Activity Level</Label>
            <Select value={formData.activity} onValueChange={(value) => setFormData({ ...formData, activity: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1.2">Sedentary</SelectItem>
                <SelectItem value="1.375">Lightly active</SelectItem>
                <SelectItem value="1.55">Moderately active</SelectItem>
                <SelectItem value="1.725">Very active</SelectItem>
                <SelectItem value="1.9">Extra active</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={calculate}
          className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 cursor-pointer"
        >
          Calculate TDEE
        </Button>

        {tdee !== null && (
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Your TDEE</p>
            <p className="text-4xl font-bold text-purple-600">{tdee} cal/day</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
