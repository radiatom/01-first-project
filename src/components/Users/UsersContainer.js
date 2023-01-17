import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { addUsers, unfollow, follow, setPage, setTotalCount, toggleIsFetching } from '../../redux/usersReducer';
import axios from 'axios';

class UsersApiContainer extends Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.countUsersOnPage}`)
            .then(response => {
                this.props.addUsers([...response.data.items])
                this.props.setTotalCount(response.data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    openPage = (el) => {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.countUsersOnPage}`)
            .then(response => {
                let users = [...response.data.items]
                this.props.addUsers(users)
                this.props.toggleIsFetching(false)
            })
        this.props.setPage(el)
    }

    render() {
        return (
            <div>
                <Users
                    isFetching={this.props.isFetching}
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
        isFetching: state.usersPage.isFetching,
        users: state.usersPage.users,
        pageNumber: state.usersPage.pageNumber,
        countUsers: state.usersPage.countUsers,
        countUsersOnPage: state.usersPage.countUsersOnPage,
    }
}
export default connect(mapStateToProps, {
    toggleIsFetching,
    addUsers,
    follow,
    unfollow,
    setTotalCount
})(UsersApiContainer)

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toogleIsFetching: (isFetching) => {
//             dispatch(isFetchingActionCreater(isFetching))
//         },
//         addUsers: (users) => {
//             dispatch(addUsersActionCreater(users))
//         },
//         follow: (userId) => {
//             dispatch(followActionCreater(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreater(userId))
//         },
//         setPage: (number) => {
//             dispatch(setPageActionCreater(number))
//         },
//         setTotalCount: (num) => {
//             dispatch(setTotalCountActionCreater(num))
//         },
//     }
// }