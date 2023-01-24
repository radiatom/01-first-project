import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuth } from '../../redux/authReducer';


class HeaderContainer extends Component {

    componentDidMount() {
        this.props.getAuth()
    }
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

export default connect(mapStateToProps, {  getAuth })(HeaderContainer);
