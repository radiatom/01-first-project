import React from 'react';
import s from './Dialogs.module.css';
import { Field } from 'redux-form';
import { TextArea } from '../common/FromControls/FromControls';
import { maxLength, required } from '../../utils/validators/validators';

const maxLength50=maxLength(50)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {props.dialog}

            </div>

            <div className={s.massages}>

                {props.massage}
                <form onSubmit={props.handleSubmit}>
                    <Field
                        validate={[required, maxLength50]}
                        placeholder='Text'
                        cols="112"
                        rows="3"
                        name={'massageText'}
                        component={TextArea}
                    />
                    <button>Send</button>
                </form>

            </div>
        </div >
    );
}

export default Dialogs;
