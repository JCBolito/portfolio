"use client";
import "./globals.css";
import Header from "@/components/Header/Header";
import { themes } from "@/data/themes";
import { Nunito_Sans } from "next/font/google";
import { useEffect, useState } from "react";
const nunitoSans = Nunito_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  let storedDarkTheme;
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    storedDarkTheme = localStorage.getItem("jcdb.darkTheme");
    setDarkTheme(storedDarkTheme == "true");
  });

  function changeTheme() {
    setDarkTheme((prevState) => {
      localStorage.removeItem("jcdb.darkTheme");
      localStorage.setItem("jcdb.darkTheme", `${!prevState}`);
      return !prevState;
    });
  }

  return (
    <html lang="en" className={nunitoSans.className}>
      <head>
        <link rel="icon" href="/branding/logo.png" />
        <title>Joshua Caleb</title>
        <meta name="description" content="Hello, World!" />
      </head>
      <body
        className={`m-auto min-h-screen max-w-screen-xl scroll-smooth bg-gradient-to-tr 
         bg-no-repeat p-4 py-8 transition-all duration-200 ${
           darkTheme ? themes.dark.styles : themes.light.styles
         }`}
      >
        <Header darkTheme={darkTheme} changeTheme={changeTheme} />
        <main
          className={`pt-8 ${
            darkTheme
              ? "[&_img]:drop-shadow-[0px_2px_3px_rgba(250,250,250,0.25)]"
              : ""
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
