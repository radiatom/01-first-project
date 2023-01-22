import React from 'react';
import { connect } from 'react-redux';
import TopFriends from './TopFriends';
import Friend from './Friend/Friend';


const mapStateToProps = (state) => {
    return {
        friends: state.navbarPage.map(el => {
            return (<Friend name={el.name} avatar={el.avatar} key={el.id} />)
        })
    }
}

const TopFriendsContainer = connect(mapStateToProps,{})(TopFriends)

export default TopFriendsContainer;
