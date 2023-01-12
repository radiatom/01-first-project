import React from 'react';
import { connect } from 'react-redux';
import { addPosstActionCreater, updateNewPostTextActionCreater } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import Post from './Post/Post';


const mapStateToProps = (state) => {
    return {
        value: state.profilePage.newPostTextData,
        posts: state.profilePage.myPostsData.map(el => {
            return (<Post massage={el.massage} likeColum={el.likeColum} id={el.id} key={el.id} />)
        }),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (event) => {
            const newTextPost = event.target.value
            dispatch(updateNewPostTextActionCreater(newTextPost))
        },
        addPost: () => {
            dispatch(addPosstActionCreater())
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
