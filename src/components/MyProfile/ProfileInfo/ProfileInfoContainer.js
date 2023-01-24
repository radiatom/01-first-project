import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';


export const ProfileInfoContainer = (props) => {
    return (
        <div>
            <ProfileInfo/>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        myProfileData:state.myProfilePage.myProfileData
    }
}

export default connect(mapStateToProps,{}) (ProfileInfo);
