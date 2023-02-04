import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';


class HeaderContainer extends Component {

    
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.authData.data.login,
        resultCode: state.auth.authData.resultCode
    }
}

export default connect(mapStateToProps, { })(HeaderContainer);
