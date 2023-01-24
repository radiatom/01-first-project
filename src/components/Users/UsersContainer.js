import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
    addUsers, setPage, setTotalCount,
    toggleIsFetching, progressFollowing, deleteUnfollowThunkCreator,
    deleteАollowThunkCreator, openNumberPage, addUsersOnPage
} from '../../redux/usersReducer';


class UsersApiContainer extends Component {


    componentDidMount() {
        this.props.addUsersOnPage(this.props.pageNumber, this.props.countUsersOnPage)
    }

    render() {
        return (
            <div>
                <Users
                    countPages={this.countPages}
                    openNumberPage={this.props.openNumberPage}
                    deleteАollowThunkCreator={this.props.deleteАollowThunkCreator}
                    deleteUnfollowThunkCreator={this.props.deleteUnfollowThunkCreator}
                    inProgressFollowing={this.props.inProgressFollowing}
                    isFetching={this.props.isFetching}
                    countUsers={this.props.countUsers}
                    countUsersOnPage={this.props.countUsersOnPage}
                    openPage={this.openPage}
                    pageNumber={this.props.pageNumber}
                    users={this.props.users}
                />
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
    addUsersOnPage,
    openNumberPage,
    deleteАollowThunkCreator,
    deleteUnfollowThunkCreator,
    progressFollowing,
    setPage,
    toggleIsFetching,
    addUsers,
    setTotalCount
})(UsersApiContainer)

