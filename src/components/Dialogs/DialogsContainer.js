import React from 'react';
import { sendMassageActionCreater, updateNewMassageTextActionCreater } from '../../redux/dialogReducer';
import Dialog from './Dialog/Dialog';
import Massage from './Massage/Massage';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        value: state.dialogsData.newMassageTextData,
        dialog: state.dialogsData.dialogData.map(el => {
            return (<Dialog name={el.name} id={el.id} key={el.id} avatar={el.avatar} />)
        }),
        massage: state.dialogsData.massagesData.map(el => {
            return (<Massage massage={el.massage} avatar={el.avatar} idUser={el.idUser} key={el.id}/>)
        })
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onMassageChange: (event) => {
            const newText = event.target.value
            dispatch(updateNewMassageTextActionCreater(newText))
        },
        click: () => {
            dispatch(sendMassageActionCreater())
        },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
