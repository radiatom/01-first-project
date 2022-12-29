import React from 'react';
import s from './Massage.module.css'

const Massage = (props) => {
    return (
        <div className={s.dialog}>
            {props.massage}
        </div>
    );
}

export default Massage;
