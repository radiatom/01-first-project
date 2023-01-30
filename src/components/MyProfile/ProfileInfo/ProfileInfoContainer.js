import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';


class ProfileInfoContainer extends Component {

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
    }
}
export default connect(mapStateToProps, {})(ProfileInfoContainer);


