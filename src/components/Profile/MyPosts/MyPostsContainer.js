import React from 'react';
import MyPosts from './MyPosts';
import Post from './Post/Post';
import { addPosstActionCreater } from '../../../redux/profileReducer';
import { updateNewPostTextActionCreater } from '../../../redux/profileReducer';

const MyPostsContainer = (props) => {
    const state=props.store.getState()

    const posts = state.profileData.myPostsData.map(el => {
        return (<Post massage={el.massage} likeColum={el.likeColum} id={el.id} />)
    })

    const onPostChange = (event) => {
        const newTextPost = event.target.value
        props.store.dispatch(updateNewPostTextActionCreater(newTextPost))
    }

    const click = () => {
        props.store.dispatch(addPosstActionCreater())
    }

    return (
        <div>
            <MyPosts
                onPostChange={onPostChange}
                click={click}
                posts={posts}
                value={state.profileData.newPostTextData} />
        </div>
    );
}

export default MyPostsContainer;
