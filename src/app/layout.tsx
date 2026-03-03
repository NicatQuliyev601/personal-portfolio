import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicat Quliyev | Java Developer",
  description: "Personal portfolio of Nicat Quliyev, an accomplished Java Developer specializing in Spring Boot, Microservices, and Backend Architecture.",
  keywords: "Nicat Quliyev, Java Developer, Spring Boot, Microservices, Backend Engineer, Portfolio, Azerbaijan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-zinc-950`}>
        {children}
      </body>
    </html>
  );
}
