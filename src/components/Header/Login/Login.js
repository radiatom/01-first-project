import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Register.module.css'
const Login = (props) => {
    return (
        <div className={s.register}>
            <div className={s.singIn}>
                <NavLink to="/singIn"> <button>singIn</button>  </NavLink>
            </div>

            <div className={s.singUp}>
                <NavLink to="/singUp"> <button>singUp</button>  </NavLink>
            </div>

        </div>
    );
}

export default Login;
