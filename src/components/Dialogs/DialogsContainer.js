import React from 'react';
import { sendMassageActionCreater } from '../../redux/dialogReducer';
import { updateNewMassageTextActionCreater } from '../../redux/dialogReducer';
import Dialog from './Dialog/Dialog';
import Massage from './Massage/Massage';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    const state=props.store.getState()

    const value=state.dialogsData.newMassageTextData

    const onMassageChange = (event) => {
        const newText = event.target.value
        props.store.dispatch(updateNewMassageTextActionCreater(newText))
    }

    const click = () => {
        props.store.dispatch(sendMassageActionCreater())
    }

    const dialog=state.dialogsData.dialogData.map(el => {
        return (<Dialog name={el.name} id={el.id} avatar={el.avatar} />)
    })

    const massage=state.dialogsData.massagesData.map(el => {
        return (<Massage massage={el.massage} avatar={el.avatar} idUser={el.idUser} />)
    })

    return (
        <div >
            <Dialogs 
            onMassageChange={onMassageChange}
            click={click}
            dialog={dialog}
            massage={massage}
            value={value} />
        </div >
    );
}

export default DialogsContainer;
