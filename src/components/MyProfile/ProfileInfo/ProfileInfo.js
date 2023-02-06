import React from 'react';
import s from './ProfileInfo.module.css'
import img from './../../../Img/profileInfo.jpg'
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer'


const ProfileInfo = React.memo((props) => {
    return (
        <div className={s.profileInfo}>
                <div className={s.wallpaper}>
                    <img src={img} alt="img" />
                </div>
                <div className={s.avatar}>
                    <div>
                        <img src={props.myProfileData.photos.large === null ?
                            "https://sputnik.kg/img/101808/12/1018081237_1488:0:4629:3455_1920x0_80_0_0_36b9c41458690f8543f8ce86421ba380.jpg"
                            : 
                            props.myProfileData.photos.large} 
                            alt="avatar"
                        />
                    </div>
                </div>
                <div>
                    <h2>
                        {props.myProfileData.fullName}
                    </h2>
                </div>
                <div>
                    <ProfileStatusContainer />
                </div>

                <div>
                    <h3>
                        About me: {props.myProfileData.aboutMe}
                    </h3>
                </div>
            </div>
    );
})

export default ProfileInfo;


