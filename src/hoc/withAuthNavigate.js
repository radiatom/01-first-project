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

export const withSingInNavigate = (Component) => {
    const NavigateComponent = (props) => {
        if (props.resultCode === 0) { return (<Navigate to='/myProfile/' />) }
        return (<Component {...props} />);
    }
    const connectedwithSingInNavigateComponent = connect(mapStateToProps, {})(NavigateComponent)
    return connectedwithSingInNavigateComponent
}



