import React, {createContext, useState} from 'react';
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const themeStyles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
    dark: {
      backgroundColor: '#333333',
      color: '#ffffff',
    },
  };

  const contextValue = {
    theme,
    toggleTheme,
    themeStyles,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div style={themeStyles[theme]}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };