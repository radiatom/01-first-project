import React from 'react';
import MyFriends from './MyFriends';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';

const AuthNavigate=withAuthNavigate(MyFriends)

const MyFriendsContainer = (props) => {
    return (
        <AuthNavigate {...props}/>
    );
}

export default MyFriendsContainer;
