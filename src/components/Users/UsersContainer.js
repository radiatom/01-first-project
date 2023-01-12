import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { unfollowActionCreater, followActionCreater } from '../../redux/usersReducer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreater(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreater(userId))
        },
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;
