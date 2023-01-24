import React from 'react';
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
                <div>
                    <textarea  placeholder='Email'  cols="30" rows="1"></textarea>
                </div>

                <div>
                    <textarea placeholder='Paswood' cols="30" rows="1"></textarea>
                </div>

                <div>
                    <button>SingIn</button>
                </div>
            </div>

        </div>

    );
}

export default SingInForm;
