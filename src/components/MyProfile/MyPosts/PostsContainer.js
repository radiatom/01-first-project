import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/myProfileReducer';
import Posts from './Posts';
import Post from './Post/Post';


const mapStateToProps = (state) => {
    return {
        value: state.myProfilePage.newPostTextData,
        posts: state.myProfilePage.myPostsData.map(el => {
            return (<Post myProfileData={state.myProfilePage.myProfileData} massage={el.massage} likeColum={el.likeColum} id={el.id} key={el.id} />)
        }),
    }
}

const PostsContainer = connect(mapStateToProps, {updateNewPostText,addPost})(Posts)


export default PostsContainer;
