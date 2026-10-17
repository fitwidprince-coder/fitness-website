import type { Metadata } from "next";
import { FAQSection } from "@/app/components/home/FAQSection";
import { CTASection } from "@/app/components/home/CTASection";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ — Fitness Coaching Questions | ${SITE_NAME}`,
  description:
    "Answers about personalized training, nutrition plans, back injury recovery, alcohol guidance, results timeline, and coaching support with Prince Rajput.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "Frequently Asked Questions | TransformWithPrince",
    description:
      "Common questions about online fitness coaching, meal plans, injury recovery, and results.",
    url: `${SITE_URL}/faq`,
    type: "website",
    siteName: SITE_NAME,
  },
  robots: { index: true, follow: true },
};

export default function FAQPage() {
  return (
    <>
      <div className="border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-red-50 py-10 md:py-14">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Straight answers about coaching, nutrition, recovery, and what to
            expect with TWP.
          </p>
        </div>
      </div>
      <FAQSection />
      <CTASection />
    </>
  );
}
