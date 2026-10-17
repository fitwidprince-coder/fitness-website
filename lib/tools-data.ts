import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Calculator,
  Droplet,
  Flame,
  Heart,
  Scale,
  TrendingUp,
  Utensils,
} from "lucide-react";

export type ToolSlug =
  | "calorie-calculator"
  | "bmi-calculator"
  | "macro-calculator"
  | "tdee-calculator"
  | "bmr-calculator"
  | "body-fat-calculator"
  | "water-intake-calculator"
  | "meal-planner";

export interface ToolMeta {
  slug: ToolSlug;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  keywords: string[];
  color: string;
  icon: LucideIcon;
}

export const TOOLS: ToolMeta[] = [
  {
    slug: "calorie-calculator",
    name: "Calorie Calculator",
    shortName: "Calories",
    description:
      "Calculate your daily calorie needs based on age, weight, activity level, and goals.",
    longDescription:
      "Free calorie calculator using the Mifflin-St Jeor formula. Get personalized daily calorie targets for fat loss, muscle gain, or maintenance — plus food tips tailored to your goal.",
    keywords: [
      "calorie calculator",
      "daily calorie needs",
      "calorie deficit",
      "calorie surplus",
      "weight loss calories",
    ],
    color: "from-orange-500 to-red-600",
    icon: Flame,
  },
  {
    slug: "bmi-calculator",
    name: "BMI Calculator",
    shortName: "BMI",
    description:
      "Determine your Body Mass Index and understand your health category.",
    longDescription:
      "Free BMI calculator to estimate Body Mass Index from height and weight. See underweight, normal, overweight, or obese categories with clear context for fitness goals.",
    keywords: [
      "BMI calculator",
      "body mass index",
      "BMI chart",
      "healthy weight",
    ],
    color: "from-blue-500 to-cyan-600",
    icon: Scale,
  },
  {
    slug: "macro-calculator",
    name: "Macro Calculator",
    shortName: "Macros",
    description:
      "Get personalized protein, carbs, and fat targets for your goal.",
    longDescription:
      "Free macro calculator for protein, carbohydrates, and fat. Build a nutrition split for muscle building, fat loss, or maintenance based on your calories and preferences.",
    keywords: [
      "macro calculator",
      "macros",
      "protein calculator",
      "carb calculator",
      "IIFYM",
    ],
    color: "from-green-500 to-emerald-600",
    icon: Utensils,
  },
  {
    slug: "tdee-calculator",
    name: "TDEE Calculator",
    shortName: "TDEE",
    description:
      "Calculate your Total Daily Energy Expenditure from activity level.",
    longDescription:
      "Free TDEE calculator to estimate how many calories you burn daily including exercise. Use it to set accurate surplus or deficit targets.",
    keywords: [
      "TDEE calculator",
      "total daily energy expenditure",
      "maintenance calories",
      "calorie burn",
    ],
    color: "from-purple-500 to-pink-600",
    icon: Activity,
  },
  {
    slug: "bmr-calculator",
    name: "BMR Calculator",
    shortName: "BMR",
    description: "Find your Basal Metabolic Rate — calories burned at rest.",
    longDescription:
      "Free BMR calculator using science-based formulas to estimate resting metabolic rate. Know your baseline before factoring in activity.",
    keywords: [
      "BMR calculator",
      "basal metabolic rate",
      "resting metabolism",
      "metabolism calculator",
    ],
    color: "from-amber-500 to-orange-600",
    icon: TrendingUp,
  },
  {
    slug: "body-fat-calculator",
    name: "Body Fat Calculator",
    shortName: "Body Fat",
    description: "Estimate your body fat percentage with simple measurements.",
    longDescription:
      "Free body fat calculator using circumference-based estimates. Track composition progress beyond the scale for fat loss or muscle gain.",
    keywords: [
      "body fat calculator",
      "body fat percentage",
      "body composition",
      "lean mass",
    ],
    color: "from-red-500 to-rose-600",
    icon: Heart,
  },
  {
    slug: "water-intake-calculator",
    name: "Water Intake Calculator",
    shortName: "Water",
    description: "Calculate daily water needs based on your body and activity.",
    longDescription:
      "Free water intake calculator for daily hydration targets based on body weight and activity. Stay hydrated for performance and recovery.",
    keywords: [
      "water intake calculator",
      "hydration calculator",
      "daily water needs",
      "how much water to drink",
    ],
    color: "from-cyan-500 to-blue-600",
    icon: Droplet,
  },
  {
    slug: "meal-planner",
    name: "Meal Planner",
    shortName: "Meals",
    description: "Generate meal ideas based on your macro and calorie targets.",
    longDescription:
      "Free meal planner that turns calorie and macro targets into practical meal suggestions. A starting point before a fully personalized TWP plan.",
    keywords: [
      "meal planner",
      "meal plan calculator",
      "macro meal plan",
      "fitness meal plan",
    ],
    color: "from-indigo-500 to-purple-600",
    icon: Calculator,
  },
];

export function getToolBySlug(slug: string): ToolMeta | undefined {
  return TOOLS.find((tool) => tool.slug === slug);
}

export function getAllToolSlugs(): ToolSlug[] {
  return TOOLS.map((tool) => tool.slug);
}
