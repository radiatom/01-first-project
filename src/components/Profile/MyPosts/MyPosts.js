import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const postData=[
      {id:1,massage:'Hi, how a you?',likeColum:15},
      {id:2,massage:'Its my first post',likeColum:999}


]

const MyPosts = (props) => {
      return (
            <div className={s.myPosts}>
                  <h3>My post</h3>
                  <textarea cols="139" rows="3"  ></textarea>
                  <button>New post</button>

                  <div >
                        <Post massage={postData[0].massage} likeColum={postData[0].likeColum}/>

                        <Post massage={postData[1].massage} likeColum={postData[1].likeColum}/>

                        
                  </div>
            </div>
      );
}

export default MyPosts;

