import type { Metadata } from "next";
import { Montserrat, Caveat } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sravan Yadav K — Portfolio",
  description:
    "Sravan Yadav K — ML builder & full-stack developer. Ideas into intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${caveat.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
