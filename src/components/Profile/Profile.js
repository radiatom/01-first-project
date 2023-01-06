import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.js';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

      return (
            
            <div className={s.content}>

                  <ProfileInfo />

                  <MyPosts
                        myPostsData={props.myPostsData}
                        newPostTextData={props.newPostTextData}
                        dispatch={props.dispatch}
                  />

            </div>
      );
}

export default Profile;
