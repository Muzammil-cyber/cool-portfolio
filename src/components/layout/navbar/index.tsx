"use client";

import { MEDIUM_BREAKPOINT, SMALL_BREAKPOINT } from "@/lib/constant";
import NavbarDefault from "./navbar-defualt";
import { usePathname } from "next/navigation";
import NavbarMobile from "./navbar-mobile";
import { useWindowSize } from "@/lib/useHooks";

export default function Navbar() {
  const { width } = useWindowSize();
  const isMobile = width < SMALL_BREAKPOINT;
  const pathname = usePathname();

  return isMobile ? (
    <NavbarMobile />
  ) : (
    <NavbarDefault path={pathname} open={width > MEDIUM_BREAKPOINT} />
  );
}
