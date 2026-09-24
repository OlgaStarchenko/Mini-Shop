import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function Product() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h3>Product</h3>
    </div>
  );
}
