"use client";
import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import { ThemeProvider } from "next-themes";

function Layout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-primary-foreground rounded-tl-md rounded-b-md flex-grow">
        {children}
      </main>
    </ThemeProvider>
  );
}
export default Layout;
