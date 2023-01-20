import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserPosts from './UserPosts/UserPosts';
import UserPost from './UserPosts/UserPost/UserPost';
import { setProfile } from '../../redux/userProfileReducer';
// import axios from 'axios';
import UserProfileInfo from './UserProfileInfo/UserProfileInfo';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { userProfileApi } from '../../api/api';

class UserProfileContainer extends Component {
    componentDidMount() {
        const userId = this.props.router.params.userId
        userProfileApi.getProfile(userId).then(data => {
                    this.props.setProfile(data)
                })

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        //     .then(response => {
        //         this.props.setProfile(response.data)
        //     })
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
const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => {
            dispatch(setProfile(profile))
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserProfileContainer));
