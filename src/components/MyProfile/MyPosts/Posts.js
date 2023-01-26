import React from 'react';
import s from './Posts.module.css'

const Posts = (props) => {

      return (
            <div className={s.posts}>
                  <h3>Post</h3>

                  <textarea
                        placeholder='Text'
                        onChange={e=>props.updateNewPostText(e.target.value)}
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

export default Posts;

