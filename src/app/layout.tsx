import { Inter, Spectral } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import StructuredData from "@/components/StructuredData";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  display: "swap",
  weight: ["300", "400", "500"],
});

// For Anton, either use Google Fonts or load as local font
const anton = localFont({
  src: "../fonts/Anton-Regular.woff2", // Ensure you have this file
  variable: "--font-anton",
  display: "swap",
});

// Or use Google Fonts for Anton too:
/*
import { Anton } from 'next/font/google';
const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: '400',
  display: 'swap',
});
*/

export const metadata: Metadata = {
  title: "What's The Rush? | A Humane Alternative to Accelerationism",
  description:
    "Challenging accelerationist tech culture with ethical, sustainable, humane alternatives. Tech should serve life — not accelerate it.",
  keywords: [
    "anti-accelerationism",
    "tech ethics",
    "sustainable technology",
    "humane tech",
    "slow tech",
  ],
  authors: [{ name: "What's The Rush Team" }],
  creator: "What's The Rush",
  publisher: "What's The Rush",
  alternates: {
    canonical: "https://whatstherush.tech",
  },
  openGraph: {
    type: "website",
    url: "https://whatstherush.tech",
    title: "What's The Rush?",
    description: "A humane alternative to accelerationist tech culture",
    siteName: "What's The Rush",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "What's The Rush Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What's The Rush?",
    description: "A humane alternative to accelerationist tech culture",
    creator: "@whatstherush",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#172625",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spectral.variable} ${anton.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
