import { createContext, useState } from "react";

interface ThemeContext {
  theme: string;
  handleTheme(): void;
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

const initialTheme = "light";

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(initialTheme);
  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  /* @ts-ignore */
  return <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
