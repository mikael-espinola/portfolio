import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "./globalStyles";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import RefProvider from "@/contextApi/RefComponentsContext";
import LangProvider from "@/contextApi/LangProvider";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const metadata: Metadata = {
  title: "Portfolio: Mikael",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={openSans.className}>
          <LangProvider>
            <RefProvider>
              <Header />
              {children}
              <Footer />
            </RefProvider>
          </LangProvider>
          <GlobalStyles />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
