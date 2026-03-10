import Menu from "./Menu";
import "./Header.css";
import Link from "next/link";

function Header() {
  return (
    <header>
      <button className="home-button">
        <Link className="home-link" href="/">
          <h2 className="big-w">W</h2>{" "}
        </Link>
      </button>
      <Menu />
    </header>
  );
}

export default Header;
