import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
   default: "Patient Benefit Advocacy in the Bay Area | TruePath Advocates",

    template: "%s | TruePath Advocates",
  },
  description:
    "TruePath Advocates helps patients navigate insurance benefits, billing issues, claims and appeals, Medi-Cal/Medicare, and care coordination — with clear, step-by-step support.",
  metadataBase: new URL("https://truepathadvocates.com"),
  alternates: {
    canonical: "https://truepathadvocates.com",
  },
  openGraph: {
    title: "TruePath Advocates | Patient Benefit Advocacy (Bay Area)",
    description:
      "Patient-first help with insurance benefits, medical bills, claims & appeals, Medi-Cal/Medicare, and care coordination.",
    url: "https://truepathadvocates.com",
    siteName: "TruePath Advocates",
    images: [
      {
        url: "https://truepathadvocates.com/og.png",
        width: 1200,
        height: 630,
        alt: "TruePath Advocates – Patient Benefit & Healthcare Advocacy in the Bay Area",

      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TruePath Advocates | Patient Benefit Advocacy (Bay Area)",
    description:
      "Patient-first help with insurance benefits, bills, claims & appeals, Medi-Cal/Medicare, and care coordination.",
    images: ["https://truepathadvocates.com/og.png"],
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
        {children}
      </body>
    </html>
  );
}
