import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import s from "./Header.module.scss";

const listNavigation = [
  { title: "Все котики", to: "/" },
  { title: "Любимые котики", to: "/favourite-cats" },
];

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.header__list}>
        {listNavigation &&
          listNavigation.map((link, index) => (
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? cn(s.header__link, s.header__link_active)
                  : s.header__link
              }
              to={link.to}
              key={link.title + index}
            >
              {link.title}
            </NavLink>
          ))}
      </nav>
    </header>
  );
};

export default Header;
