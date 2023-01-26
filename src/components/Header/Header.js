import React from "react";
import s from './Header.module.css'
import Login from "./Login/Login";

const Header = (props) => {
      return (
            <header className={s.header}>
                  <div>
                        {props.resultCode===0?(<div className={s.login} >{props.login}</div>):(<Login/>) }
                  </div>
                  <img
                        src="https://png.pngitem.com/pimgs/s/215-2152812_clip-art-letter-v-fonts-letter-v-transparent.png"
                        alt="logo"
                  />
            </header>
      );
};

export default Header;
