import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {addUsersActionCreater, unfollowActionCreater, followActionCreater } from '../../redux/usersReducer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUsers:(users)=>{
            dispatch(addUsersActionCreater(users))
        },
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
