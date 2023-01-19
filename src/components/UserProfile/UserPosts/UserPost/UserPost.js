import React from 'react';
// import Preloader from '../../../Preloader/Preloader';
import s from './UserPost.module.css'


const UserPost = (props) => {
      return (
            <div className={s.userPost}>
                  <img src={props.profileData.photos === undefined || props.profileData.photos.small === null ?
                        "https://sputnik.kg/img/101808/12/1018081237_1488:0:4629:3455_1920x0_80_0_0_36b9c41458690f8543f8ce86421ba380.jpg"
                        : props.profileData.photos.small} alt="avatar"
                  />

                  {/* <img src={props.profileData.photos.small===null?
                        "https://sputnik.kg/img/101808/12/1018081237_1488:0:4629:3455_1920x0_80_0_0_36b9c41458690f8543f8ce86421ba380.jpg"
                        :props.profileData.photos.small} alt="avatar" 
                  /> */}

                  <div>
                        {props.massage}
                  </div>

                  <div>
                        <div>id {props.id}</div>
                        <button>Like</button>
                        <span>{props.likeColum}</span>
                  </div>
            </div>
      );
}

export default UserPost;