import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "./navbar";
import Footer from "./footer";
function Layout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <Navbar />
      <MainLayout>
        {children}
        <Footer />
      </MainLayout>
    </ThemeProvider>
  );
}
export default Layout;

const MainLayout = ({ children }: PropsWithChildren) => (
  <main className="flex-grow overflow-y-auto rounded-b-md rounded-tl-md bg-background sm:rounded-md">
    {children}
  </main>
);
