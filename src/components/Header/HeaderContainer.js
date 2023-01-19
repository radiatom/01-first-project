import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuth } from '../../redux/authReducer';


class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                this.props.setAuth(response.data)
            })
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
    }
}

export default connect(mapStateToProps, { setAuth })(HeaderContainer);
