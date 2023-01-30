import React from 'react';
import MyProfile from './MyProfile';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';

const AuthNavigateComponent=withAuthNavigate(MyProfile)

const MyProfileContainer = (props) => {
    return (
        <div>
            <AuthNavigateComponent {...props}/>
        </div>
    );
}

export default MyProfileContainer;
