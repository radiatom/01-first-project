import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import { getMyProfile } from '../../../redux/myProfileReducer';

export const ProfileInfoContainer = (props) => {
    return (
        <div>
            <ProfileInfo/>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        myProfileData:state.myProfilePage.myProfileData,
        myUserId:state.auth.authData.data.id,
    }
}

export default connect(mapStateToProps,{getMyProfile}) (ProfileInfo);
