import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { addUsers, unfollow, follow, setPage, setTotalCount, toggleIsFetching, progressFollowing } from '../../redux/usersReducer';
// import axios from 'axios';
import { usersApi } from '../../api/api';
class UsersApiContainer extends Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getAddUsers(this.props.pageNumber, this.props.countUsersOnPage)
            .then(data => {
                this.props.addUsers([...data.items])
                this.props.setTotalCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    openPage = (el) => {
        this.props.toggleIsFetching(true)
        usersApi.getAddUsers2(el, this.props.countUsersOnPage)
            // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.countUsersOnPage}`,{withCredentials:true})
            .then(data => {
                let users = [...data.items]
                this.props.addUsers(users)
                this.props.toggleIsFetching(false)
            })
        this.props.setPage(el)
    }

    render() {
        return (
            <div>
                <Users
                    inProgressFollowing={this.props.inProgressFollowing}
                    progressFollowing={this.props.progressFollowing}
                    addUsers={this.props.addUsers}
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
        inProgressFollowing: state.usersPage.inProgressFollowing,
        isFetching: state.usersPage.isFetching,
        users: state.usersPage.users,
        pageNumber: state.usersPage.pageNumber,
        countUsers: state.usersPage.countUsers,
        countUsersOnPage: state.usersPage.countUsersOnPage,
    }
}
export default connect(mapStateToProps, {
    progressFollowing,
    setPage,
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