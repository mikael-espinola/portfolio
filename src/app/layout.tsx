import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "./globalStyles";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import RefProvider from "@/contextApi/RefComponentsContext";
import LangProvider from "@/contextApi/LangProvider";

const OpenSans = Open_Sans({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Portfolio: Mikael",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <html lang="en">
        <body className={OpenSans.className}>
          <LangProvider>
            <RefProvider>
              <Header />
              {children}
              <Footer />
            </RefProvider>
          </LangProvider>
        </body>
      </html>
      <GlobalStyles />
    </StyledComponentsRegistry>
  );
}
