import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pathology Ascension — A Medical RPG",
  description:
    "A gamified RPG-style pathology study platform: 15-branch skill tree, 20-day campaign, infinite case generator, and an arcane resource library. Built for pathology residents aligned with Robbins 10e, WHO, ASH, AABB.",
  keywords: [
    "Pathology",
    "Medical RPG",
    "Robbins",
    "Skill Tree",
    "Case Randomizer",
    "Hematology",
    "Systemic Pathology",
  ],
  authors: [{ name: "Pathology Ascension" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          {children}
          <Toaster position="top-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
