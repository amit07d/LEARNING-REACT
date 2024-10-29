import { useContext, createContext } from "react";

export const themeContext = createContext({
  themeMode: "Light",
  darkMode: () => { },
  lightMode: () => { }
})

export const ThemeProvider = themeContext.Provider

export default function useTheme() {
  return useContext(themeContext)
}