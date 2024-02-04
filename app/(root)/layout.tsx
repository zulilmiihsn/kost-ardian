import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Tab from "@/components/Tab";
import Starfield from 'react-starfield'
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kost Ardian",
  description: "A dummy project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Navbar />
      <Tab />
      {children}
      <Footer />
    </React.Fragment>
  );
}
