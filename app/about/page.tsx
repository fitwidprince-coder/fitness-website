import type { Metadata } from "next";
import { AboutView } from "../page";
import { CTASection } from "../components/home/CTASection";

const BASE_URL = "https://yourwebsite.com";

export const metadata: Metadata = {
  title: "About Prince Rajput - 12+ Years of Fitness Excellence",
  description:
    "Learn about Prince Rajput's journey as a fitness trainer and nutritionist with 12+ years of experience helping clients achieve their fitness goals.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Prince Rajput - 12+ Years of Fitness Excellence",
    description:
      "Learn about Prince Rajput's journey as a fitness trainer and nutritionist with 12+ years of experience helping clients achieve their fitness goals.",
    url: `${BASE_URL}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutView />
      <CTASection />
    </>
  );
}
