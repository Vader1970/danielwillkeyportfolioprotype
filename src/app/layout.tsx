import type { Metadata, Viewport } from "next";
import { geistSans, geistMono } from "./fonts";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/navigation/Footer"), {
  loading: () => <p className='text-center py-10'>Loading Footer...</p>,
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-light flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className='flex-grow relative'>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
