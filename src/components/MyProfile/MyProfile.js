import React from 'react';
import s from './MyProfile.module.css';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import PostsContainer from './MyPosts/PostsContainer';

const Profile = (props) => {
      return (
            <div className={s.content}>

                  <ProfileInfoContainer />

                  <PostsContainer />

            </div>
      );
}

export default Profile;