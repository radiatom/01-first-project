import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { addUsersActionCreater, unfollowActionCreater, followActionCreater, setPageActionCreater, setTotalCountActionCreater } from '../../redux/usersReducer';
import axios from 'axios';


class UsersApiContainer extends Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.countUsersOnPage}`)
            .then(response => {
                this.props.addUsers([...response.data.items])
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    openPage = (el) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.countUsersOnPage}`)
            .then(response => {
                let users = [...response.data.items]
                this.props.addUsers(users)
            })
        this.props.setPage(el)
    }

    render() {
        return (
            <div>
                <Users
                    countUsers={this.props.countUsers}
                    countUsersOnPage={this.props.countUsersOnPage}
                    openPage={this.openPage}
                    pageNumber={this.props.pageNumber}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow} />
            </div>
        )
    }
}


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


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)

export default UsersContainer;
