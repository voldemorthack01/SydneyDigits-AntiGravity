import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://sydneydigits.com.au"),
  title: {
    default:
      "Sydney Digits | Web Design & Google Ads for Local Trades — Sydney, NSW",
    template: "%s | Sydney Digits",
  },
  description:
    "Sydney Digits builds high-converting websites, runs Google & Meta Ads, and provides NFC Google Review Plates for auto detailers, ceramic coaters, mechanics, and local trades in Sydney. Get more clients today.",
  keywords:
    "Sydney web design, Google Ads Sydney, local SEO Sydney, web design for local trades, auto detailer marketing, ceramic coating marketing, NFC review plates, digital marketing agency Sydney",
  openGraph: {
    title: "Sydney Digits | Web Design & Google Ads for Local Trades",
    description:
      "Custom Websites · Google Ads · Local SEO — built for Sydney businesses that want real results, not empty promises.",
    type: "website",
    locale: "en_AU",
    siteName: "Sydney Digits",
    url: "https://sydneydigits.com.au",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* LocalBusiness JSON-LD structured data */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sydney Digits",
  description:
    "Sydney Digits builds high-converting websites, runs Google & Meta Ads, and provides NFC Google Review Plates for local trades in Sydney.",
  url: "https://sydneydigits.com.au",
  telephone: "+61493332306",
  email: "amirsharabiani84@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "City",
    name: "Sydney",
  },
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700;800;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gunmetal text-mist font-inter">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
