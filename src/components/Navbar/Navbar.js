import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
      return (
            <nav className={s.nav}>
                  <div>
                        <a href="#s">Profile</a>
                  </div>

                  <div>
                        <a href="#s">Messeges</a>
                  </div>

                  <div>
                        <a href="#s">News</a>
                  </div>

                  <div>
                        <a href="#s">Music</a>
                  </div>

                  <div>
                        <a href="#s">Setting</a>
                  </div>
            </nav>
      );
};

export default Navbar;
