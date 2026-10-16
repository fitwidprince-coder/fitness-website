"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Button } from '@/app/components/ui/button';
import { Heart } from 'lucide-react';

export function BodyFatCalculator() {
  const [formData, setFormData] = useState({
    gender: 'male',
    age: '',
    weight: '',
    height: '',
    waist: '',
    neck: '',
    hip: '',
  });
  const [bodyFat, setBodyFat] = useState<number | null>(null);

  const calculate = () => {
    // US Navy Method simplified
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const waist = parseFloat(formData.waist);
    const neck = parseFloat(formData.neck);

    // Validate common inputs
    if (isNaN(weight) || isNaN(height) || isNaN(waist) || isNaN(neck) ||
        weight <= 0 || height <= 0 || waist <= 0 || neck <= 0) {
      setBodyFat(null);
      return;
    }

    let bf;
    if (formData.gender === 'male') {
      // Validate male-specific requirements
      if (waist <= neck) {
        setBodyFat(null);
        return;
      }
      bf = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
      const hip = parseFloat(formData.hip);
      // Validate female-specific requirements
      if (isNaN(hip) || hip <= 0 || (waist + hip) <= neck) {
        setBodyFat(null);
        return;
      }
      bf = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }

    setBodyFat(Math.max(0, Math.min(100, parseFloat(bf.toFixed(1)))));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5" />
          Body Fat Calculator
        </CardTitle>
        <CardDescription>
          Estimate body fat percentage using measurements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
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
          <div>
            <Label>Waist (cm)</Label>
            <Input
              type="number"
              value={formData.waist}
              onChange={(e) => setFormData({ ...formData, waist: e.target.value })}
            />
          </div>
          <div>
            <Label>Neck (cm)</Label>
            <Input
              type="number"
              value={formData.neck}
              onChange={(e) => setFormData({ ...formData, neck: e.target.value })}
            />
          </div>
          {formData.gender === 'female' && (
            <div className="md:col-span-2">
              <Label>Hip (cm)</Label>
              <Input
                type="number"
                value={formData.hip}
                onChange={(e) => setFormData({ ...formData, hip: e.target.value })}
              />
            </div>
          )}
        </div>

        <Button
          onClick={calculate}
          className="w-full mt-6 bg-gradient-to-r from-red-500 to-rose-600 cursor-pointer"
        >
          Calculate Body Fat
        </Button>

        {bodyFat !== null && (
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Your Body Fat %</p>
            <p className="text-4xl font-bold text-red-600">{bodyFat}%</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
