"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Button } from '@/app/components/ui/button';
import { Droplet } from 'lucide-react';

export function WaterIntakeCalculator() {
  const [formData, setFormData] = useState({
    weight: '',
    activity: '0.3',
    climate: 'moderate',
  });
  const [water, setWater] = useState<number | null>(null);

  const calculate = () => {
    const weight = parseFloat(formData.weight);
    const activityMultiplier = parseFloat(formData.activity);

    // Validate inputs
    if (isNaN(weight) || isNaN(activityMultiplier) || weight <= 0) {
      setWater(null);
      return;
    }

    let baseWater = weight * 0.033; // 33ml per kg

    if (formData.climate === 'hot') {
      baseWater *= 1.2;
    }

    const totalWater = baseWater + activityMultiplier;
    setWater(parseFloat(totalWater.toFixed(1)));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Droplet className="h-5 w-5" />
          Water Intake Calculator
        </CardTitle>
        <CardDescription>
          Calculate your daily water needs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div>
            <Label>Body Weight (kg)</Label>
            <Input
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              placeholder="70"
            />
          </div>
          <div>
            <Label>Activity Level</Label>
            <Select value={formData.activity} onValueChange={(value) => setFormData({ ...formData, activity: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Sedentary</SelectItem>
                <SelectItem value="0.3">Light activity</SelectItem>
                <SelectItem value="0.6">Moderate activity</SelectItem>
                <SelectItem value="1">High activity</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Climate</Label>
            <Select value={formData.climate} onValueChange={(value) => setFormData({ ...formData, climate: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="hot">Hot/Humid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={calculate}
          className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
        >
          Calculate Water Intake
        </Button>

        {water !== null && (
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Daily Water Intake</p>
            <p className="text-4xl font-bold text-cyan-600">{water} L</p>
            <p className="text-sm text-gray-600 mt-2">≈ {Math.round(water * 4)} glasses</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
