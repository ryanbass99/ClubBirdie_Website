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
  description:
    "Indoor golf simulator facility in Coon Rapids, Iowa featuring 24/7 member access, leagues, and online tee time booking.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/memberships", label: "Memberships" },
  { href: "/guest-pricing", label: "Guest Pricing" },
  { href: "/winter-league", label: "Winter League" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

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
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            <input id="mobile-menu" type="checkbox" className="peer hidden" />

            <div className="flex items-center justify-between gap-4">
              <a href="/" className="shrink-0">
                <Image
                  src="/CB_Logo_Web.png"
                  alt="Club Birdie"
                  width={220}
                  height={150}
                  className="h-16 w-auto sm:h-20"
                  priority
                />
              </a>

              <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="hover:text-red-700">
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href="/book"
                  className="rounded-lg bg-red-700 px-3 py-2 text-sm font-semibold text-white hover:bg-red-800 sm:px-4"
                >
                  Book Tee Time
                </a>

                <label
                  htmlFor="mobile-menu"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border text-2xl font-bold lg:hidden"
                  aria-label="Open menu"
                >
                  ☰
                </label>
              </div>
            </div>

            <nav className="hidden border-t pt-3 text-sm font-medium peer-checked:block lg:hidden">
              <div className="grid gap-1 pb-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-3 hover:bg-gray-100"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
