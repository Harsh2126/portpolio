import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Orbitron, Raleway } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["700", "800", "900"] });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway", weight: ["700", "800", "900"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#000000] overflow-y-scroll overflow-x-hidden",
          spaceGrotesk.className,
          orbitron.variable,
          raleway.variable
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
