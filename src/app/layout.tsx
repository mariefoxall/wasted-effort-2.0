import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "WASTED EFFORT",
  description: "Portfolio site for Marie Foxall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Header />
        {children}
      </body>
    </html>
  );
}
