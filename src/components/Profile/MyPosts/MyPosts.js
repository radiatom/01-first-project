import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = (props) => {
      const newPostElement=React.createRef()
      

      const onPostChange=()=>{
            const newTextPost=newPostElement.current.value
            let action={
                  type:'UPDATE-NEW-POST-TEXT',
                  newTextPost:newTextPost
            }
            props.dispatch(action)
      }

      const myPostsData = props.myPostsData
      const posts = myPostsData.map(el => {
            return (<Post massage={el.massage} likeColum={el.likeColum} id={el.id}/>)
      })
      const click=()=>{
            let action={
                  type:'ADD-POST'
            }
            props.dispatch(action)
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

