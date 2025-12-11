import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { faqs, servicesCategories } from "@/lib/content";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const siteUrl = "https://services.probemas.com";
const title = "Probemas Services | Fast, Trusted OSRS Help";
const description =
  "Maximize your Old School RuneScape experience with Probemas. Fast services, trusted reviews, secure payments, and real-time updates via Discord.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Probemas Services",
  },
  description,
  keywords: [
    "OSRS services",
    "RuneScape boosting",
    "Probemas",
    "questing services",
    "skilling services",
    "PVM services",
    "Infernal cape",
    "Firecape",
    "OSRS raids",
    "Ironman services",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Probemas Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1280,
        height: 720,
        alt: "Probemas OSRS services hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  themeColor: "#050915",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Probemas",
              url: siteUrl,
              logo: `${siteUrl}/logos/probemas.svg`,
              description,
              sameAs: [],
              serviceType: "Old School RuneScape services",
              areaServed: "Worldwide",
            }),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": servicesCategories.map((svc) => ({
                "@type": "Service",
                name: svc.label,
                description: svc.description,
                serviceType: svc.label,
                areaServed: "Worldwide",
                provider: {
                  "@type": "Organization",
                  name: "Probemas",
                  url: siteUrl,
                  logo: `${siteUrl}/logos/probemas.svg`,
                },
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  priceCurrency: "USD",
                  price: "0.00",
                  priceValidUntil: "2026-12-31",
                  url: siteUrl,
                  itemOffered: svc.label,
                  description: svc.description,
                },
              })),
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
