import { Roboto_Condensed, Inconsolata } from "next/font/google";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import StructuredData from "@/components/StructuredData";
import ScrollProvider from "@/components/ScrollProvider";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  weight: "400",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  weight: "400",
  display: "swap",
});

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
        url: "/images/og_image.png",
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
    images: ["/images/twitter_image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#313131",
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
      className={`${robotoCondensed.variable} ${inconsolata.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <StructuredData />
      </head>
      <body suppressHydrationWarning={true}>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
