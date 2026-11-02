import type { Metadata } from "next";
import { Instrument_Serif, Fraunces, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Pallavi Sharma, ML Engineer",
  description: "Portfolio of Pallavi Sharma, an ML engineer based in Madison, WI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${calligraphic.variable} ${display.variable} ${body.variable} ${mono.variable} ${hand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <div className="relative z-10 flex-1 flex flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
