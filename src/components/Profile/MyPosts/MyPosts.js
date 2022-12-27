import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
      return (
            <div className={s.myPosts}>
                  <h3>My post</h3>

                  <button>New post</button>

                  <div >
                        <Post />

                        <Post />

                        <Post />
                  </div>
            </div>
      );
}

export default MyPosts;

