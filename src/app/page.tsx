import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import NicheCallout from "@/components/NicheCallout";
import WhyUs from "@/components/WhyUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Sydney Digits | Web Design & Google Ads for Local Trades — Sydney, NSW",
  description:
    "Sydney's #1 local growth agency. We build high-converting websites, run Google & Meta Ads, and provide NFC Google Review Plates for auto detailers, ceramic coaters, mechanics, and local trades. Get a free growth plan today.",
  openGraph: {
    title: "Sydney Digits | Dominate Your Local Market",
    description:
      "Custom Websites · Google Ads · Local SEO — built for Sydney businesses that want real results, not empty promises.",
    type: "website",
    url: "https://sydneydigits.com.au",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Services />
      <NicheCallout />
      <WhyUs />
      <ContactForm />
      <Footer />
    </main>
  );
}
