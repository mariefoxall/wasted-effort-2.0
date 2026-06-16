import Menu from "./Menu";
import "./Header.css";
import Link from "next/link";

function Header() {
  return (
    <header>
      <Link className="home-button home-link" href="/" aria-label="Home">
        <span className="big-w" aria-hidden="true">
          W
        </span>
      </Link>
      <Menu />
    </header>
  );
}

export default Header;
