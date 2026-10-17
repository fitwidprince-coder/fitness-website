import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  getAllToolSlugs,
  getToolBySlug,
  TOOLS,
  type ToolSlug,
} from "@/lib/tools-data";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { CTASection } from "@/app/components/home/CTASection";
import { ToolCalculator } from "./ToolCalculator";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return { title: "Tool Not Found" };
  }

  const url = `${SITE_URL}/tools/${tool.slug}`;

  return {
    title: `${tool.name} (Free) | ${SITE_NAME}`,
    description: tool.longDescription,
    keywords: tool.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${tool.name} | Free Fitness Tool`,
      description: tool.description,
      url,
      type: "website",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary",
      title: tool.name,
      description: tool.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const related = TOOLS.filter((t) => t.slug !== tool.slug).slice(0, 4);
  const Icon = tool.icon;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.longDescription,
    url: `${SITE_URL}/tools/${tool.slug}`,
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Person",
      name: "Prince Rajput",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <Link
            href="/tools"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-orange-600"
          >
            <ArrowLeft className="h-4 w-4" />
            All free tools
          </Link>

          <header className="mb-8">
            <div
              className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-white`}
            >
              <Icon className="h-6 w-6" aria-hidden />
            </div>
            <h1 className="mb-2 text-3xl font-bold text-slate-900 md:text-4xl">
              {tool.name}
            </h1>
            <p className="max-w-2xl text-gray-600">{tool.longDescription}</p>
          </header>

          <ToolCalculator slug={tool.slug as ToolSlug} />

          <p className="mt-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <strong>Note:</strong> Results are estimates. For a plan tailored to
            your goals, injuries, and lifestyle, start a free consultation with
            Prince Rajput.
          </p>

          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="mb-4 text-lg font-bold text-slate-900">
                More free calculators
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {related.map((item) => {
                  const RelIcon = item.icon;
                  return (
                    <Link
                      key={item.slug}
                      href={`/tools/${item.slug}`}
                      className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
                    >
                      <div
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white`}
                      >
                        <RelIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {item.name}
                        </p>
                        <p className="line-clamp-2 text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>
      <CTASection />
    </>
  );
}
