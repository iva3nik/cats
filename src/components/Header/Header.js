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
      <nav>
        <ul className={s.header__list}>
          {listNavigation &&
            listNavigation.map((link, index) => (
              <li className={s.header__li} key={link.title + index}>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? cn(s.header__link, s.header__link_active)
                      : s.header__link
                  }
                  to={link.to}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
