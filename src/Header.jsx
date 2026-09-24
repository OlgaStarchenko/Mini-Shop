import { Menu } from "./Menu";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`header__${theme}`}>
      <h1>Mini Shop</h1>
      <Menu />
    </div>
  );
}
