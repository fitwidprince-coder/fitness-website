import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/lib/tools-data";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { CTASection } from "@/app/components/home/CTASection";

export const metadata: Metadata = {
  title: `Free Fitness Calculators & Tools | ${SITE_NAME}`,
  description:
    "Free fitness calculators: BMI, TDEE, BMR, Calorie, Macro, Body Fat, Water Intake and Meal Planner. Instant personalized results from TransformWithPrince.",
  keywords: [
    "BMI calculator",
    "TDEE calculator",
    "calorie calculator",
    "macro calculator",
    "body fat calculator",
    "fitness tools",
    "free fitness calculators",
  ],
  alternates: {
    canonical: `${SITE_URL}/tools`,
  },
  openGraph: {
    title: "Free Fitness Calculators & Tools | TWP",
    description:
      "Free fitness calculators: BMI, TDEE, BMR, Calorie, Macro, Body Fat, Water Intake and Meal Planner.",
    url: `${SITE_URL}/tools`,
    type: "website",
    siteName: SITE_NAME,
  },
  robots: { index: true, follow: true },
};

export default function ToolsPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Fitness Calculators",
    itemListElement: TOOLS.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      url: `${SITE_URL}/tools/${tool.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-600">
              Free Tools
            </span>
            <h1 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Fitness & Nutrition Calculators
            </h1>
            <p className="text-gray-600">
              Pick a calculator for instant, science-based estimates. Each tool
              has its own page for easy sharing and SEO.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group block cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-orange-300 hover:shadow-lg"
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-white transition-transform group-hover:scale-110`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mb-1 font-bold text-slate-900">{tool.name}</h2>
                  <p className="mb-3 line-clamp-2 text-sm text-gray-600">
                    {tool.description}
                  </p>
                  <span className="text-xs font-semibold text-orange-600">
                    Open calculator →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
