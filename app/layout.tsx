import { Actor, Aleo } from "next/font/google";
import "./globals.css";
const aleo = Aleo ({
  subsets: ["latin"],
  variable: "--aleo"
})

const actor = Actor ({
  subsets: ["latin"],
  weight: "400",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${actor.className} ${aleo.variable}`}>{children}</body>
    </html>
  );
}
