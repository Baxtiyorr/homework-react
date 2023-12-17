import { useState, useEffect } from 'react';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {

    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  useEffect(() => {

    document.body.classList.toggle('dark-mode', isDarkMode);

    
         localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return { isDarkMode, toggleTheme };
};

export default useTheme;