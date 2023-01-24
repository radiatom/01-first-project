import React from 'react';
import s from './MyProfile.module.css';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import PostsContainer from './MyPosts/PostsContainer';

const MyProfile = (props) => {
      return (
            <div className={s.content}>

                  <ProfileInfoContainer />

                  <PostsContainer />

            </div>
      );
}

export default MyProfile;
