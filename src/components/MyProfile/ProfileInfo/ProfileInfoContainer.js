import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';



const ProfileInfoContainer = React.memo((props) => {
    return (
        <div>
            <ProfileInfo {...props} />
        </div>
    );
})


const mapStateToProps = (state) => {
    return {
        myProfileData: state.myProfilePage.myProfileData,
    }
}
export default connect(mapStateToProps, {})(ProfileInfoContainer);


