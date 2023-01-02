import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.js';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
      return (
            <div className={s.content}>

                  <ProfileInfo />

                  <MyPosts postData={props.postData} addPost={props.addPost}/>

            </div>
      );
}

export default Profile;
