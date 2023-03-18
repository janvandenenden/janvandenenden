import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);

    const handleChange = (event) => {
      setDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return darkMode;
};

export default useDarkMode;
