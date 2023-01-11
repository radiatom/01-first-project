import React from 'react';
import s from './MyPosts.module.css'

const MyPosts = (props) => {

      return (
            <div className={s.myPosts}>
                  <h3>My post</h3>

                  <textarea
                        placeholder='Text'
                        onChange={props.onPostChange}
                        value={props.value}
                        cols="139" rows="3"
                  />

                  <button onClick={props.addPost}>Add post</button>

                  <div >
                        {props.posts}
                  </div>
            </div>
      );
}

export default MyPosts;

