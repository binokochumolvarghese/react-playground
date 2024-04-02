import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function handleToggleTheme() {

    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const cnxtValue = {
    theme: theme,
    toggleTheme: handleToggleTheme,
  };

  return (
    <ThemeContext.Provider value={cnxtValue}>
      {children}
    </ThemeContext.Provider>
  );
}
