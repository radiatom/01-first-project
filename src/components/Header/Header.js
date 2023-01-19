import React from "react";
import s from './Header.module.css'
import Login from "./Login/Login";

const Header = (props) => {
      return (
            <header className={s.header}>
                  <div>
                        <Login login={props.login}/>
                  </div>
                  <img
                        src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
                        alt="logo"
                  />
            </header>
      );
};

export default Header;
