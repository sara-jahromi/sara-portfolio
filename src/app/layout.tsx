import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
    default: "Sara Ghasvarianjahromi | AI/ML Researcher & Engineer",
    template: "%s | Sara Ghasvarianjahromi",
  },
  description: "Academic portfolio of Sara Ghasvarianjahromi, Ph.D. in Electrical Engineering. Showcasing publications, research areas, projects, and curriculum vitae.",
  openGraph: {
    title: "Sara Ghasvarianjahromi | AI/ML Researcher & Engineer",
    description: "Academic portfolio of Sara Ghasvarianjahromi, Ph.D. in Electrical Engineering.",
    siteName: "Sara Ghasvarianjahromi Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sara Ghasvarianjahromi | AI/ML Researcher & Engineer",
    description: "Academic portfolio of Sara Ghasvarianjahromi, Ph.D. in Electrical Engineering.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-stone-700">
        <a href="#main-content" className="skip-link no-print">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 flex flex-col focus:outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
