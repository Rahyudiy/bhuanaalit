import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
  Hedvig_Letters_Serif,
  Montserrat,
  Poppins,
} from "next/font/google";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const hedvigLettersSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ============================
   GLOBAL SEO METADATA
   ============================ */
export const metadata: Metadata = {
  title: {
    default: "BhuanaAlit — Hidden Gems of Bali",
    template: "%s | BhuanaAlit",
  },
  description:
    "Discover Bali’s hidden gems — secret waterfalls, untouched beaches, cultural villages, and authentic local experiences beyond the crowds.",
  keywords: [
    "BhuanaAlit",
    "Hidden Bali",
    "Bali hidden gems",
    "Bali waterfalls",
    "Secret beaches Bali",
    "Explore Bali",
    "Bali travel guide",
  ],

  metadataBase: new URL("https://bhuanaalit.vercel.app"),

  openGraph: {
    title: "BhuanaAlit — Hidden Gems of Bali",
    description:
      "Explore untouched destinations, waterfalls, secret beaches, and authentic culture across Bali.",
    url: "https://bhuanaalit.vercel.app",
    siteName: "BhuanaAlit",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "BhuanaAlit — Hidden Gems of Bali",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BhuanaAlit — Hidden Gems of Bali",
    description:
      "Explore Bali beyond the crowds. Waterfalls, beaches, and authentic cultural escapes.",
    images: ["/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "5uKXbybr2JBzhy2fD4uaQadqrGyG7Ra2kcWfCp3RrqU",
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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} ${hedvigLettersSerif.variable} antialiased scroll-smooth`}
      >
        <div className="py-4 md:px-20 px-8">
          <Navbar />

          {children}

          <div className="md:mt-[15vw] mt-[40vw]">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
