import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizz++ | The Gen Z Programming Language",
  description: "Forget syntax errors. Write code that passes the vibe check. Built in C++ for maximum performance and minimum cringe.",
  metadataBase: new URL("https://rizzlang.sriyush.fun"),
  openGraph: {
    title: "Rizz++ | The Gen Z Programming Language",
    description: "Forget syntax errors. Write code that passes the vibe check. Built in C++ for maximum performance and minimum cringe.",
    url: "https://rizzlang.sriyush.fun",
    siteName: "Rizz++",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rizz++ - The Gen Z Programming Language",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizz++ | The Gen Z Programming Language",
    description: "Forget syntax errors. Write code that passes the vibe check. Built in C++ for maximum performance and minimum cringe.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
