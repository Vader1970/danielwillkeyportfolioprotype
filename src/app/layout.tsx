import type { Metadata, Viewport } from "next";
import { geistSans, geistMono } from "./fonts";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.danwilkeyportfolio.com/"),
  title: "Daniel Wilkey | UX/UI Designer & Web Developer",
  description:
    "Daniel Wilkey is a Christchurch-based UX/UI Designer and Web Developer creating clean, user-focused digital experiences. I work across HTML, CSS, JavaScript, React, Next.js and modern no-code tools like Webflow, Framer, Wix and WordPress to design and build fast, responsive websites. Available for freelance projects and full-time opportunities across New Zealand and remotely.",
  applicationName: "Daniel Wilkey Portfolio",
  authors: [{ name: "Daniel Wilkey" }],
  robots: "index, follow",
  icons: {
    icon: [{ url: "/vader.png" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://www.danwilkeyportfolio.com/",
    title: "Daniel Wilkey | UX/UI Designer & Web Developer",
    description:
      "Portfolio of Daniel Wilkey, Christchurch-based UX/UI Designer and Web Developer. I design and build user-focused websites using HTML, CSS, JavaScript, React, Next.js and no-code platforms like Webflow, Framer, Wix and Rocketspark.",
    siteName: "Daniel Wilkey Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daniel Wilkey portfolio hero section",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Wilkey | UX/UI Designer & Web Developer",
    description:
      "Christchurch-based UX/UI Designer and Web Developer working across code and no-code to create clean, user-centered websites. Open to freelance and full-time work.",
    images: ["/og-image.png"],
  },
};


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      {/* 
        suppressHydrationWarning on <body> is needed because:
        1. Browser extensions may add attributes (e.g., data-smart-converter-loaded)
        2. These attributes are added after server render but before React hydration
        3. This is the correct solution for external DOM modifications we can't control
      */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-light flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <GoogleAnalytics gaId="G-FQXE0DCM1D" />
        <Navbar />
        <main className='flex-grow relative'>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
