import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = (props) => {
      const newPostElement=React.createRef()
      const addPost=()=>{
            const text=newPostElement.current.value
            alert(text)
      }

      const postData = props.postData

      const posts = postData.map(el => {
            return (<Post massage={el.massage} likeColum={el.likeColum} />)
      })

      return (
            <div className={s.myPosts}>
                  <h3>My post</h3>
                  
                  <textarea ref={newPostElement} cols="139" rows="3"  ></textarea>

                  <button onClick={addPost}>Add post</button>

                  <div >
                        {posts}
                  </div>
            </div>
      );
}

export default MyPosts;

