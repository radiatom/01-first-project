import React from 'react';
import s from './Posts.module.css'
import { Field } from 'redux-form';


const Posts = (props) => {

      return (
            <div className={s.posts}>
                  <h3>Post</h3>
                  <form onSubmit={props.handleSubmit}>
                        <Field placeholder='Text' cols="139" rows="3" name={'postText'} component={'textarea'}/>
                        <button>Add post</button>
                  </form>

                  <div >
                        {props.posts}
                  </div>
            </div>
      );
}

export default Posts;

