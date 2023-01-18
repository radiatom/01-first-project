import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserPosts from './UserPosts/UserPosts';
import UserPost from './UserPosts/UserPost/UserPost';
import { setProfile } from '../../redux/userProfileReducer';
import axios from 'axios';
import UserProfileInfo from './UserProfileInfo/UserProfileInfo';


class UserProfileContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfile(response.data)
            })
    }
    render() {
        return (
            <div>
                <UserProfileInfo profileData={this.props.userProfile.profileData} />
                <UserPosts  posts={this.props.userProfile.PostsData.map(el => {
                    return (<UserPost profileData={this.props.userProfile.profileData}  massage={el.massage} likeColum={el.likeColum} id={el.id} key={el.id} />)
                })} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => {
            dispatch(setProfile(profile))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
