import React from 'react';
import { reduxForm } from 'redux-form';
import SingInForm from './SingInForm';
import { authApi } from '../../api/api';


const SingInReduxForm = reduxForm({ form: 'SingIn' })(SingInForm)

const SingInFormContainer = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        authApi.login(formData)
    }
    return (
        <div>
            <SingInReduxForm onSubmit={onSubmit} />
        </div>
    );
}

export default SingInFormContainer;
