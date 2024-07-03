import { useState, useEffect } from "react";

const useTheme = () => {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark-mode"
        : "light-mode";
    }
    return "light-mode";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.className = theme;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currTheme) =>
      currTheme === "light-mode" ? "dark-mode" : "light-mode"
    );
  };

  return { theme, toggleTheme };
};

export default useTheme;
