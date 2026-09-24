import "./App.css";
import { useState } from "react";
import { Header } from "./Header";
import { ProductList } from "./ProductList";
import { ThemeContext } from "./ThemeContext";

export function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <ProductList />
      </ThemeContext.Provider>
    </>
  );
}
