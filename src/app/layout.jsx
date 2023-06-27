"use client";
import "./globals.css";
import { themes } from "@/data/themes";
import { Nunito_Sans } from "next/font/google";
import { navigationScroll } from "@/utils/navigationScroll";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import useDarkTheme from "@/hooks/useDarkTheme";
import { useEffect } from "react";
const nunitoSans = Nunito_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [darkTheme, changeTheme] = useDarkTheme();
  useEffect(() => {
    navigationScroll();
  });

  return (
    <html lang="en" className={nunitoSans.className}>
      <head>
        <link rel="icon" href="/branding/logo.png" />
        <title>Joshua Caleb</title>
        <meta name="description" content="Hello, World!" />
      </head>
      <body
        id="home"
        className={`[&>*]py-8 m-auto bg-gradient-to-tr 
		bg-fixed bg-no-repeat transition-all duration-200 [&>header]:max-w-screen-xl
		[&>header]:p-4  ${darkTheme ? themes.dark.styles : themes.light.styles}`}
      >
        <Header darkTheme={darkTheme} changeTheme={changeTheme} />
        <main
          className={`mt-6 grid  snap-y snap-proximity scroll-p-10 justify-center 
			p-4 [&>section:not(:first-child)]:py-20 
			[&_section:last-child]:min-h-fit [&_section:last-child]:sm:min-h-[calc(100vh-200px)]
			[&_section]:max-w-screen-xl ${
        darkTheme
          ? `[&_#contact-form_input]:border-white [&_#contact-form_textarea]:border-white 
			  	[&_#home-contact_img]:invert
				[&_#projects_#project]:bg-[#9197AE30]
				[&_#technologies_img]:drop-shadow-[0px_2px_3px_rgba(250,250,250,0.25)]`
          : ""
      }`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
