import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "CYBER DRIFT - Ultimate Cyberpunk Racing Game",
  description: "Experience the ultimate cyberpunk racing adventure. Join millions of racers worldwide in CYBER DRIFT with stunning visuals, intense combat mechanics, and addictive gameplay.",
  keywords: "cyberpunk, racing, game, runner, multiplayer, futuristic, action",
  authors: [{ name: "CYBER DRIFT Studios" }],
  creator: "CYBER DRIFT",
  publisher: "CYBER DRIFT Studios",
  formatDetection: {
    email: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "CYBER DRIFT - Ultimate Cyberpunk Racing Game",
    description: "Join millions of racers in the fastest-growing cyberpunk racing game. Experience lightning-fast gameplay, combat mechanics, and compete on global leaderboards.",
    url: "https://cyberdrift.game",
    siteName: "CYBER DRIFT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CYBER DRIFT - Cyberpunk Racing Game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CYBER DRIFT - Ultimate Cyberpunk Racing Game",
    description: "Join millions of racers. Experience the ultimate cyberpunk racing adventure.",
    images: ["/twitter-image.png"],
    creator: "@cyberdrift",
  },
  alternates: {
    canonical: "https://cyberdrift.game",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CYBER DRIFT" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${outfit.className} bg-slate-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}