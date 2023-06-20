"use client";
import "./globals.css";
import Header from "@/components/Header/Header";
import { themes } from "@/data/themes";
import { Nunito_Sans } from "next/font/google";
import useDarkTheme from "@/hooks/useDarkTheme";
import { useEffect } from "react";
const nunitoSans = Nunito_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [darkTheme, changeTheme] = useDarkTheme();
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLink = document.querySelectorAll("header nav a");
    window.onscroll = () => {
      sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 300;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");
        if (top > offset && top < offset + height) {
          console.log(id);
          const navigations = document.querySelectorAll(
            `header nav a[href*=${id}]`
          );
          navLink.forEach((links) => {
            links.classList.remove(
              "border-[#DD0426]",
              "bg-[#DD0426]",
              "font-extrabold",
              "text-white",
              "hover:text-white"
            );
            navigations[0].classList.add(
              "border-[#DD0426]",
              "bg-[#DD0426]",
              "font-extrabold",
              "text-white",
              "hover:text-white"
            );
            navigations[1].classList.add(
              "border-[#DD0426]",
              "bg-[#DD0426]",
              "font-extrabold",
              "text-white",
              "hover:text-white"
            );
          });
        }
      });
    };
  });

  return (
    <html lang="en" className={nunitoSans.className}>
      <head>
        <link rel="icon" href="/branding/logo.png" />
        <title>Joshua Caleb</title>
        <meta name="description" content="Hello, World!" />
      </head>
      <body
        className={`m-auto max-w-screen-xl bg-gradient-to-tr bg-fixed 
		bg-no-repeat p-4 py-8 transition-all duration-200  ${
      darkTheme ? themes.dark.styles : themes.light.styles
    }`}
      >
        <Header darkTheme={darkTheme} changeTheme={changeTheme} />
        <main
          className={`mt-6 grid  snap-y  snap-proximity scroll-p-10 justify-center [&>section:not(:first-child)]:py-20 ${
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
