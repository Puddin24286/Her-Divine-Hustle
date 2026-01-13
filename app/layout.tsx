import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// Luxury serif for headings - elegant and timeless
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

// Premium sans-serif for body text - clean and readable
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Her Divine Hustle Co. | The Sanctuary for the Ambitious",
  description:
    "Bridge the gap between deep inner transformation and unapologetic outward ambition. Digital blueprints for high-achieving women transitioning from corporate to aligned entrepreneurship.",
  keywords: [
    "women entrepreneurs",
    "corporate to entrepreneur",
    "digital products for women",
    "business strategy",
    "personal development",
    "high-achieving women",
    "entrepreneurship",
  ],
  authors: [{ name: "Her Divine Hustle Co." }],
  creator: "Her Divine Hustle Co.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Her Divine Hustle Co.",
    title: "Her Divine Hustle Co. | The Sanctuary for the Ambitious",
    description:
      "Digital blueprints for high-achieving women transitioning to aligned entrepreneurship.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Her Divine Hustle Co.",
    description: "The Sanctuary for the Ambitious",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
