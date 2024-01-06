import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import HoverCircle from "@/components/HoverCircle";
import { Providers } from "./providers";
import Footer from "@/components/Footer";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeSpector",
  description: "Everything Code",
  keywords: "code, codespector, codespector.com",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={roboto.className}>
        <div className="">
          <Providers>
            <Nav />
            <HoverCircle />
            {children}
            <footer>
              <Footer />
            </footer>
          </Providers>
        </div>
      </body>
    </html>
  );
}