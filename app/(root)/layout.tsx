import "../globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProvider from "@/lib/context";
import { useContext } from "react";

export const metadata: Metadata = {
  title: "Apparel",
  description: "Best Apparel Website on the Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollProvider>
      <Nav />
      {children}
      <Footer />
    </ScrollProvider>
  );
}
