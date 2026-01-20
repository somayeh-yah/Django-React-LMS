import { createContext, useContext, useEffect } from "react";
import { useThemeStore } from "../store/themeStore";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const { userPreference, toggleTheme } = useThemeStore();
  const setRootClass = (theme) => {
    document.documentElement.classList.toggle(
      "dark",
      userPreference === "dark",
    );
  };
  useEffect(() => {
    setRootClass(userPreference);
  }, [userPreference]);

  return (
    <ThemeContext.Provider value={{ userPreference, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
