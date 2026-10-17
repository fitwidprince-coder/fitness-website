import type { Metadata } from "next";
import { HeroSection } from "@/app/components/home/HeroSection";
import { AboutSection } from "@/app/components/home/AboutSection";
import { SubscriptionPlans } from "@/app/components/home/SubscriptionPlans";
import { WhyDifferentSection } from "@/app/components/home/WhyDifferentSection";
import { TestimonialsSection } from "@/app/components/home/TestimonialsSection";
import { CTASection } from "@/app/components/home/CTASection";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Award,
  Heart,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { OpenChatTrigger } from "@/app/components/ChatWidget";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Expert Fitness Trainer & Nutritionist | 12+ Years`,
  description:
    "Transform your fitness journey with Prince Rajput. Personalized online coaching for muscle building, fat loss, strength, and injury recovery — 12+ years experience.",
  keywords: [
    "fitness trainer",
    "nutritionist",
    "muscle building",
    "fat loss",
    "strength training",
    "injury recovery",
    "online coaching",
    "personalized training",
    "TransformWithPrince",
    "TWP",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Prince Rajput — Expert Fitness Trainer & Nutritionist",
    description:
      "Transform your fitness journey with 12+ years of expert guidance in training and nutrition.",
    url: `${SITE_URL}/`,
    type: "website",
    siteName: SITE_NAME,
  },
  robots: { index: true, follow: true },
};

function HomeView() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <SubscriptionPlans />
      <WhyDifferentSection />
      <TestimonialsSection />
      {/* Compact discovery links — full sections live on their own routes */}
      <section className="border-y border-gray-100 bg-slate-50 py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl">
              Explore more
            </h2>
            <p className="text-gray-600">
              Calculators, guides, and answers — without cluttering the home
              page.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/tools",
                title: "Free Tools",
                desc: "BMI, calories, macros & more",
              },
              {
                href: "/blog",
                title: "Blog",
                desc: "Training & nutrition articles",
              },
              {
                href: "/faq",
                title: "FAQ",
                desc: "Common coaching questions",
              },
              {
                href: "/alcohol-awareness",
                title: "Alcohol & Fitness",
                desc: "Safer habits & detox tips",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-orange-300 hover:shadow-md"
              >
                <p className="mb-1 font-bold text-slate-900">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-orange-600">
                  Open →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}

export function AboutView() {
  const milestones = [
    { year: "2012", event: "Started Fitness Journey" },
    { year: "2015", event: "Became Certified Trainer" },
    { year: "2018", event: "Health Nutritionist Certification" },
    { year: "2020", event: "Specialized in Injury Recovery" },
    { year: "2024", event: "500+ Successful Transformations" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Every decision is made with your best interests in mind",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable, sustainable outcomes",
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "No cookie-cutter solutions, only custom plans",
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Always staying updated with latest fitness science",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600">
              <Award className="h-12 w-12 text-white" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              About Prince Rajput
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              A passionate fitness professional dedicated to transforming lives
              through evidence-based training and nutrition. With over 12 years
              of experience, I&apos;ve helped hundreds achieve their dream
              physiques and optimal health.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold">My Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4 leading-relaxed text-gray-700">
                My fitness journey began over 12 years ago when I discovered the
                transformative power of proper training and nutrition. What
                started as a personal pursuit quickly became a passion for
                helping others achieve their goals.
              </p>
              <p className="mb-4 leading-relaxed text-gray-700">
                Throughout my career, I&apos;ve specialized in helping clients
                overcome unique challenges — from recovering from back injuries
                to building muscle while managing health conditions. My approach
                combines scientific principles with practical, sustainable
                strategies.
              </p>
              <p className="leading-relaxed text-gray-700">
                As a certified Health Nutritionist, I understand that fitness is
                more than just exercise. It&apos;s about holistic wellness —
                proper nutrition, adequate rest, stress management, and creating
                sustainable lifestyle changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Milestones</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-20 flex-shrink-0 font-bold text-orange-600">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <div className="mt-3 h-px bg-orange-300" />
                  </div>
                  <div className="w-64 flex-shrink-0">
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <p className="font-semibold">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Core Values</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                        <Icon className="h-7 w-7 text-orange-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-red-600 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Let&apos;s work together to achieve your fitness goals
            </p>
            <OpenChatTrigger className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-orange-600 transition-transform hover:scale-105">
              Get in Touch
            </OpenChatTrigger>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ContactView() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98718 90607",
      action: "tel:+919871890607",
      description: "Mon-Sat: 8AM - 8PM",
    },
    {
      icon: Mail,
      title: "Email",
      value: "prince@twp.fitness",
      action: "mailto:prince@twp.fitness",
      description: "We reply within 24 hours",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 98718 90607",
      action: "https://wa.me/919871890607",
      description: "Quick responses",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India (online worldwide)",
      action: null,
      description: "Online coaching available globally",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
              Get in Touch
            </span>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Let&apos;s Start Your Transformation
            </h1>
            <p className="text-xl text-gray-600">
              Ready to take the first step? I&apos;m here to answer your
              questions and help you achieve your fitness goals.
            </p>
          </div>

          <div className="mx-auto mb-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-6 text-center transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                    <Icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <h3 className="mb-2 font-bold">{method.title}</h3>
                  {method.action ? (
                    <a
                      href={method.action}
                      className="mb-2 block font-medium text-orange-600 hover:underline"
                      target={
                        method.action.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.action.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="mb-2 font-medium text-gray-700">
                      {method.value}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 p-8 text-center text-white md:p-12">
              <Clock className="mx-auto mb-4 h-12 w-12" />
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Get Your Free Consultation
              </h2>
              <p className="mb-6 text-lg text-white/90">
                Fill out our quick form and I&apos;ll get back to you within 24
                hours to discuss your fitness goals and create a personalized
                plan.
              </p>
              <OpenChatTrigger className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-orange-600 transition-transform hover:scale-105">
                Start Free Consultation
              </OpenChatTrigger>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="mb-4 text-gray-600">
              Have questions before reaching out?
            </p>
            <Link
              href="/faq"
              className="font-semibold text-orange-600 hover:underline"
            >
              Check our FAQ →
            </Link>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="mb-6 text-center text-xl font-bold">
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold">By Appointment</span>
                </div>
              </div>
              <p className="mt-6 text-center text-sm text-gray-600">
                *Online coaching sessions available worldwide across all time
                zones
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return <HomeView />;
}
