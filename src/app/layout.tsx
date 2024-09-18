import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "./globalStyles";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio: Mikael",
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
          <Header />
          {children}
          <Footer />
        </body>
      </html>
      <GlobalStyles />
    </StyledComponentsRegistry>
  );
}
