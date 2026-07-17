import type { Metadata } from "next";
import "./globals.css";
import FloatingAudioPlayer from "./floating-audio-player";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://speraymer.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rewind:Young — Speraymer Album Project",
  description: "Speraymer 全新合作专辑 Rewind:Young：关于童年、成长与自我和解的五段旅程。",
  openGraph: {
    title: "Rewind:Young — Speraymer",
    description: "五段旅程，五种光色，重放我们成为自己的过程。",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: "/og-v2.png",
        width: 1672,
        height: 941,
        alt: "Rewind:Young five-chapter album project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewind:Young — Speraymer",
    description: "关于童年、成长与自我和解的五段旅程。",
    images: ["/og-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <FloatingAudioPlayer />
      </body>
    </html>
  );
}
