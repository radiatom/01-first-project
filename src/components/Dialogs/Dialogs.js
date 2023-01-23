import React from 'react';
import { Navigate } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    if(props.resultCode===1){return (<Navigate to='/singIn/'/>)}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {props.dialog}

            </div>

            <div className={s.massages}>

                {props.massage}

                <textarea
                    placeholder='Text'
                    onChange={props.onMassageChange}
                    value={props.value}
                    cols="112" rows="3"
                ></textarea>

                <button onClick={props.click}>Send</button>
            </div>
        </div >
    );
}

export default Dialogs;
