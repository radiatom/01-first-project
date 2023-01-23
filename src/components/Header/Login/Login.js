import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Register.module.css'
const Login = (props) => {
    return (
        <div className={s.register}>
            <div>
                <NavLink to="/singIn"> <button>singIn</button>  </NavLink>
            </div>
            <div>
                <NavLink to="/singUp"> <button>singUp</button>  </NavLink>
            </div>

        </div>
    );
}

export default Login;
