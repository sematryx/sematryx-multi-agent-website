import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
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
  metadataBase: new URL("https://sematryx.dev"),
  title: {
    default: "Sematryx — Algorithmic patterns for multi-agent reasoning",
    template: "%s · Sematryx",
  },
  description:
    "A Python library of composable multi-agent reasoning patterns, each benchmarked against single-agent baselines with explicit quality, cost, and latency tradeoffs.",
  openGraph: {
    title: "Sematryx — Algorithmic patterns for multi-agent reasoning",
    description:
      "Composable multi-agent reasoning patterns with empirical benchmarks. Wraps existing LLM clients and frameworks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-bg text-fg antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-sm focus:bg-fg focus:px-3 focus:py-1.5 focus:text-bg focus:font-mono focus:text-xs"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
