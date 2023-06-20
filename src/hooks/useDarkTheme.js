"use client";
import { useState, useEffect } from "react";
export default function useDarkTheme() {
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

  return [darkTheme, changeTheme];
}
