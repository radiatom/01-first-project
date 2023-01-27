import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import SingInForm from './SingInForm';
import { authApi } from '../../api/api';



const SingInReduxForm = reduxForm({ form: 'SingIn' })(SingInForm)

const SingInFormContainer = (props) => {
    const onSubmit = (formData) => {
        // debugger
        // console.log(formData)
        authApi.login(formData)

    }
    // authApi.login(props.email, props.password, props.rememberMe, true)
    return (
        <div>
            <SingInReduxForm onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps = (state) => {
    // debugger
    return {
        // email: state.form.SingIn.value.email,
        // password: state.form.SingIn.value.password,
        // rememberMe: state.form.SingIn.value.rememberMe,
    }
}

export default connect(mapStateToProps, {})(SingInFormContainer);
