import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
      return (
            <nav className={s.nav}>
                  <div className={s.navLink}>
                        <NavLink className={linkActive=>linkActive.isActive?s.active:s.navLink} to="/profile"> Profile </NavLink>
                  </div>

                  <div className={s.navLink}>
                        <NavLink className={linkActive=>linkActive.isActive?s.active:s.navLink} to="/dialogs">Dialogs</NavLink>
                  </div>

                  <div className={s.navLink}>
                        <NavLink className={linkActive=>linkActive.isActive?s.active:s.navLink} to="/news">News</NavLink>
                  </div>

                  <div className={s.navLink}>
                        <NavLink className={linkActive=>linkActive.isActive?s.active:s.navLink} to="/music">Music</NavLink>
                  </div>

                  <div className={s.navLink}>
                        <NavLink className={linkActive=>linkActive.isActive?s.active:s.navLink} to="/setting">Setting</NavLink>
                  </div>
            </nav>
      );
};

export default Navbar;
