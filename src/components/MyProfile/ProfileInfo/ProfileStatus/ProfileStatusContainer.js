// import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileStatus from './ProfileStatus';

// class ProfileStatusContainer extends Component {
//     render() {
//         return (
//             <div>
//                 <ProfileStatus/>
//             </div>
//         );
//     }
// }

const mapStateToProps=(state)=>{
    return{
        status:state.myProfilePage.status
    }
}

export default connect (mapStateToProps,{})(ProfileStatus);

