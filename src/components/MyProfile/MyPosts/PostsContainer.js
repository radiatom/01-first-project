import React from 'react';
import { connect } from 'react-redux';
import { addPost, setTextPost } from '../../../redux/myProfileReducer';
import Posts from './Posts';
import Post from './Post/Post';
import { reduxForm } from 'redux-form';



const PostsReduxForm = reduxForm({ form: 'postText' })(Posts)


const PostsContainer = (props) => {
        const onSubmit = (formData) => {
            props.setTextPost(formData.postText)
            props.addPost()
        }
    return (
        <div>
            <PostsReduxForm onSubmit={onSubmit} {...props}/>
        </div>
    );
}



const mapStateToProps = (state) => {
    return {
        value: state.myProfilePage.newPostTextData,
        posts: state.myProfilePage.myPostsData.map(el => {
            return (<Post myProfileData={state.myProfilePage.myProfileData} massage={el.massage} likeColum={el.likeColum} id={el.id} key={el.id} />)
        }),
    }
}

export default connect(mapStateToProps, {setTextPost,addPost})(PostsContainer)

