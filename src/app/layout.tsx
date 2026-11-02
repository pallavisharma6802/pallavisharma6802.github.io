import type { Metadata } from "next";
import { Instrument_Serif, Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LensProvider } from "@/context/LensContext";
import { ThemeProvider } from "@/context/ThemeContext";

// Instrument Serif: the calligraphic, hand-lettered display face used for
// headlines/pull-quotes. Fraunces (variable) backs it up for anything that
// needs a non-italic weight.
const calligraphic = Instrument_Serif({
  variable: "--font-calligraphic",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
  style: ["normal", "italic"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Pallavi Sharma — ML Engineer",
  description:
    "ML Engineer building agentic systems and clinical AI that know when they're wrong — verification, LLM safety, and healthcare ML.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${calligraphic.variable} ${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LensProvider>
            <div className="paper-texture" />
            {children}
          </LensProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
