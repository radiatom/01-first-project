import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
      return (
            <div className={s.myPosts}>
                  <h3>My post</h3>

                  <button>New post</button>

                  <div >
                        <Post massage='Hi, how a you?' likeColum='15'/>

                        <Post massage='It`s my first post' likeColum='20'/>

                        
                  </div>
            </div>
      );
}

export default MyPosts;

