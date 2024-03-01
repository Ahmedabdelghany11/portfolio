import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeModeContext = createContext();

function ThemeModeProvider({ children }) {
  const [isDark, setIsDark] = useLocalStorage(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "darkMode"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDark);
    document.documentElement.classList.toggle("light-mode", !isDark);
  }, [isDark]);

  function toggleMode() {
    setIsDark((dark) => !dark);
  }

  return (
    <ThemeModeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

function useThemeMode() {
  const themeModeContext = useContext(ThemeModeContext);
  if (themeModeContext === undefined) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return themeModeContext;
}

export { ThemeModeProvider, useThemeMode };
