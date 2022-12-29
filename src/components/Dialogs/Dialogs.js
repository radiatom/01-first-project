import React from 'react';
import s from './Dialogs.module.css'
import Massage from './Massage/Massage';
import Dialog from './Dialog/Dialog';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name='Arsen' id='1' />
                <Dialog name='Mycola' id='2' />
                <Dialog name='Andrey' id='3' />
                <Dialog name='Igor' id='4' />
                <Dialog name='Viktor' id='5' />
                <Dialog name='Antony' id='6' />
            </div>

            <div className={s.massages}>
                <Massage massage='Hi'/>
                <Massage massage='Hi'/>
                <Massage massage='Its you admin?'/>
                <Massage massage='Yes'/>

            </div>
        </div >
    );
}

export default Dialogs;
