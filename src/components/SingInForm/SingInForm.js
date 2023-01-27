import React from 'react';
import { Field } from 'redux-form';
import s from './SingInForm.module.css'

const SingInForm = (props) => {
    return (
        <div className={s.pageSingIn} >
            <div className={s.request} >
                <h3>
                    Please, logined in this site: <a href="https://social-network.samuraijs.com/" target='_blank'>social-network.samuraijs.com</a>
                </h3>
            </div>
            <div className={s.singInForm} >
                <form onSubmit={ props.handleSubmit } >
                    <div>
                        <h2>Login</h2>
                    </div>
                    
                    <div>
                        <Field placeholder={'email'} name={'email'} component={'input'} />
                    </div>

                    <div>
                        <Field placeholder={'0'} name={'password'} component={'input'} />
                    </div>
                    <div>
                        <Field type={"checkbox"} name={'rememberMe'} component={'input'} /> remember me
                    </div>
                    <div>
                        <button>SingIn</button>
                    </div>
                </form>

            </div>

        </div >

    );
}

export default SingInForm;
