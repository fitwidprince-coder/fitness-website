import type { Metadata } from "next";
import { HeroSection } from "@/app/components/home/HeroSection";
import { AboutSection } from "@/app/components/home/AboutSection";
import { SubscriptionPlans } from "@/app/components/home/SubscriptionPlans";
import { WhyDifferentSection } from "@/app/components/home/WhyDifferentSection";
import { TopTrendingBlogs } from "@/app/components/home/TopTrendingBlogs";
import { AlcoholSection } from "@/app/components/home/AlcoholSection";
import { TestimonialsSection } from "@/app/components/home/TestimonialsSection";
import { SuccessStories } from "@/app/components/home/SuccessStories";
import { FreeToolsSection } from "@/app/components/home/FreeToolsSection";
import { FAQSection } from "@/app/components/home/FAQSection";
import { CTASection } from "@/app/components/home/CTASection";
import { ToolsView } from "@/app/components/ToolsViewClient";
import { Mail, Phone, MapPin, Clock, MessageCircle, Award, Heart, Target, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { OpenChatTrigger } from "@/app/components/ChatWidget";

type PageKey = "home" | "about" | "contact" | "tools";

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const BASE_URL = "https://yourwebsite.com";

function getPageFromSearchParams(searchParams: HomePageProps["searchParams"]): PageKey {
  const raw = searchParams.page;
  const value = Array.isArray(raw) ? raw[0] : raw;

  if (value === "about" || value === "contact" || value === "tools") {
    return value;
  }

  return "home";
}

export function generateMetadata({ searchParams }: HomePageProps): Metadata {
  const page = getPageFromSearchParams(searchParams);

  switch (page) {
    case "about":
      return {
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
    case "contact":
      return {
        title: "Contact Prince Rajput - Get Your Free Consultation",
        description:
          "Get in touch with Prince Rajput for personalized fitness training and nutrition guidance. Free consultation available.",
        alternates: {
          canonical: `${BASE_URL}/contact`,
        },
        openGraph: {
          title: "Contact Prince Rajput - Get Your Free Consultation",
          description:
            "Get in touch with Prince Rajput for personalized fitness training and nutrition guidance. Free consultation available.",
          url: `${BASE_URL}/contact`,
          type: "website",
        },
      };
    case "tools":
      return {
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
    case "home":
    default:
      return {
        title:
          "Prince Rajput - Expert Fitness Trainer & Nutritionist | 12+ Years Experience",
        description:
          "Transform your fitness journey with Prince Rajput, an experienced fitness trainer and nutritionist with 12+ years of expertise in muscle building, fat loss, strength training, and injury recovery.",
        keywords: [
          "fitness trainer",
          "nutritionist",
          "muscle building",
          "fat loss",
          "strength training",
          "injury recovery",
          "online coaching",
          "personalized training",
          "nutrition plan",
        ],
        alternates: {
          canonical: `${BASE_URL}/`,
        },
        openGraph: {
          title: "Prince Rajput - Expert Fitness Trainer & Nutritionist",
          description:
            "Transform your fitness journey with 12+ years of expert guidance in fitness training and nutrition.",
          url: `${BASE_URL}/`,
          type: "website",
        },
      };
  }
}

function HomeView() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <SubscriptionPlans />
      <WhyDifferentSection />
      <TopTrendingBlogs />
      <AlcoholSection />
      <TestimonialsSection />
      <SuccessStories />
      <FreeToolsSection />
      <FAQSection />
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
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600">
              <Award className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Prince Rajput</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A passionate fitness professional dedicated to transforming lives through
              evidence-based training and nutrition. With over 12 years of experience,
              I've helped hundreds achieve their dream physiques and optimal health.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                My fitness journey began over 12 years ago when I discovered the
                transformative power of proper training and nutrition. What started as
                a personal pursuit quickly became a passion for helping others achieve
                their goals.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Throughout my career, I've specialized in helping clients overcome unique
                challenges - from recovering from back injuries to building muscle while
                managing health conditions. My approach combines scientific principles
                with practical, sustainable strategies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a certified Health Nutritionist, I understand that fitness is more than
                just exercise. It's about holistic wellness - proper nutrition, adequate rest,
                stress management, and creating sustainable lifestyle changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Milestones</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 font-bold text-orange-600">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <div className="h-px bg-orange-300 mt-3" />
                  </div>
                  <div className="flex-shrink-0 w-64">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Core Values</h2>
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
                      <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's work together to achieve your fitness goals
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
      value: "+1 (234) 567-8900",
      action: "tel:+12345678900",
      description: "Mon-Sat: 8AM - 8PM",
    },
    {
      icon: Mail,
      title: "Email",
      value: "prince@fitness.com",
      action: "mailto:prince@fitness.com",
      description: "We reply within 24 hours",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+1 (234) 567-8900",
      action: "https://wa.me/12345678900",
      description: "Quick responses",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mumbai, India",
      action: null,
      description: "Online coaching available globally",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600 mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Start Your Transformation
            </h1>
            <p className="text-xl text-gray-600">
              Ready to take the first step? I'm here to answer your questions
              and help you achieve your fitness goals.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                    <Icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <h3 className="font-bold mb-2">{method.title}</h3>
                  {method.action ? (
                    <a
                      href={method.action}
                      className="text-orange-600 font-medium hover:underline block mb-2"
                      target={method.action.startsWith("http") ? "_blank" : undefined}
                      rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="font-medium text-gray-700 mb-2">{method.value}</p>
                  )}
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              );
            })}
          </div>

          {/* Quick Contact CTA */}
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 p-8 md:p-12 text-center text-white">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Get Your Free Consultation
              </h2>
              <p className="text-lg mb-6 text-white/90">
                Fill out our quick form and I'll get back to you within 24 hours
                to discuss your fitness goals and create a personalized plan.
              </p>
              <OpenChatTrigger className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-orange-600 transition-transform hover:scale-105">
                Start Free Consultation
              </OpenChatTrigger>
            </div>
          </div>

          {/* FAQ Link */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Have questions before reaching out?
            </p>
            <a
              href="/#faq"
              className="text-orange-600 font-semibold hover:underline"
            >
              Check our FAQ section →
            </a>
          </div>

          {/* Business Hours */}
          <div className="max-w-2xl mx-auto mt-16">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="font-bold text-xl mb-6 text-center">Business Hours</h3>
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
              <p className="text-sm text-gray-600 text-center mt-6">
                *Online coaching sessions available worldwide across all time zones
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ToolsView is now imported from ToolsView.tsx

export default function Home({ searchParams }: HomePageProps) {
  return <HomeView />;
}
