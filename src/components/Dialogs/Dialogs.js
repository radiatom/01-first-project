import React from 'react';
import s from './Dialogs.module.css';
import { Field } from 'redux-form';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {props.dialog}

            </div>

            <div className={s.massages}>

                {props.massage}
                <form onSubmit={props.handleSubmit}>
                <Field placeholder='Text' value={props.value} cols="112" rows="3" name={'massageText'} component={'textarea'}/>

                    {/* <textarea
                        placeholder='Text'
                        onChange={e => props.updateNewMassageText(e.target.value)}
                        value={props.value}
                        cols="112" rows="3"
                    ></textarea> */}

                    <button>Send</button>
                </form>

            </div>
        </div >
    );
}

export default Dialogs;
