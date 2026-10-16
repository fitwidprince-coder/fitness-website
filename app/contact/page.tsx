import type { Metadata } from "next";
import { ContactView } from "../page";
import { CTASection } from "../components/home/CTASection";

const BASE_URL = "https://yourwebsite.com";

export const metadata: Metadata = {
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

export default function ContactPage() {
  return (
    <>
      <ContactView />
      <CTASection />
    </>
  );
}
