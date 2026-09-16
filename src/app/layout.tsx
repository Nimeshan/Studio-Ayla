import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://studioayla.com"),
  title: "Studio Ayla | Interior Design & Custom Lighting",
  description:
    "Studio Ayla creates personalised interiors and custom lighting designed around individuality, personality and the way you live.",
  keywords: [
    "Interior Design",
    "Custom Lighting",
    "Studio Ayla",
    "Luxury Interiors",
    "Architectural Lighting",
    "Bespoke Furniture",
    "Residential Interior Design",
  ],
  authors: [{ name: "Studio Ayla" }],
  creator: "Studio Ayla",
  openGraph: {
    title: "Studio Ayla | Interior Design & Custom Lighting",
    description:
      "Studio Ayla creates personalised interiors and custom lighting designed around individuality, personality and the way you live.",
    url: "https://studioayla.com",
    siteName: "Studio Ayla",
    images: [
      {
        url: "/images/hero-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Ayla Luxury Interior Design and Custom Lighting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Ayla | Interior Design & Custom Lighting",
    description:
      "Studio Ayla creates personalised interiors and custom lighting designed around individuality, personality and the way you live.",
    images: ["/images/hero-interior.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#1C1B1A] font-sans selection:bg-[#C5A880] selection:text-[#121110]">
        {children}
      </body>
    </html>
  );
}
