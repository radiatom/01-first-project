import React from 'react';
import s from './User.module.css'
import { NavLink } from 'react-router-dom';
import avatar from './../../../Img/avatar.jpg'


const User = ({el,...props}) => {
    return (
        <div key={el.id} className={s.user}>
            <div>
                <NavLink to={'/userProfile/' + el.id}>
                    <img src={el.photos.small === null ? avatar : el.photos.small} alt="avatar" />
                </NavLink>
            </div>

            <div>
                {el.followed ?
                    <button disabled={props.inProgressFollowing.some(e => e === el.id)} onClick={() => {
                        props.deleteUnfollowThunkCreator(el.id)
                    }}>Unfollow</button>
                    :
                    <button disabled={props.inProgressFollowing.some(e => e === el.id)} onClick={() => {
                        props.postFollowThunkCreator(el.id)
                    }}>Follow</button>
                }
            </div>

            <div>
                {el.name} {el.last_name}
            </div>
        </div>
    );
}

export default User;
