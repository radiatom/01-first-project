import React from "react";
import s from './Header.module.css'
import Login from "./Login/Login";
import logo from './../../Img/logo.gif'


const Header = (props) => {
      return (
            <header className={s.header}>
                  <div>
                        {props.resultCode===0?(<div className={s.login} >{props.login}</div>):(<Login/>) }
                  </div>
                  <img
                        src={logo}
                        alt="logo"
                  />
            </header>
      );
};

export default Header;
