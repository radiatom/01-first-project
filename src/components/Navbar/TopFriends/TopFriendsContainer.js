import React from 'react';
import { connect } from 'react-redux';
import TopFriends from './TopFriends';
import Friend from './Friend/Friend';


const mapStateToProps = (state) => {
    return {
        friends: state.navbarData.map(el => {
            return (<Friend name={el.name} avatar={el.avatar} key={el.id} />)
        })
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const TopFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(TopFriends)

export default TopFriendsContainer;
