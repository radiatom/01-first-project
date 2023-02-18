import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import TopFriendsContainer from "./TopFriends/TopFriendsContainer";
import burger from './../../Img/android-chrome-512x512.png'
import MyTelegram from "../MyTelegram/MyTelegram";

const Navbar = (props) => {
      return (
            <div className={s.drop}>
                  <img className={s.navbarBurger} src={burger} alt="" />
                  <div className={s.navbarDiv}>
                        <nav className={s.nav}>
                              <div className={s.navLink}>
                                    <NavLink className={linkActive => linkActive.isActive ? s.active : s.navLink} to="/myProfile">My profile</NavLink>
                              </div>

                              <div className={s.navLink}>
                                    <NavLink className={linkActive => linkActive.isActive ? s.active : s.navLink} to="/dialogs">Dialogs</NavLink>
                              </div>

                              <div className={s.navLink}>
                                    <NavLink className={linkActive => linkActive.isActive ? s.active : s.navLink} to="/news">News</NavLink>
                              </div>

                              <div className={s.navLink}>
                                    <NavLink className={linkActive => linkActive.isActive ? s.active : s.navLink} to="/music">Music</NavLink>
                              </div>

                              <div className={s.navLink}>
                                    <NavLink className={linkActive => linkActive.isActive ? s.active : s.navLink} to="/setting">Setting</NavLink>
                              </div>

                              <div className={s.navLink}>
                                    <NavLink className={linkActive => linkActive.isActive ? s.active : s.navLink} to='/myFriends'>My friends</NavLink>
                              </div>
                              <div className={s.navLink}>
                                    <NavLink className={linkActive => linkActive.isActive ? s.active : s.navLink} to='/users'>Find users</NavLink>
                              </div>

                              <div>
                                    {/* <TopFriendsContainer /> */}
                              </div>

                        </nav>
                        <MyTelegram />
                  </div>

            </div>
      );
};

export default Navbar;
