import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Register.module.css'
const Login = (props) => {
    return (
        <div className={s.register}>
            {props.login === null ?
                <NavLink to="/registeredForm"> Login </NavLink> :
                 props.login 
            }

        </div>
    );
}

export default Login;
