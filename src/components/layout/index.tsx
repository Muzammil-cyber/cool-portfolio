"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import NavbarMobile from "./navbar-mobile";
import { ThemeProvider } from "next-themes";
import { useWindowSize } from "@/lib/useHooks";
import { MEDIUM_BREAKPOINT, SMALL_BREAKPOINT } from "@/lib/constant";
import Navbar from "./navbar";

function Layout({ children }: PropsWithChildren) {
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < SMALL_BREAKPOINT;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return (
      <ThemeProvider>
        <MainLayout>{children}</MainLayout>
      </ThemeProvider>
    );

  return (
    <ThemeProvider>
      {isMobile ? (
        <NavbarMobile />
      ) : (
        <Navbar open={width > MEDIUM_BREAKPOINT} />
      )}
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
}
export default Layout;

const MainLayout = ({ children }: PropsWithChildren) => (
  <main className="flex-grow rounded-b-md rounded-tl-md bg-background sm:rounded-md">
    {children}
  </main>
);
