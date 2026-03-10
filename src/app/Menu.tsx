import "./Menu.css";

function Menu() {
  return (
    <div className="nav-menu">
      <div className="menu-header">menu</div>
      <div className="burger-border">
        <img src={"/burger.svg"} className="burger" alt="Hamburger menu icon" />
      </div>
      <nav className="nav-menu-links">
        <div className="nav-menu-links__container">
          <a href="/portfolio">portfolio</a>
          <a href="/contact">contact</a>
          <a href="/about">about</a>
          <a href="https://entretemps.shop/">shop</a>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
