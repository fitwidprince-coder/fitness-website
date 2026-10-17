"use client";

import type { ComponentType } from "react";
import type { ToolSlug } from "@/lib/tools-data";
import { CalorieCalculator } from "@/app/components/tools/CalorieCalculator";
import { BMICalculator } from "@/app/components/tools/BMICalculator";
import { MacroCalculator } from "@/app/components/tools/MacroCalculator";
import { TDEECalculator } from "@/app/components/tools/TDEECalculator";
import { BMRCalculator } from "@/app/components/tools/BMRCalculator";
import { BodyFatCalculator } from "@/app/components/tools/BodyFatCalculator";
import { WaterIntakeCalculator } from "@/app/components/tools/WaterIntakeCalculator";
import { MealPlanner } from "@/app/components/tools/MealPlanner";

const CALCULATORS: Record<ToolSlug, ComponentType> = {
  "calorie-calculator": CalorieCalculator,
  "bmi-calculator": BMICalculator,
  "macro-calculator": MacroCalculator,
  "tdee-calculator": TDEECalculator,
  "bmr-calculator": BMRCalculator,
  "body-fat-calculator": BodyFatCalculator,
  "water-intake-calculator": WaterIntakeCalculator,
  "meal-planner": MealPlanner,
};

export function ToolCalculator({ slug }: { slug: ToolSlug }) {
  const Calculator = CALCULATORS[slug];
  if (!Calculator) return null;
  return <Calculator />;
}
