"use client";

import { useState } from "react";
import {
  Check,
  Crown,
  Dumbbell,
  Heart,
  Home,
  Activity,
  Users,
  Pause,
  Sparkles,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";

type FeatureItem = {
  text: string;
  type?: "check" | "pause";
};

type PlanCard = {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  badge?: string;
  bestValue?: boolean;
  popular?: boolean;
  couple?: boolean;
  theme: "default" | "gold" | "green" | "blue" | "pink" | "purple";
  features: FeatureItem[];
  cta?: string;
  sessions?: string;
};

type TabId = "gym" | "home" | "rehab" | "live";

const tabs: {
  id: TabId;
  label: string;
  icon: typeof Dumbbell;
  activeClass: string;
}[] = [
  {
    id: "gym",
    label: "Gym Workout",
    icon: Dumbbell,
    // Calorie Calculator: orange → red
    activeClass: "bg-orange-500 text-white border-orange-500 shadow-sm",
  },
  {
    id: "home",
    label: "Home Workout",
    icon: Home,
    // Macro Calculator: green → emerald
    activeClass: "bg-green-500 text-white border-green-500 shadow-sm",
  },
  {
    id: "rehab",
    label: "Rehabilitation",
    icon: Activity,
    // BMI Calculator: blue → cyan
    activeClass: "bg-blue-500 text-white border-blue-500 shadow-sm",
  },
  {
    id: "live",
    label: "Live Training",
    icon: Users,
    // TDEE Calculator: purple → pink
    activeClass: "bg-purple-500 text-white border-purple-500 shadow-sm",
  },
];

const gymIndividual: PlanCard[] = [
  {
    name: "Kickstart Plan",
    subtitle: "All Inclusive",
    price: "₹1,499",
    period: "/ month",
    theme: "default",
    features: [
      { text: "Customised workout plan" },
      { text: "Personalised diet plan" },
      { text: "Gym workout video tutorial" },
      { text: "1:1 consultation weekly (4/month)" },
      { text: "Supplement guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Lifestyle guidance" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
    ],
  },
  {
    name: "Consistency Plan",
    subtitle: "All Inclusive",
    price: "₹3,499",
    period: "/ 3 months",
    badge: "POPULAR",
    bestValue: true,
    popular: true,
    theme: "gold",
    features: [
      { text: "Customised workout plan" },
      { text: "Personalised diet plan" },
      { text: "Gym workout video tutorial" },
      { text: "1:1 consultation weekly (4/month)" },
      { text: "Supplement guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Lifestyle guidance" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
    ],
  },
  {
    name: "Strength Plan",
    subtitle: "All Inclusive",
    price: "₹5,999",
    period: "/ 6 months",
    theme: "default",
    features: [
      { text: "Customised workout plan" },
      { text: "Personalised diet plan" },
      { text: "Gym workout video tutorial" },
      { text: "1:1 consultation weekly (6/month)" },
      { text: "Supplement guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Lifestyle guidance" },
      { text: "Pause option (7 days)", type: "pause" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
      { text: "FREE Fitness Gear" },
    ],
  },
  {
    name: "Mastery Plan",
    subtitle: "All Inclusive",
    price: "₹11,999",
    period: "/ 12 months",
    theme: "default",
    features: [
      { text: "Customised workout plan" },
      { text: "Personalised diet plan" },
      { text: "Full video library (gym, home, rehab)" },
      { text: "1:1 consultation weekly (6/month)" },
      { text: "Supplement guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Lifestyle guidance" },
      { text: "Pause option (15 days)", type: "pause" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
      { text: "FREE Fitness Gear" },
    ],
  },
];

const gymCouple: PlanCard[] = [
  {
    name: "Couple Strength",
    subtitle: "For 2 People",
    price: "₹9,999",
    period: "/ 6 months",
    couple: true,
    theme: "pink",
    features: [
      { text: "Personalized workout plans for both" },
      { text: "Customized meal plans for both" },
      { text: "Gym workout video tutorial" },
      { text: "1:1 consultation weekly (6/month)" },
      { text: "Supplement guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Lifestyle coaching" },
      { text: "Pause option (7 days)", type: "pause" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
      { text: "Train Together, Grow Together" },
      { text: "FREE Fitness Gear" },
    ],
  },
  {
    name: "Couple Mastery",
    subtitle: "For 2 People",
    price: "₹19,999",
    period: "/ 12 months",
    couple: true,
    theme: "pink",
    features: [
      { text: "Personalized workout plans for both" },
      { text: "Customized meal plans for both" },
      { text: "Full video library (gym, home, rehab)" },
      { text: "1:1 consultation weekly (6/month)" },
      { text: "Supplement guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Lifestyle coaching" },
      { text: "Pause option (15 days)", type: "pause" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
      { text: "Train Together, Grow Together" },
      { text: "FREE Fitness Gear" },
    ],
  },
];

const homeIndividual: PlanCard[] = [
  {
    name: "Home Workout",
    subtitle: "Home Workout",
    price: "₹2,999",
    period: "/ 3 months",
    theme: "green",
    features: [
      { text: "Customised home workout plan" },
      { text: "Personalised diet plan" },
      { text: "Home workout video tutorial" },
      { text: "1:1 consultation twice a month" },
      { text: "Supplement guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Lifestyle guidance" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
    ],
  },
];

const homeCouple: PlanCard[] = [
  {
    name: "Couple Home Workout",
    subtitle: "For 2 People",
    price: "₹4,999",
    period: "/ 3 months",
    couple: true,
    theme: "pink",
    cta: "Get Started Together",
    features: [
      { text: "Customised home workout plan for both" },
      { text: "Personalised diet plan for both" },
      { text: "Home workout video tutorial" },
      { text: "1:1 consultation twice a month" },
      { text: "Supplement guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Lifestyle guidance" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
      { text: "Train Together, Grow Together" },
    ],
  },
];

const rehabIndividual: PlanCard[] = [
  {
    name: "Rehabilitation",
    subtitle: "Recovery & Healing",
    price: "₹4,499",
    period: "/ 3 months",
    badge: "REHABILITATION",
    theme: "blue",
    features: [
      { text: "Customised rehabilitation workout" },
      { text: "Rehabilitation workout video tutorial" },
      { text: "1:1 consultation twice a month" },
      { text: "Supplement guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Lifestyle guidance" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
    ],
  },
];

const rehabCouple: PlanCard[] = [
  {
    name: "Couple Rehabilitation",
    subtitle: "For 2 People",
    price: "₹6,999",
    period: "/ 3 months",
    couple: true,
    theme: "pink",
    cta: "Get Started Together",
    features: [
      { text: "Customised rehabilitation workout" },
      { text: "Rehabilitation workout video tutorial" },
      { text: "1:1 consultation twice a month" },
      { text: "Supplement guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Lifestyle guidance" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
      { text: "Recover Together, Grow Together" },
    ],
  },
];

const liveIndividual: PlanCard[] = [
  {
    name: "1:1 Elite Coaching",
    subtitle: "",
    price: "₹8,999",
    period: "/ month",
    badge: "1:1 ELITE",
    sessions: "12 Sessions • Just ₹750/session",
    theme: "purple",
    features: [
      { text: "Live 1:1 personal training" },
      { text: "Personalised diet plan" },
      { text: "60 min per session" },
      { text: "Supplement guidance" },
      { text: "Lifestyle guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Full video library access" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
    ],
  },
  {
    name: "1:1 Elite Coaching",
    subtitle: "",
    price: "₹14,999",
    period: "/ month",
    badge: "1:1 ELITE",
    sessions: "24 Sessions • Just ₹625/session",
    theme: "purple",
    features: [
      { text: "Live 1:1 personal training" },
      { text: "Personalised diet plan" },
      { text: "60 min per session" },
      { text: "Supplement guidance" },
      { text: "Lifestyle guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Full video library access" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
    ],
  },
  {
    name: "1:1 Elite Coaching",
    subtitle: "",
    price: "₹21,999",
    period: "/ 3 months",
    badge: "1:1 ELITE",
    sessions: "36 Sessions • Just ₹611/session",
    theme: "purple",
    features: [
      { text: "Live 1:1 personal training" },
      { text: "Personalised diet plan" },
      { text: "60 min per session" },
      { text: "Supplement guidance" },
      { text: "Lifestyle guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Full video library access" },
      { text: "Pause option (7 days)", type: "pause" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
      { text: "FREE Fitness Gear" },
    ],
  },
  {
    name: "1:1 Elite Coaching",
    subtitle: "",
    price: "₹34,999",
    period: "/ 3 months",
    badge: "1:1 ELITE",
    bestValue: true,
    popular: true,
    sessions: "72 Sessions • Just ₹486/session",
    theme: "gold",
    features: [
      { text: "Live 1:1 personal training" },
      { text: "Personalised diet plan" },
      { text: "60 min per session" },
      { text: "Supplement guidance" },
      { text: "Lifestyle guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Full video library access" },
      { text: "Pause option (7 days)", type: "pause" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
      { text: "FREE Fitness Gear" },
    ],
  },
];

const liveCouple: PlanCard[] = [
  {
    name: "1:1 Elite Coaching (Couple)",
    subtitle: "",
    price: "₹14,999",
    period: "/ month",
    badge: "1:1 ELITE",
    couple: true,
    sessions: "12 Sessions • For 2 (Shared Slot)",
    theme: "purple",
    features: [
      { text: "Live 1:1 coaching for both partners" },
      { text: "One shared slot — both attend the same session" },
      { text: "Personalised diet plan for each partner" },
      { text: "60 min per session" },
      { text: "Supplement guidance" },
      { text: "Lifestyle guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Full video library access" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
    ],
  },
  {
    name: "1:1 Elite Coaching (Couple)",
    subtitle: "",
    price: "₹22,999",
    period: "/ month",
    badge: "1:1 ELITE",
    couple: true,
    sessions: "24 Sessions • For 2 (Shared Slot)",
    theme: "purple",
    features: [
      { text: "Live 1:1 coaching for both partners" },
      { text: "One shared slot — both attend the same session" },
      { text: "Personalised diet plan for each partner" },
      { text: "60 min per session" },
      { text: "Supplement guidance" },
      { text: "Lifestyle guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Full video library access" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
    ],
  },
  {
    name: "1:1 Elite Coaching (Couple)",
    subtitle: "",
    price: "₹32,999",
    period: "/ 3 months",
    badge: "1:1 ELITE",
    couple: true,
    sessions: "36 Sessions • For 2 (Shared Slot)",
    theme: "purple",
    features: [
      { text: "Live 1:1 coaching for both partners" },
      { text: "One shared slot — both attend the same session" },
      { text: "Personalised diet plan for each partner" },
      { text: "60 min per session" },
      { text: "Supplement guidance" },
      { text: "Lifestyle guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Full video library access" },
      { text: "Pause option (7 days)", type: "pause" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
      { text: "FREE Fitness Gear" },
    ],
  },
  {
    name: "1:1 Elite Coaching (Couple)",
    subtitle: "",
    price: "₹51,999",
    period: "/ 3 months",
    badge: "1:1 ELITE",
    couple: true,
    sessions: "72 Sessions • For 2 (Shared Slot)",
    theme: "purple",
    features: [
      { text: "Live 1:1 coaching for both partners" },
      { text: "One shared slot — both attend the same session" },
      { text: "Personalised diet plan for each partner" },
      { text: "60 min per session" },
      { text: "Supplement guidance" },
      { text: "Lifestyle guidance" },
      { text: "WhatsApp support" },
      { text: "In-App Chat Support" },
      { text: "Full video library access" },
      { text: "Pause option (7 days)", type: "pause" },
      { text: "Habit Tracker" },
      { text: "Transformation Log Book" },
      { text: "FREE Fitness Gear" },
    ],
  },
];

const themeStyles: Record<
  PlanCard["theme"],
  {
    price: string;
    check: string;
    checkBg: string;
    border: string;
    button: string;
    badge: string;
    accentIcon: string;
  }
> = {
  // Brand orange (site theme)
  default: {
    price: "text-slate-900",
    check: "text-orange-600",
    checkBg: "bg-orange-100",
    border: "border-gray-200",
    button:
      "border-2 border-orange-500 bg-white text-orange-600 hover:bg-orange-50",
    badge: "bg-orange-500 text-white",
    accentIcon: "text-orange-200",
  },
  // Calorie Calculator: orange → red (popular / best value)
  gold: {
    price: "text-orange-600",
    check: "text-orange-600",
    checkBg: "bg-orange-100",
    border: "border-orange-400 shadow-orange-100",
    button:
      "bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 border-0",
    badge: "bg-gradient-to-r from-orange-500 to-red-600 text-white",
    accentIcon: "text-orange-400",
  },
  // Macro Calculator: green → emerald
  green: {
    price: "text-green-600",
    check: "text-green-600",
    checkBg: "bg-green-100",
    border: "border-green-200",
    button:
      "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 border-0",
    badge: "bg-green-500 text-white",
    accentIcon: "text-green-200",
  },
  // BMI Calculator: blue → cyan
  blue: {
    price: "text-blue-600",
    check: "text-blue-600",
    checkBg: "bg-blue-100",
    border: "border-blue-200",
    button:
      "bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 border-0",
    badge: "bg-blue-500 text-white",
    accentIcon: "text-blue-200",
  },
  // Body Fat Calculator: red → rose (couple plans)
  pink: {
    price: "text-rose-600",
    check: "text-rose-600",
    checkBg: "bg-rose-100",
    border: "border-rose-200",
    button:
      "bg-gradient-to-r from-red-500 to-rose-600 text-white hover:from-red-600 hover:to-rose-700 border-0",
    badge: "bg-gradient-to-r from-red-500 to-rose-600 text-white",
    accentIcon: "text-rose-300",
  },
  // TDEE Calculator: purple → pink (live training)
  purple: {
    price: "text-purple-600",
    check: "text-purple-600",
    checkBg: "bg-purple-100",
    border: "border-purple-200",
    button:
      "border-2 border-purple-500 bg-white text-purple-700 hover:bg-purple-50",
    badge: "bg-gradient-to-r from-purple-500 to-pink-600 text-white",
    accentIcon: "text-purple-300",
  },
};

function openChat() {
  window.dispatchEvent(new CustomEvent("open-chat"));
}

function PlanCardView({ plan }: { plan: PlanCard }) {
  const styles = themeStyles[plan.theme];
  const AccentIcon = plan.couple
    ? Heart
    : plan.theme === "blue"
      ? Activity
      : plan.theme === "green"
        ? Home
        : Crown;

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border-2 bg-white p-6 shadow-md transition-all hover:shadow-lg ${styles.border} ${
        plan.popular ? "ring-2 ring-orange-300/60" : ""
      }`}
    >
      {(plan.badge || plan.couple) && (
        <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${
              plan.couple && !plan.badge?.includes("ELITE")
                ? "bg-gradient-to-r from-red-500 to-rose-600 text-white"
                : styles.badge
            }`}
          >
            {plan.couple && !plan.badge?.includes("ELITE") ? (
              <>🤍 COUPLE 🤍</>
            ) : plan.badge === "POPULAR" ? (
              <>
                <Sparkles className="h-3 w-3" /> POPULAR <Sparkles className="h-3 w-3" />
              </>
            ) : plan.badge === "1:1 ELITE" ? (
              <>★ 1:1 ELITE ★</>
            ) : (
              plan.badge
            )}
          </span>
        </div>
      )}

      <AccentIcon
        className={`absolute right-4 top-4 h-8 w-8 opacity-40 ${styles.accentIcon}`}
      />

      <div className="mb-4 mt-2 pr-8">
        <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
        {plan.subtitle && (
          <p className="mt-0.5 text-sm text-gray-500">{plan.subtitle}</p>
        )}
        {plan.sessions && (
          <p className="mt-1 text-sm text-gray-500">{plan.sessions}</p>
        )}
      </div>

      <div className="mb-5">
        <div className="flex flex-wrap items-end gap-2">
          <span className={`text-3xl font-bold md:text-4xl ${styles.price}`}>
            {plan.price}
          </span>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-500">{plan.period}</span>
          {plan.bestValue && (
            <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700">
              Best Value
            </span>
          )}
          {plan.couple && (
            <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-700">
              For 2
            </span>
          )}
        </div>
      </div>

      <ul className="mb-6 flex-1 space-y-2.5">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            {feature.type === "pause" ? (
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
                <Pause className="h-3 w-3 fill-cyan-600 text-cyan-600" />
              </span>
            ) : (
              <span
                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${styles.checkBg}`}
              >
                <Check className={`h-3 w-3 ${styles.check}`} strokeWidth={3} />
              </span>
            )}
            <span className="text-sm text-gray-700">{feature.text}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`mt-auto w-full cursor-pointer ${styles.button}`}
        size="lg"
        onClick={openChat}
      >
        {plan.cta || "Get Started"}
      </Button>
    </div>
  );
}

function SectionDivider({
  label,
  color = "orange",
}: {
  label: string;
  color?: "orange" | "rose" | "purple" | "green" | "blue";
}) {
  const colors = {
    orange: { text: "text-orange-600", border: "border-orange-300" },
    rose: { text: "text-rose-600", border: "border-rose-300" },
    purple: { text: "text-purple-600", border: "border-purple-300" },
    green: { text: "text-green-600", border: "border-green-300" },
    blue: { text: "text-blue-600", border: "border-blue-300" },
  };

  return (
    <div className="mb-8 flex items-center gap-4">
      <div className={`h-px flex-1 border-t ${colors[color].border}`} />
      <span
        className={`text-xs font-bold tracking-[0.2em] uppercase ${colors[color].text}`}
      >
        {label}
      </span>
      <div className={`h-px flex-1 border-t ${colors[color].border}`} />
    </div>
  );
}

export function SubscriptionPlans() {
  const [activeTab, setActiveTab] = useState<TabId>("gym");

  return (
    <section
      id="plans"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50 py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
            Pricing Plans
          </span>
          <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
            Select the perfect package for your fitness goals. All plans include
            personalized guidance and dedicated support.
          </p>
          <button
            type="button"
            onClick={() => setActiveTab("live")}
            className="mt-3 cursor-pointer text-sm font-medium text-orange-600 hover:text-red-600 hover:underline"
          >
            Want a coach live on every rep? Explore live 1-on-1 personal training →
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex justify-center px-2">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-2xl border border-gray-200 bg-gray-100/80 p-1.5 shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all sm:px-4 ${
                    isActive
                      ? tab.activeClass
                      : "border-transparent bg-transparent text-gray-500 hover:bg-white/60 hover:text-orange-600"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gym Workout */}
        {activeTab === "gym" && (
          <div className="space-y-12">
            <div>
              <SectionDivider label="Individual Plans" color="orange" />
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {gymIndividual.map((plan, i) => (
                  <PlanCardView key={`gym-ind-${i}`} plan={plan} />
                ))}
              </div>
            </div>
            <div>
              <SectionDivider label="Couple Plans" color="rose" />
              <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
                {gymCouple.map((plan, i) => (
                  <PlanCardView key={`gym-cpl-${i}`} plan={plan} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Home Workout */}
        {activeTab === "home" && (
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-center text-xs font-bold tracking-[0.2em] text-green-600 uppercase">
                Individual Plan
              </p>
              {homeIndividual.map((plan, i) => (
                <PlanCardView key={`home-ind-${i}`} plan={plan} />
              ))}
            </div>
            <div>
              <p className="mb-4 text-center text-xs font-bold tracking-[0.2em] text-rose-600 uppercase">
                Couple Plan
              </p>
              {homeCouple.map((plan, i) => (
                <PlanCardView key={`home-cpl-${i}`} plan={plan} />
              ))}
            </div>
          </div>
        )}

        {/* Rehabilitation */}
        {activeTab === "rehab" && (
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-center text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                Individual Plan
              </p>
              {rehabIndividual.map((plan, i) => (
                <PlanCardView key={`rehab-ind-${i}`} plan={plan} />
              ))}
            </div>
            <div>
              <p className="mb-4 text-center text-xs font-bold tracking-[0.2em] text-rose-600 uppercase">
                Couple Plan
              </p>
              {rehabCouple.map((plan, i) => (
                <PlanCardView key={`rehab-cpl-${i}`} plan={plan} />
              ))}
            </div>
          </div>
        )}

        {/* Live Training */}
        {activeTab === "live" && (
          <div className="space-y-12">
            <div>
              <div className="mb-8 text-center">
                <h3 className="text-sm font-bold tracking-[0.15em] text-purple-600 uppercase">
                  One-on-One Elite Coaching
                </h3>
                <p className="mt-1 text-sm text-gray-500 italic">
                  Not for everyone — only for serious individuals
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {liveIndividual.map((plan, i) => (
                  <PlanCardView key={`live-ind-${i}`} plan={plan} />
                ))}
              </div>
            </div>
            <div>
              <div className="mb-8 text-center">
                <h3 className="text-sm font-bold tracking-[0.15em] text-rose-600 uppercase">
                  Couple 1:1 Coaching
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Train together — one shared account & session slot for both
                  partners.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {liveCouple.map((plan, i) => (
                  <PlanCardView key={`live-cpl-${i}`} plan={plan} />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Not sure which plan is right for you? Let&apos;s talk!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="cursor-pointer border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-orange-700"
            onClick={openChat}
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
