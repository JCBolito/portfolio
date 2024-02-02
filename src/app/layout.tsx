import "./globals.css";
import { ThemeProvider } from "@/components/atoms/theme-provider";
import Navbar from "@/components/molecules/navbar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Joshua Caleb Bolito",
  description: `I'm Joshua! A Frontend Developer 
  with expertise in utilizing React and Next.js 
  driven by a fervor for crafting visually captivating 
  and user-friendly websites and web applications.`,
  applicationName: "Joshua Caleb Bolito",
  keywords: [
    "joshua",
    "caleb",
    "bolito",
    "joshua caleb",
    "joshua bolito",
    "joshua caleb bolito",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          font.className,
          `min-h-screen bg-gradient-to-br from-gray-50 to-gray-300
		  dark:from-gray-600 dark:to-gray-800 sm:grid sm:content-center sm:items-center`,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <nav>
            <Navbar className="m-auto flex max-w-screen-xl items-center justify-between p-4" />
          </nav>
          <main className="m-auto flex h-full max-w-screen-xl flex-col justify-start gap-4">
            {children}
          </main>
          <Separator className="m-auto my-4 max-w-32 bg-black opacity-10 dark:opacity-30 sm:max-w-sm" />
          <footer className="mb-4 text-center">
            <span className="text-sm opacity-70">
              Joshua Caleb Bolito © {new Date().getFullYear()}
            </span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
