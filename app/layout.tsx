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

export const metadata = {
  title: "Kavya ❤️ Arjun Wedding",
  description: "You're invited to our wedding 💍 Join us for the celebration!",

  openGraph: {
    title: "Kavya ❤️ Arjun Wedding 💍",
    description: "Join us to celebrate our special day ❤️",
    url: "https://kavya-arjun-wedding-site.vercel.app",
    siteName: "Wedding Invite",
    images: [
      {
        url: "https://kavya-arjun-wedding-site.vercel.app/images/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kavya ❤️ Arjun Wedding",
    description: "You're invited 💖",
    images: ["https://kavya-arjun-wedding-site.vercel.app/images/hero.jpg"],
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
