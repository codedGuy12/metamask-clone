import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeObject = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return { toggleTheme, theme };
};

// 2nd Step 2
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
    console.log("This runs once");
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
