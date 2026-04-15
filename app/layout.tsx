import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { fontSans, fontMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";

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
  authors: [
    { name: "Vedant Naik", url: "https://vedantnaik19.github.io/portfolio" },
  ],
  creator: "Vedant Naik",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://vedantnaik19.github.io/portfolio",
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
        fontSans.variable,
        fontMono.variable
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
