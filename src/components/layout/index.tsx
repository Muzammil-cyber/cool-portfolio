"use client";
import { PropsWithChildren } from "react";
import NavbarMobile from "./navbar-mobile";
import { ThemeProvider } from "next-themes";
import { useWindowSize } from "@/lib/useHooks";
import { SMALL_BREAKPOINT } from "@/lib/constant";
import Navbar from "./navbar";

function Layout({ children }: PropsWithChildren) {
  const { width } = useWindowSize();
  const isMobile = width < SMALL_BREAKPOINT;
  return (
    <ThemeProvider>
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <main className="flex-grow rounded-b-md rounded-tl-md bg-background">
        {children}
      </main>
    </ThemeProvider>
  );
}
export default Layout;
