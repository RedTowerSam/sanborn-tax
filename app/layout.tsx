import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanborn Tax Service",
  description: "Sanborn Tax Service has been providing expert guidance in navigating the complexities of the tax code since 1996. Our team utilizes state-of-the-art tax software, ensuring compliance with the latest updates in tax law. All tax returns are meticulously prepared and electronically filed directly from our office.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    url: "https://www.sanborntaxservice.com/",
    type: "website",
    title: "Sanborn Tax Service",
    description: "Sanborn Tax Service has been providing expert guidance in navigating the complexities of the tax code since 1996. Our team utilizes state-of-the-art tax software, ensuring compliance with the latest updates in tax law. All tax returns are meticulously prepared and electronically filed directly from our office.",
    images: [
      {
        url: "/images/og-image.jpg", // Update this path once you upload the 1200x630 image
        width: 1200,
        height: 630,
        alt: "Sanborn Tax Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanborn Tax Service",
    description: "Sanborn Tax Service has been providing expert guidance in navigating the complexities of the tax code since 1996. Our team utilizes state-of-the-art tax software, ensuring compliance with the latest updates in tax law. All tax returns are meticulously prepared and electronically filed directly from our office.",
    images: ["/images/og-image.jpg"], // Update this path once you upload the image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

