import type { Metadata, Viewport } from "next";
import { Josefin_Sans } from "next/font/google";
import PWAProvider from "@/components/PWAProvider";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#eaeae2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Mpuhwe | Software developer",
    template: "%s | Mpuhwe",
  },
  description:
    "Software developer specializing in Frontend and Mobile Development. Building interfaces people actually enjoy using.",
  keywords: ["Mpuhwe", "Software developer", "Frontend", "Mobile", "Developer"],
  authors: [{ name: "Mpuhwe" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mpuhwe",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${josefin.variable} min-h-screen font-josefin bg-background selection:bg-hotel-accent/20 selection:text-hotel-dark`}
      >
        <PWAProvider>{children}</PWAProvider>
      </body>
    </html>
  );
}
