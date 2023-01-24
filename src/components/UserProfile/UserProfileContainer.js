import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserPosts from './UserPosts/UserPosts';
import UserPost from './UserPosts/UserPost/UserPost';
import {  getProfile } from '../../redux/userProfileReducer';
import UserProfileInfo from './UserProfileInfo/UserProfileInfo';
import { useLocation, useNavigate, useParams, } from "react-router-dom";


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


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
//№60 withRouter це заглушка, цієї фукції не треба коли ми в фукціональному компоненті, в функціональній використовують хуки, але 
// оскільки ми в класовій тому треба написати цю заглушку.

export default connect(mapStateToProps, {getProfile})(withRouter(UserProfileContainer));
