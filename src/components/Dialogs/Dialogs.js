import React from 'react';
import s from './Dialogs.module.css'
import Massage from './Massage/Massage';
import Dialog from './Dialog/Dialog';

const Dialogs = (props) => {

    const massagesData = props.massagesData
    
    const massages = massagesData.map(el => {
        return (<Massage massage={el.massage} />)
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogData.map(el => {
                    return (<Dialog name={el.name} id={el.id} />)
                })}
            </div>

            <div className={s.massages}>
                {massages}
            </div>
        </div >
    );
}

export default Dialogs;
