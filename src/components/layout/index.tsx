"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import NavbarMobile from "./navbar-mobile";
import { ThemeProvider } from "next-themes";
import { useWindowSize } from "@/lib/useHooks";
import { MEDIUM_BREAKPOINT, SMALL_BREAKPOINT } from "@/lib/constant";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

function Layout({ children }: PropsWithChildren) {
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < SMALL_BREAKPOINT;
  const pathname = usePathname();
  const [icon, setIcon] = useState<string>("Icon.svg");
  useEffect(() => {
    if (pathname === "/") {
      setIcon("Icon.svg");
    } else {
      const split = pathname.split("/");
      setIcon(`icons/${split[1]}.svg`);
    }
  }, [pathname]);

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
        <NavbarMobile path={pathname} icon={icon} />
      ) : (
        <Navbar path={pathname} open={width > MEDIUM_BREAKPOINT} />
      )}
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
}
export default Layout;

const MainLayout = ({ children }: PropsWithChildren) => (
  <main className="flex-grow overflow-y-auto rounded-b-md rounded-tl-md bg-background sm:rounded-md">
    {children}
  </main>
);
