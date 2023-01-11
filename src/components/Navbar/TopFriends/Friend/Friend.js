import React from 'react';
import s from './Friend.module.css'


const Friend = (props) => {
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

export default Friend;
