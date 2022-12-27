import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.js';

const Profile = () => {
      return (
            <div className={s.content}>
                  <img src="https://as2.ftcdn.net/v2/jpg/02/99/73/07/1000_F_299730781_D2CZYaxecEerqAAlRZZushSUml5Tm5Kq.jpg" alt="img" />

                  <p>description</p>

                  <MyPosts />

            </div>
      );
}

export default Profile;
