import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import { getMyProfile, } from '../../../redux/myProfileReducer';


class ProfileInfoContainer extends Component {
    // componentDidMount() {
    //     this.props.getMyProfile(this.props.myUserId)
    // }
    render() {
        return (
            <div>
                <ProfileInfo {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        myProfileData: state.myProfilePage.myProfileData,
        myUserId: state.auth.authData.data.id,
    }
}
export default connect(mapStateToProps, { getMyProfile,  })(ProfileInfoContainer);


