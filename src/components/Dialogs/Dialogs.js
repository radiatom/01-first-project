import React from 'react';
import s from './Dialogs.module.css'
import Massage from './Massage/Massage';
import Dialog from './Dialog/Dialog';

const Dialogs = (props) => {
    const sendElement=React.createRef()
    const sendText=()=>{
        const text=sendElement.current.value
        alert(text)
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.dialogData.map(el => {
                    return (<Dialog name={el.name} id={el.id} avatar={el.avatar} />)
                })}
            </div>

            <div className={s.massages}>
                {props.dialogsData.massagesData.map(el => {
                    return (<Massage massage={el.massage} avatar={el.avatar} idUser={el.idUser} />)
                })}

                <textarea ref={sendElement} cols="112" rows="3" ></textarea>
                <button onClick={sendText}>Send</button>
            </div>
        </div >
    );
}

export default Dialogs;
