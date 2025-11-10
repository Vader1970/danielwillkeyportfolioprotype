import type { Metadata, Viewport } from "next";
import { geistSans, geistMono } from "./fonts";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://danielwillkeyportfolioprotype.vercel.app/"),
  title: "Daniel Wilkey | UX/UI Designer & Web Developer",
  description:
    "Portfolio of Daniel Wilkey, UX/UI Designer & Web Developer based in Christchurch, New Zealand, specializing in end-to-end web development.",
  applicationName: "Daniel Wilkey Portfolio",
  authors: [{ name: "Daniel Wilkey" }],
  keywords: [
    "UX/UI Designer",
    "Web Developer",
    "Christchurch",
    "New Zealand",
    "Portfolio",
    "End-to-end web development",
  ],
  robots: "index, follow",
  icons: {
    icon: [{ url: "/vader.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://danielwilkey.com/",
    title: "Daniel Wilkey | UX/UI Designer & Web Developer",
    description:
      "Portfolio of Daniel Wilkey, UX/UI Designer & Web Developer based in Christchurch, New Zealand, specializing in end-to-end web development.",
    siteName: "Daniel Wilkey Portfolio",
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
        <Navbar />
        <main className='flex-grow relative'>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
