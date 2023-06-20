"use client";
import "./globals.css";
import Header from "@/components/Header/Header";
import { themes } from "@/data/themes";
import { Nunito_Sans } from "next/font/google";
import useDarkTheme from "@/hooks/useDarkTheme";
const nunitoSans = Nunito_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [darkTheme, changeTheme] = useDarkTheme();
  return (
    <html lang="en" className={nunitoSans.className}>
      <head>
        <link rel="icon" href="/branding/logo.png" />
        <title>Joshua Caleb</title>
        <meta name="description" content="Hello, World!" />
      </head>
      <body
        className={`m-auto min-h-screen max-w-screen-xl scroll-smooth bg-gradient-to-tr 
         bg-fixed bg-no-repeat p-4 py-8 transition-all duration-200 ${
           darkTheme ? themes.dark.styles : themes.light.styles
         }`}
      >
        <Header darkTheme={darkTheme} changeTheme={changeTheme} />
        <main
          className={`pt-8 ${
            darkTheme
              ? `[&_#contact-form_input]:border-white [&_#contact-form_textarea]:border-white 
			  	[&_#home-contact_img]:invert
				[&_#technologies_img]:drop-shadow-[0px_2px_3px_rgba(250,250,250,0.25)]`
              : ""
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
