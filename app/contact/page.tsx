import type { Metadata } from "next";
import { ContactView } from "../page";
import { CTASection } from "../components/home/CTASection";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Prince Rajput - Get Your Free Consultation",
  description:
    "Get in touch with Prince Rajput for personalized fitness training and nutrition guidance. Free consultation available.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Prince Rajput - Get Your Free Consultation",
    description:
      "Get in touch with Prince Rajput for personalized fitness training and nutrition guidance. Free consultation available.",
    url: `${SITE_URL}/contact`,
    type: "website",
    siteName: SITE_NAME,
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
