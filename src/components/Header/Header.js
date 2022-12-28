import React from "react";
import s from './Header.module.css'

const Header = (props) => {
      return (
            <header className={s.header}>
                  <img
                        src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
                        alt="logo"
                  />
            </header>
      );
};

export default Header;
