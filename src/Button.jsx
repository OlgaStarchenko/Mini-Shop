import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  function toggleTheme() {
    setTheme(() => (theme === "light" ? "dark" : "light"));
  }
  return (
    <button className={`btn__${theme}`} onClick={toggleTheme}>
      {theme === "light" ? "dark" : "light"}
    </button>
  );
}
