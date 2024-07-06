import type { Metadata, Viewport } from "next";
import { Montserrat, Encode_Sans_Condensed } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import { cn } from "@/lib/utils";

import { Toaster } from "@/components/ui/toaster";
import { BASE_URL } from "@/lib/constant";

const fontSans = Montserrat({ subsets: ["latin"], variable: "--font-sans" });
const fontMono = Encode_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Muzammil Loya's Portfolio: Software Engineer",

  description:
    "I'm Muzammil Loya, a software engineer passionate about clean code & UX. Check out my portfolio and recent blog posts on recent techs!",
  keywords: [
    "Web Developer",
    "Full stack Developer",
    "Developer for hire",
    "User-Friendly Web Applications",
    "Responsive Web Design",
    "Decentralized Web",
    "blog",
    "blogger",
    "tech blog",
    "software engineer",
    "software developer",
    "mobile developer",
    "react native developer",
    "react developer",
    "nextjs developer",
    "node developer",
  ],
  authors: [{ name: "Muzammil Loya" }],
  creator: "Muzammil Loya",
  publisher: "Muzammil Loya",
  category: "technology",
  openGraph: {
    title: "Muzammil Loya's Portfolio: Software Engineer",
    description:
      "I'm Muzammil Loya, a software engineer passionate about clean code & UX. Check out my portfolio and recent blog posts on recent techs!",
    url: BASE_URL,
    type: "profile",
    siteName: "Muzammil Loya's Portfolio",
    locale: "en_US",
    images: [
      {
        url: BASE_URL + "/meta_image.jpg",
        width: 800,
        height: 600,
        alt: "Muzammil Loya's Portfolio",
      },
    ],
    firstName: "Muzammil",
    lastName: "Loya",
    username: "Muzammil-cyber",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MuzammilLoya",
    title: "Muzammil Loya's Portfolio: Software Engineer",
    description:
      "I'm Muzammil Loya, a software engineer passionate about clean code & UX. Check out my portfolio and recent blog posts on recent techs!",
    images: [BASE_URL + "/meta_image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#4438ca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontSans.variable,
          fontMono.variable,
          fontSans.className,
          "flex h-screen w-screen flex-col overflow-hidden bg-secondary p-2 sm:flex-row",
        )}
      >
        <Layout>{children}</Layout>
        <Toaster />
      </body>
    </html>
  );
}
