import React from 'react';
import s from './Dialogs.module.css'
import Massage from './Massage/Massage';
import Dialog from './Dialog/Dialog';

const dialogData=[
    {id:1,name:'Arsen'},
    {id:2,name:'Mycola'},
    {id:3,name:'Andrey'},
    {id:4,name:'Igor'},
    {id:5,name:'Viktor'},
    {id:6,name:'Antony'},
]

const massageData=[
    {id:1,massage:'Hi'},
    {id:2,massage:'Hi'},
    {id:3,massage:'Its you admin?'},
    {id:4,massage:'Yes'},
]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={dialogData[0].name} id={dialogData[0].id} />
                <Dialog name={dialogData[1].name} id={dialogData[1].id} />
                <Dialog name={dialogData[2].name} id={dialogData[2].id} />
                <Dialog name={dialogData[3].name} id={dialogData[3].id} />
                <Dialog name={dialogData[4].name} id={dialogData[4].id} />
                <Dialog name={dialogData[5].name} id={dialogData[5].id} />
            </div>

            <div className={s.massages}>
                <Massage massage={massageData[0].massage}/>
                <Massage massage={massageData[1].massage}/>
                <Massage massage={massageData[2].massage}/>
                <Massage massage={massageData[3].massage}/>

            </div>
        </div >
    );
}

export default Dialogs;
