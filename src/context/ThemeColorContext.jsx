import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeColorContext = createContext();

function ThemeColorProvider({ children }) {
  const colors = ["#c82222", "#FB4E93", "#00e57f", "#04dede", "#ffc107"];
  const [themeColor, setThemeColor] = useLocalStorage(colors[1], "themeColor");

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", themeColor);
  }, [themeColor]);

  function changeThemeColor(color) {
    setThemeColor(color);
  }

  return (
    <ThemeColorContext.Provider
      value={{ colors, themeColor, changeThemeColor }}
    >
      {children}
    </ThemeColorContext.Provider>
  );
}

function useThemeColor() {
  const themeColorContext = useContext(ThemeColorContext);
  if (themeColorContext === undefined) {
    throw new Error("useThemeColor must be used within a ThemeColorProvider");
  }
  return themeColorContext;
}

export { ThemeColorProvider, useThemeColor };
