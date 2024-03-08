import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'
import clsx from "clsx";

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
}

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={linkClass}>
        Movies
      </NavLink>
    </nav>
  )
}



