import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicat Quliyev | Java Developer & Backend Architect",
  description: "Personal portfolio of Nicat Quliyev. Specialized in Java, Spring Boot, Microservices, and building scalable backend systems. Based in Baku.",
  keywords: "Nicat Quliyev, Java Developer, Spring Boot, Microservices, Backend Engineer, Portfolio, Azerbaijan, Baku",
  openGraph: {
    title: "Nicat Quliyev | Java Developer",
    description: "Personal portfolio showcasing backend projects, skills, and experience.",
    url: "https://nicatquliyev.com", // Replace with your actual domain when deployed
    siteName: "Nicat Quliyev Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Backend Architecture Code",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
