import type { Metadata, Viewport } from "next";
import { Josefin_Sans } from "next/font/google";
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
    default: "Mpuhwe | Software Engineer",
    template: "%s | Mpuhwe",
  },
  description:
    "Software Engineer specializing in Frontend and Mobile Development. Building interfaces people actually enjoy using.",
  keywords: ["Mpuhwe", "Software Engineer", "Frontend", "Mobile", "Developer"],
  authors: [{ name: "Mpuhwe" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${josefin.variable} min-h-screen font-josefin bg-background selection:bg-[#2563EB]/20 selection:text-[#0A1F44]`}
      >
        {children}
      </body>
    </html>
  );
}
