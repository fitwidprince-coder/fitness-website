import type { Metadata } from "next";
import { AlcoholSection } from "@/app/components/home/AlcoholSection";
import { CTASection } from "@/app/components/home/CTASection";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Alcohol & Fitness — Safe Drinking & Detox Tips | ${SITE_NAME}`,
  description:
    "Practical guidance on alcohol and fitness: safer drinking habits, liver support, hydration, and detox strategies that fit a training lifestyle.",
  keywords: [
    "alcohol and fitness",
    "alcohol detox",
    "liver support",
    "drinking and muscle building",
    "fitness alcohol tips",
  ],
  alternates: { canonical: `${SITE_URL}/alcohol-awareness` },
  openGraph: {
    title: "Alcohol & Fitness Guidance | TransformWithPrince",
    description:
      "Safer drinking habits, liver support, and detox strategies for people who train.",
    url: `${SITE_URL}/alcohol-awareness`,
    type: "website",
    siteName: SITE_NAME,
  },
  robots: { index: true, follow: true },
};

export default function AlcoholAwarenessPage() {
  return (
    <>
      <div className="border-b border-red-100 bg-gradient-to-br from-red-50 via-orange-50 to-white py-10 md:py-14">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Alcohol & Fitness
          </h1>
          <p className="text-gray-600">
            Realistic guidance so alcohol doesn&apos;t derail your training,
            recovery, or goals.
          </p>
        </div>
      </div>
      <AlcoholSection />
      <CTASection />
    </>
  );
}
