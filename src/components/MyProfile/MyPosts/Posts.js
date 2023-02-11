import React from 'react';
import s from './Posts.module.css'
import { Field } from 'redux-form';
import { TextArea } from '../../common/FromControls/FromControls';
import { required, maxLength } from '../../../utils/validators/validators';


const maxLength1000=maxLength(1000)

const Posts = (props) => {
      return (
            <div className={s.posts}>
                  <h3>Post</h3>
                  <form onSubmit={props.handleSubmit}>
                        <Field placeholder='Text' cols="15" rows="3"
                              name={'postText'}
                              component={TextArea}
                              validate={[required ,maxLength1000]} />
                        <button>Add post</button>
                  </form>

                  <div >
                        {props.posts}
                  </div>
            </div>
      );
}

export default Posts;

