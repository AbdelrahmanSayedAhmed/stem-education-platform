import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "STEM Education Platform | Revolutionary Learning Experience",
  description: "Comprehensive STEM education platform with gamification, VR/AR integration, and complete subject coverage from Grade 1 to university level.",
  keywords: ["STEM", "education", "gamification", "VR", "AR", "mathematics", "physics", "chemistry", "biology"],
  authors: [{ name: "STEM Education Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="min-h-screen bg-background">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
