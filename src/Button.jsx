export function Button({ theme, setTheme }) {
  function toggleTheme() {
    setTheme(() => (theme === "light" ? "dark" : "light"));
  }
  return (
    <button className={`btn__${theme}`} onClick={toggleTheme}>
      {theme === "light" ? "dark" : "light"}
    </button>
  );
}
