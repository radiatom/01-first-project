import React from 'react';
import s from './TopFriends.module.css'


const TopFriends = (props) => {
    return (
        <div className={s.topFriends}>
            {props.friends}
        </div>
    );
}

export default TopFriends;
