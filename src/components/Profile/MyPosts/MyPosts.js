import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { addPosstActionCreater } from '../../../redux/store';
import { updateNewPostTextActionCreater } from '../../../redux/store';


const MyPosts = (props) => {
      const newPostElement = React.createRef()


      const onPostChange = () => {
            const newTextPost = newPostElement.current.value
            props.dispatch(updateNewPostTextActionCreater(newTextPost))
      }

      const myPostsData = props.myPostsData
      const posts = myPostsData.map(el => {
            return (<Post massage={el.massage} likeColum={el.likeColum} id={el.id} />)
      })
      const click = () => {
            props.dispatch(addPosstActionCreater())
      }

      return (
            <div className={s.myPosts}>
                  <h3>My post</h3>

                  <textarea
                        onChange={onPostChange}
                        value={props.newPostTextData}
                        ref={newPostElement} cols="139" rows="3" />

                  <button onClick={click}>Add post</button>

                  <div >
                        {posts}
                  </div>
            </div>
      );
}

export default MyPosts;

