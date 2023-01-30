import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserPosts from './UserPosts/UserPosts';
import UserPost from './UserPosts/UserPost/UserPost';
import { getProfile } from '../../redux/userProfileReducer';
import UserProfileInfo from './UserProfileInfo/UserProfileInfo';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';


class UserProfileContainer extends Component {

    componentDidMount() {
        this.props.getProfile(this.props.router)
    }
    render() {
        return (
            <div>
                <UserProfileInfo profileData={this.props.userProfile.profileData} />
                <UserPosts posts={this.props.userProfile.PostsData.map(el => {
                    return (<UserPost profileData={this.props.userProfile.profileData} massage={el.massage} likeColum={el.likeColum} id={el.id} key={el.id} />)
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

export default compose(
    connect(mapStateToProps, { getProfile }),
    withRouter
)(UserProfileContainer)

