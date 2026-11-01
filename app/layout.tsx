import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales overview | MarketPulse",
  description: "An interactive sales and business intelligence dashboard.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
