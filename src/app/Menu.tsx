"use client";

import { useRef, useState } from "react";
import "./Menu.css";

function Menu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  function closeMenu() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onMenuKeyDown(e: React.KeyboardEvent<HTMLUListElement>) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
    }
  }

  function onNavBlur(e: React.FocusEvent<HTMLElement>) {
    const nextFocused = e.relatedTarget as Node | null;

    if (!nextFocused || !navRef.current?.contains(nextFocused)) {
      setOpen(false);
    }
  }

  return (
    <nav
      ref={navRef}
      className="nav-menu"
      aria-label="Primary"
      onBlur={onNavBlur}
    >
      <button
        ref={buttonRef}
        type="button"
        className="menu-trigger"
        aria-expanded={open}
        aria-controls="primary-nav-links"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-header">menu</span>
        <span className="burger-border">
          <img src="/burger.svg" className="burger" alt="" aria-hidden="true" />
        </span>
      </button>

      <ul
        id="primary-nav-links"
        className="nav-menu-links__container"
        hidden={!open}
        onKeyDown={onMenuKeyDown}
      >
        <li>
          <a href="/portfolio">portfolio</a>
        </li>
        <li>
          <a href="/contact">contact</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <a href="https://entretemps.shop/">shop</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
