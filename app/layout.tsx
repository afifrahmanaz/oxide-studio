import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AskOxide from "./components/AskOxide";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Solusi Digital Oxide",
  description:
    "Ekosistem eksekusi bisnis terpadu dengan standar premium.",
  icons: {
    icon: "/favicon/oxide-favicon.png",
    shortcut: "/favicon/oxide-favicon.png",
    apple: "/favicon/oxide-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${plusJakarta.variable} bg-[#fbfbfd] text-zinc-900 font-sans overflow-x-hidden selection:bg-blue-500/20 selection:text-blue-900`}
      >
        {children}
        <AskOxide />
      </body>
    </html>
  );
}
