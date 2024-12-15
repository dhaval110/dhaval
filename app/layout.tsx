import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import FloatingNavbar from "@/components/navbar/FloatingNavbar";
import { navMenus } from "@/data/navMenus";
import ScrollToTop from "@/components/common/ScrollToTop";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "Dhaval Khunti",
  description:
    "Dhaval Khunti is a proficient Software Engineer and Full Stack Developer from India, skilled in front-end and back-end development using modern tech stacks.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "images/dddd.png",
      rel: "icon",
      sizes: "16x16",
      type: "image/x-icon",
    },
    // {
    //   url: "/dddd.jpg",
    //   rel: "icon",
    //   sizes: "32x32",
    //   type: "image/x-icon",
    // },
    // {
    //   url: "/dddd.jpg",
    //   rel: "icon",
    //   sizes: "48x48",
    //   type: "image/x-icon",
    // },
    // {
    //   url: "/dddd.jpg",
    //   rel: "icon",
    //   sizes: "64x64",
    //   type: "image/x-icon",
    // },
  ],
  keywords: [
    "dhaval",
    "dhaval khunti",
    "partap",
    "dhaval website",
    "dhaval webdeveloper",
    "dhaval upwork",
    "porbandar dhaval",
    "india dhaval",
    "dhaval webdeveloper",
    "github dhaval",
  ],
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
