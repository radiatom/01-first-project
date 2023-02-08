import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../common/FromControls/FromControls';
import s from './SingInForm.module.css'
import { required } from '../../utils/validators/validators';


const SingInForm = (props) => {
    return (
        <div className={s.pageSingIn} >
            <div className={s.request} >
            {/* <p>Цейт сайт створений з використанням API з сайту social-network.samuraijs.com.База данних закрита. Щоб рандомний юсер міг отримати доступ до цієї бази данних, мені 
                як творцю сайту потрібно оплатити підписку. Я цього не роблю по таким причинам: 1)власник бази данних в білорусі 2) оплата в деревяних 
                грошах 3) в мене нема грошей). Щоб в повній мірі пощупати цей сайт потрібно клонувати його з репозиторію у свій редактор кода (в редакторі виконати команду npm install, та запустити проект npm start), і також зробити 
                звичайну реєстрацію на сайті social-network.samuraijs.com. Тепер відкритий проект в браузері можна щупати в повній мірі. Після реєстрацї використайте свій emeil та password при вході на сторінці проекту. Повторюся це спрацює лише коли цей 
                проект клонований та запущений локально на вашому комппютері, тоді роект запуститься на localhost та зможе отримувати данні.</p> */}
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
