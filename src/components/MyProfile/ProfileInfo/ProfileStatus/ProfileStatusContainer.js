import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileStatus from './ProfileStatus';
import { getMyStatus, putStatusText } from '../../../../redux/myProfileReducer';
import { reduxForm } from 'redux-form';


const StatusReduxForm = reduxForm({ form: 'statusText' })(ProfileStatus)

const ProfileStatusContainer = (props) => {
    const onSubmit = (formData) => {
        formData.statusText===undefined?props.putStatusText('Status'):
        props.putStatusText(formData.statusText)
    }
    return (
        <div>
            <StatusReduxForm onSubmit={onSubmit} {...props}/>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        status:state.myProfilePage.status,
        myUserId:state.auth.authData.data.id
    }
}

export default connect (mapStateToProps,{getMyStatus ,putStatusText})(ProfileStatusContainer);

