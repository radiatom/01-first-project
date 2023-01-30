import React from 'react';
import { reduxForm } from 'redux-form';
import SingInForm from './SingInForm';
// import { authApi } from '../../api/api';
import { postLogin } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { withSingInNavigate } from '../../hoc/withAuthNavigate';


const SingInReduxForm = reduxForm({ form: 'SingIn' })(SingInForm)

const NavigateToMyProfileOrSingIn=withSingInNavigate(SingInReduxForm)

const SingInFormContainer = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        // authApi.login(formData)
        props.postLogin(formData)
    }
    return (
        <div>
            <NavigateToMyProfileOrSingIn onSubmit={onSubmit} />
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{

    }
}
export default connect (mapStateToProps,{postLogin})(SingInFormContainer)
