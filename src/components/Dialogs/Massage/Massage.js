import React from 'react';
import s from './Massage.module.css'

const Massage = (props) => {
    return (
        <div className={s.dialog}>
            {props.massage}
            <img src={props.avatar} alt="" />
        </div>
    );
}

export default Massage;
