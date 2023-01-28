import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileStatus from './ProfileStatus';
import { getMyStatus, updateStatus } from '../../../../redux/myProfileReducer';



const ProfileStatusContainer = (props) => {
    return (
        <div>
            <ProfileStatus {...props}/>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        status:state.myProfilePage.status,
        myUserId:state.auth.authData.data.id
    }
}

export default connect (mapStateToProps,{getMyStatus ,updateStatus})(ProfileStatusContainer);

