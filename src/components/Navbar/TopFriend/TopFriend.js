import React from 'react';
import s from './TopFriend.module.css'

const TopFriiend = (props) => {
    return (
        <div className={s.topFriend}>
            <div>
                <img src={props.avatar} alt="" />
            </div>

            <div>
                {props.name}
            </div>
        </div>
    );
}

export default TopFriiend;
