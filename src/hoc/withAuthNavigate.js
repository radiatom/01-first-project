import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';



const mapStateToProps = (state) => {
    return {
        resultCode: state.auth.authData.resultCode
    }
}

export const withAuthNavigate = (Component) => {

    const NavigateComponent = (props) => {
        if (props.resultCode === 1) { return (<Navigate to='/singIn/' />) }
        return (<Component {...props} />);
    }
    const connectedWithAuthNavigateComponent = connect(mapStateToProps, {})(NavigateComponent)
    return connectedWithAuthNavigateComponent
}


