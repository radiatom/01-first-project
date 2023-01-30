import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../common/FromControls/FromControls';
import s from './SingInForm.module.css'
import { required } from '../../utils/validators/validators';


const SingInForm = (props) => {
    return (
        <div className={s.pageSingIn} >
            <div className={s.request} >
                <h3>
                    1# Please, registred in this site: <a href="https://social-network.samuraijs.com/" target='_blank'>social-network.samuraijs.com</a>
                </h3>
                <h3>
                    2# After login in this site:
                </h3>
            </div>
            <div className={s.singInForm} >
                <form onSubmit={props.handleSubmit} >
                    <div>
                        <h2>Login</h2>
                    </div>

                    <div>
                        <Field
                            placeholder={'Email'}
                            name={'email'}
                            component={Input}
                            validate={[required]}
                        />
                    </div>

                    <div>
                        <Field
                            placeholder={'Password'}
                            name={'password'}
                            component={Input}
                            type={'password'}
                            validate={[required]}
                        />
                    </div>
                    <div className={s.error} >{props.errorLogin ? <span>Incorrect password or email! </span> : ''}</div>
                    <div>
                        <Field
                            name={'rememberMe'}
                            component={Input}
                            type={"checkbox"}
                        /> remember me
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
