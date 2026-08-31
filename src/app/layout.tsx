import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist_Mono, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { preload } from "react-dom";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Semibold.ttf",
  weight: "600",
  variable: "--font-clash",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Full Stack Developer (codiearyan)`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Aryan",
    "Aryan Bhati",
    "aryancrafts",
    "aryan crafts",
    "codiearyan",
    "Aryan SDE",
    "Aryan code",
    "Aryan developer",
    "Aryan software engineer",
    "Aryan full stack developer",
    "Founding Engineer Wagr Games",
    "Aryan portfolio",
    "Aryan Bhati portfolio",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  alternates: {
    canonical: DATA.url,
  },
  category: "technology",
  openGraph: {
    title: `${DATA.name} | Full Stack Developer`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name} (codiearyan)`,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${DATA.name} | Full Stack Developer`,
    description: DATA.description,
    card: "summary_large_image",
    creator: "@codiearyan",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  alternateName: [
    "Aryan",
    "aryanbhati",
    "codiearyan",
    "AryanBhati7",
    "aryancrafts",
    "Aryan Bhati",
    "aryan sde",
  ],
  url: DATA.url,
  image: `${DATA.url}${DATA.avatarUrl}`,
  jobTitle: "Founding Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Wagr Games",
    url: "https://wagr.co",
  },
  description: DATA.description,
  sameAs: [
    "https://github.com/codiearyan",
    "https://github.com/AryanBhati7",
    "https://x.com/codiearyan",
  ],
  knowsAbout: [
    "Full Stack Development",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Rust",
    "AWS",
    "Generative AI",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "aryanbhati",
  alternateName: ["Aryan Bhati Portfolio", "aryanbhati.com"],
  url: DATA.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  preload(DATA.avatarUrl, { as: "image", fetchPriority: "high" });

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          hankenGrotesk.variable,
          geistMono.variable,
          clashDisplay.variable,
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-x-0 top-0 h-[180px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={3}
                color="var(--primary)"
                maxOpacity={0.35}
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black, transparent 85%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent 85%)",
                }}
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[640px] rounded-full bg-primary/15 blur-[120px] z-0"
            />
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <div aria-hidden className="grain-overlay" />
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
