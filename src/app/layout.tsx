import type { Metadata, Viewport } from "next";
import { geistSans, geistMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
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
    icon: [{ url: "/favicon.ico" }],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
