import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Probemas Services",
  description:
    "Maximize your OSRS experience with Probemas. Fast services, trusted reviews, and expert support.",
  openGraph: {
    title: "Probemas Services",
    description:
      "Fast OSRS services, trusted by players worldwide. Join our Discord to get started.",
    url: "https://services.probemas.com",
    siteName: "Probemas Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
