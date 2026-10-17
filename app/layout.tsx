import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/layout/Header";
import { FloatingActions } from "@/app/components/FloatingActions";
import { ChatWidget } from "@/app/components/ChatWidget";
import { Toaster } from "@/app/components/ui/sonner";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Fitness Training & Nutrition`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Online fitness training and personalized nutrition coaching by Prince Rajput, expert trainer and nutritionist with 12+ years of experience.",
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <FloatingActions />
        <ChatWidget />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
