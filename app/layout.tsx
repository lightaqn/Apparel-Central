import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New",
  description: "Best Website on the Web",
  other: {
    "theme-color": "#1e1d1d",
    "color-scheme": "dark-only",
    "twitter:image": "/apparel1.jpg",
    summary_large_image: "/apparel2.jpg",
    "og:url": "",
    "og:image": "",
    "og:type": "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] font-poppins">{children}</body>
    </html>
  );
}
