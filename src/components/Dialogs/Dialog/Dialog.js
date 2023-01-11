import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css'


const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <div>
                <img src={props.avatar} alt="" />
            </div>

            <div>
                <NavLink to={'/dialogs/' + props.id} className={linkActive => linkActive.isActive ? s.active : s.dialogsItems}>
                    {props.name}
                </NavLink>
            </div>


        </div>
    );
}


export default Dialog;
