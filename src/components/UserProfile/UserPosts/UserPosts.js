import React from 'react';
import s from './UserPosts.module.css'


const UserPosts = (props) => {
    return (
        <div className={s.userPosts}>
            {props.posts}
        </div>
    );
}

export default UserPosts;
