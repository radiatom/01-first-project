import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
      return (
            <div className={s.post}>
                  
                  <img src={props.myProfileData.photos.small===null?
                        "https://sputnik.kg/img/101808/12/1018081237_1488:0:4629:3455_1920x0_80_0_0_36b9c41458690f8543f8ce86421ba380.jpg"
                        :props.myProfileData.photos.small} alt="avatar" 
                  />

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

export default Post;
