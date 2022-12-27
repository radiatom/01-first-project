import React from 'react';
import s from './Post.module.css'

const Post = () => {
      return (
            <div className={s.post}>
                  <img src="https://sputnik.kg/img/101808/12/1018081237_1488:0:4629:3455_1920x0_80_0_0_36b9c41458690f8543f8ce86421ba380.jpg" alt="" />

                  <div>
                        User post
                  </div>

                  <div>
                        <button>Like</button>
                  </div>
            </div>
      );
}

export default Post;
