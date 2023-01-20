import React from 'react';
import s from './ProfileInfo.module.css'
import img from './../../../Img/profileInfo.jpg'

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.wallpaper}>
                <img src={img} alt="img" />
            </div>
            <div className={s.avatar}>
                <img src={props.profileData.photos.large === null ?
                    "https://sputnik.kg/img/101808/12/1018081237_1488:0:4629:3455_1920x0_80_0_0_36b9c41458690f8543f8ce86421ba380.jpg"
                    : props.profileData.photos.large} alt="avatar"
                />
            </div>
            <div>
                <h2>
                    {props.profileData.fullName}
                </h2>
            </div>
            <div>
                <h3>
                    About me: {props.profileData.aboutMe}
                </h3>
            </div>
        </div>
    );
}

export default ProfileInfo;
