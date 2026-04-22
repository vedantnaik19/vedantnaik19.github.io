import type { Metadata } from "next";
import Script from "next/script";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "./globals.css";

const description =
  "Software engineer building scalable systems. Currently building AI platforms at the BBC.";

export const metadata: Metadata = {
  title: {
    default: "Vedant Naik | Software Engineer",
    template: "%s | Vedant Naik",
  },
  description,

  keywords: [
    "Vedant Naik",
    "Software Engineer",
    "BBC",
    "Full Stack Developer",
    "AI Engineer",
  ],
  authors: [{ name: "Vedant Naik", url: "https://vedantnaik19.github.io/" }],
  creator: "Vedant Naik",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://vedantnaik19.github.io/",
    title: "Vedant Naik — Software Engineer",
    description,
    siteName: "Vedant Naik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={cn(
        "h-full",
        "antialiased",
        "overflow-y-scroll",
        fontSans.variable,
        fontMono.variable
      )}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="0a4c86a6-5193-4af4-b91a-92e37333afcb"
          data-domains="vedantnaik19.github.io"
          strategy="afterInteractive"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
