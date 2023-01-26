import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileStatus from './ProfileStatus';
import { getMyStatus, updateStatus } from '../../../../redux/myProfileReducer';


class ProfileStatusContainer extends Component {
    // componentDidMount() {
    //     this.props.updateStatus('44444')
    //     this.props.getMyStatus(this.props.myUserId)
    // }
    render() {
        return (
            <div>
                <ProfileStatus {...this.props}/>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        status:state.myProfilePage.status,
        myUserId:state.auth.authData.data.id
    }
}

export default connect (mapStateToProps,{getMyStatus ,updateStatus})(ProfileStatusContainer);

