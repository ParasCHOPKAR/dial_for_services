"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "current";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dfs_theme") || localStorage.getItem("kk_theme");
      if (saved === "light" || saved === "logo") {
        setThemeState("light");
        document.documentElement.setAttribute("data-theme", "light");
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      } else {
        // Default to dark mode (black background)
        setThemeState("dark");
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }
    } catch (e) {
      console.error(e);
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    const canonicalTheme = newTheme === "dark" || newTheme === "current" ? "dark" : "light";
    setThemeState(canonicalTheme);
    try {
      localStorage.setItem("dfs_theme", canonicalTheme);
      document.documentElement.setAttribute("data-theme", canonicalTheme);
      if (canonicalTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" || theme === "current" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
