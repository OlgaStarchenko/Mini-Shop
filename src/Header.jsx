import { Menu } from "./Menu";

export function Header({ theme, setTheme }) {
  return (
    <div className={`header__${theme}`}>
      <h1>Mini Shop</h1>
      <Menu theme={theme} setTheme={setTheme} />
    </div>
  );
}
