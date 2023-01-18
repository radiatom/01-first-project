import React from 'react';
import s from './Profile.module.css';
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
