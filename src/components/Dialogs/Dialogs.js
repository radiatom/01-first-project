import React from 'react';
import s from './Dialogs.module.css'
import Massage from './Massage/Massage';
import Dialog from './Dialog/Dialog';
import { updateNewMassageTextActionCreater } from '../../redux/store';
import { sendMassageActionCreater } from '../../redux/store';

const Dialogs = (props) => {
    const onMassageChange = () => {
        const newText = sendElement.current.value
        props.dispatch(updateNewMassageTextActionCreater(newText))
        
    }
    const click=()=>{
        props.dispatch(sendMassageActionCreater())
    }
    const sendElement = React.createRef()
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

                <textarea onChange={onMassageChange} value={props.newPostTextData} ref={sendElement} cols="112" rows="3" ></textarea>
                <button onClick={click}>Send</button>
            </div>
        </div >
    );
}

export default Dialogs;
