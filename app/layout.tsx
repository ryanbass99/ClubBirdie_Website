import type { Metadata } from "next";
import Image from "next/image";
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
  title: "Club Birdie | Your Game, Upgraded",
  description: "Indoor golf simulator facility in Coon Rapids, Iowa featuring 24/7 member access, leagues, and online tee time booking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
  <div className="flex items-center gap-12">
    <a href="/">
      <Image
        src="/CB_Logo_Web.png"
        alt="Club Birdie"
        width={220}
        height={150}
        className="h-20 w-auto"
      />
    </a>

    <a
      href="/book"
      className="rounded-lg bg-red-700 px-4 py-2 text-white hover:bg-red-800"
    >
      Book Tee Time
    </a>
  </div>

  <nav className="hidden gap-6 text-sm font-medium md:flex">
        <a href="/">Home</a>
        <a href="/memberships">Memberships</a>
        <a href="/guest-pricing">Guest Pricing</a>
        <a href="/winter-league">Winter League</a>
        <a href="/faq">FAQ</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </header>

  {children}
</body>
    </html>
  );
}
