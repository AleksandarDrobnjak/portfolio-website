"use client";
import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContexProviderProps = {
  children: React.ReactNode;
};

type ThemeContexType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContex = createContext<ThemeContexType | null>(null);

export default function ThemeContexProvider({
  children,
}: ThemeContexProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <ThemeContex.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContex.Provider>
  );
}

export function useTheme(){
  const context = useContext(ThemeContex);

  if(context === null){
    throw new Error("useTheme must be used within a ThemeContexProvider");
  }
  return context;
}