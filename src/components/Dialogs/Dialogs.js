import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {props.dialog}

            </div>

            <div className={s.massages}>

                {props.massage}

                <textarea
                    placeholder='Text'
                    onChange={e=>props.updateNewMassageText(e.target.value)}
                    value={props.value}
                    cols="112" rows="3"
                ></textarea>

                <button onClick={props.sendMassage}>Send</button>
            </div>
        </div >
    );
}

export default Dialogs;
