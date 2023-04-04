import React from 'react';
import s from './MyFriends.module.css'
const MyFriends = () => {
    return (
        <div className={s.friends}>

            <div className={s.position}>
                <p>Карта місць що можна подивитись у львівській області:</p>
                <iframe className={s.mapContainer} src="https://www.google.com/maps/d/embed?mid=1lNpkn9sdcoO02BI4S84_5Rov1qQ&ehbc=2E312F" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={s.position}>
                <p>Карта де окопалися хробаки (стан на 4.04.23р) :</p>
                <iframe className={s.mapContainer} src="https://www.google.com/maps/d/embed?mid=1ZVsmwa6Fm2t-cPGqIoGOpZN3WxAZM1k&hl=ja&ehbc=2E312F" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


        </div>
    );
}

export default MyFriends;
