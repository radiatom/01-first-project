// import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { addUsersActionCreater, unfollowActionCreater, followActionCreater, setPageActionCreater, setTotalCountActionCreater } from '../../redux/usersReducer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageNumber: state.usersPage.pageNumber,
        countUsers: state.usersPage.countUsers,
        countUsersOnPage: state.usersPage.countUsersOnPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUsers: (users) => {
            dispatch(addUsersActionCreater(users))
        },
        follow: (userId) => {
            dispatch(followActionCreater(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreater(userId))
        },
        setPage: (number) => {
            dispatch(setPageActionCreater(number))
        },
        setTotalCount: (num) => {
            dispatch(setTotalCountActionCreater(num))
        },
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;
