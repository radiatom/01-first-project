import React from 'react';
import s from './Dialogs.module.css'
import Massage from './Massage/Massage';
import Dialog from './Dialog/Dialog';

const dialogData = [
    { id: 1, name: 'Arsen' },
    { id: 2, name: 'Mycola' },
    { id: 3, name: 'Andrey' },
    { id: 4, name: 'Igor' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Antony' },
    { id: 7, name: 'Bot' },
    { id: 8, name: 'Roma' },

]

const massagesData = [
    { id: 1, massage: 'Hi' },
    { id: 2, massage: 'Hi' },
    { id: 3, massage: 'Its you admin?' },
    { id: 4, massage: 'Yes' },
    { id: 4, massage: 'Cool!' }
]

const dialogsItem = dialogData.map(el => {
    return (<Dialog name={el.name} id={el.id} />)
})

const massages = massagesData.map(el => {
    return (<Massage massage={el.massage} />)
})

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItem}
            </div>

            <div className={s.massages}>
                {massages}
            </div>
        </div >
    );
}

export default Dialogs;
