import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "STEM Education Platform | Interactive Learning for Science, Technology, Engineering & Math",
  description: "Comprehensive STEM education platform with gamification, interactive experiments, and personalized learning paths for students from Grade 1 to university level.",
  keywords: "STEM, education, science, technology, engineering, mathematics, interactive learning, gamification",
  authors: [{ name: "STEM Education Platform" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
