import type { Metadata } from "next";
import { ToolsView } from "../components/ToolsViewClient";
import { CTASection } from "../components/home/CTASection";

const BASE_URL = "https://yourwebsite.com";

export const metadata: Metadata = {
  title: "Free Fitness Calculators & Tools - Prince Rajput Fitness",
  description:
    "Free fitness calculators: BMI, TDEE, BMR, Calorie, Macro, Body Fat, Water Intake calculators and meal planner. Get instant personalized results.",
  keywords: [
    "BMI calculator",
    "TDEE calculator",
    "calorie calculator",
    "macro calculator",
    "body fat calculator",
    "fitness tools",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools`,
  },
  openGraph: {
    title: "Free Fitness Calculators & Tools - Prince Rajput Fitness",
    description:
      "Free fitness calculators: BMI, TDEE, BMR, Calorie, Macro, Body Fat, Water Intake calculators and meal planner. Get instant personalized results.",
    url: `${BASE_URL}/tools`,
    type: "website",
  },
};

export default function ToolsPage() {
  return (
    <>
      <ToolsView />
      <CTASection />
    </>
  );
}
