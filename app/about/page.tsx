import type { Metadata } from "next";
import { AboutView } from "../page";
import { CTASection } from "../components/home/CTASection";

import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Prince Rajput - 12+ Years of Fitness Excellence",
  description:
    "Learn about Prince Rajput's journey as a fitness trainer and nutritionist with 12+ years of experience helping clients achieve their fitness goals.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Prince Rajput - 12+ Years of Fitness Excellence",
    description:
      "Learn about Prince Rajput's journey as a fitness trainer and nutritionist with 12+ years of experience helping clients achieve their fitness goals.",
    url: `${SITE_URL}/about`,
    type: "website",
    siteName: SITE_NAME,
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
