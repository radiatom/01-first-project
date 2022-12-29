import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src="https://sputnik.kg/img/101808/12/1018081237_1488:0:4629:3455_1920x0_80_0_0_36b9c41458690f8543f8ce86421ba380.jpg" alt="" />
            </div>
            <div>Distription</div>
        </div>
    );
}

export default ProfileInfo;
