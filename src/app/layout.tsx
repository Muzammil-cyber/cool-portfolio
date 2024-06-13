import type { Metadata } from "next";
import { Inter, Encode_Sans_Condensed } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import { cn } from "@/lib/utils";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fontMono = Encode_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          "p-2 bg-secondary w-screen h-screen overflow-y-auto flex flex-col"
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
