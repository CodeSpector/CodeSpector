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
  description: "Level up your online presence with fast and beautiful websites tailored to you. We at CodeSpector have your erquirement as our top priority and we are here to help you with your online presence.",
  keywords: "code, codespector, codespector.com, CodeSpector, online webiste maker, website generator, website builder, website, webiste, webiste development, webiste design, webiste developer, webiste designer, webiste development company, webiste design company, webiste developer company, webiste designer company, webiste development agency, webiste design agency, webiste developer agency, webiste designer agency, webiste development firm, webiste design firm, webiste developer firm, webiste designer firm, webiste development studio, webiste design studio, webiste developer studio, webiste designer studio, webiste development service, webiste design service, webiste developer service, webiste designer service, webiste development services, webiste design services, webiste developer services, webiste designer services, webiste development company in india, webiste design company in india, webiste developer company in india, webiste designer company in india, webiste development agency in india, webiste design agency in india, webiste developer agency in india, webiste designer agency in india, webiste development firm in india, webiste design firm in india, webiste developer firm in india, webiste designer firm in india, webiste development studio in india, webiste design studio in india, webiste developer studio in india, webiste designer studio in india, webiste development service in india, webiste design service in india, webiste developer service in india, webiste designer service in india, webiste development services in india, webiste design services in india, webiste developer services in india, webiste designer services in india",
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
