import "./App.css";
import { useState } from "react";
import { Header } from "./Header";
import { ProductList } from "./ProductList";

export function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <ProductList theme={theme} />
    </>
  );
}
