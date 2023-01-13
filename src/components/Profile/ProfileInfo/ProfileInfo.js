import React from 'react';
import s from './ProfileInfo.module.css'
import img from './../../../Img/profileInfo.jpg'

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src={img} alt="img" />
            </div>
            <div>Distription</div>
        </div>
    );
}

export default ProfileInfo;
