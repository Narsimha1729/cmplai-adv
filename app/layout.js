import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cmplai – Compliance Simplified",
  description:
    "Cmplai is an AI-powered compliance automation platform designed for pharmaceutical and manufacturing companies. Automate GMP, ISO, and FDA documentation with ease.",
  keywords: [
    "Cmplai",
    "compliance automation",
    "GMP documentation",
    "FDA compliance",
    "ISO standards",
    "AI for pharma",
    "QMS software",
  ],
  metadataBase: new URL("https://www.cmplai.com"), // important for absolute paths
  openGraph: {
    title: "Cmplai – Compliance Simplified",
    description:
      "Revolutionizing compliance with AI for pharmaceutical and manufacturing industries.",
    url: "https://www.cmplai.com",
    siteName: "Cmplai",
    images: [
      {
        url: "/og-image.jpg", // ← place this image in /public
        width: 1200,
        height: 630,
        alt: "Cmplai AI Compliance Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cmplai – Compliance Simplified",
    description:
      "Automate documentation, stay audit-ready, and reduce compliance effort with AI.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.cmplai.com",
  },
  themeColor: "#00b4bc",
  authors: [{ name: "LN Infosphere TechTransformers Pvt Ltd" }],
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
