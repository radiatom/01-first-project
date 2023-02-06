import React from 'react';
import { connect } from 'react-redux';
import Setting from './Setting';
import { deleteLogin } from '../../redux/authReducer';
import { putAvatarFile } from '../../redux/myProfileReducer';

const SettingContainer = (props) => {
    return (
        <div>
            <Setting {...props}/>
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{

    }
}
export default connect (mapStateToProps,{deleteLogin,putAvatarFile})(SettingContainer);
