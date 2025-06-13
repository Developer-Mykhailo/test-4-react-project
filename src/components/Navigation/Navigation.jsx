//Navigation.jsx

import clsx from "clsx";
import s from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(s.link, isActive && s.accent)}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => clsx(s.link, isActive && s.accent)}
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => clsx(s.link, isActive && s.accent)}
      >
        Contact
      </NavLink>

      <NavLink
        to="/users"
        className={({ isActive }) => clsx(s.link, isActive && s.accent)}
      >
        Users
      </NavLink>
    </nav>
  );
};

export default Navigation;
