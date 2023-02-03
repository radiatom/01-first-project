import React from 'react';
import { connect } from 'react-redux';
import ProfileStatusRFC from './ProfileStatusRFC';
import {  putStatusText } from '../../../../redux/myProfileReducer';


const ProfileStatusContainer = React.memo((props) => {
    return (
        <div>
            <ProfileStatusRFC {...props}/>
        </div>
    );
})

const mapStateToProps=(state)=>{
    return{
        status:state.myProfilePage.status,
    }
}

export default connect (mapStateToProps,{putStatusText})(ProfileStatusContainer);

