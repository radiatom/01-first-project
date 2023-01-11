import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src="https://as2.ftcdn.net/v2/jpg/02/99/73/07/1000_F_299730781_D2CZYaxecEerqAAlRZZushSUml5Tm5Kq.jpg" alt="img" />
            </div>
            <div>Distription</div>
        </div>
    );
}

export default ProfileInfo;
