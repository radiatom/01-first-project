import React from 'react';
import { sendMassage, updateNewMassageText } from '../../redux/dialogReducer';
import Dialog from './Dialog/Dialog';
import Massage from './Massage/Massage';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../hoc/withAuthNavigate';
import { compose } from 'redux';


const mapStateToProps = (state) => {
    return {
        value: state.dialogsPage.newMassageTextData,
        dialog: state.dialogsPage.dialogData.map(el => {
            return (<Dialog name={el.name} id={el.id} key={el.id} avatar={el.avatar} />)
        }),
        massage: state.dialogsPage.massagesData.map(el => {
            return (<Massage massage={el.massage} avatar={el.avatar} idUser={el.idUser} key={el.id} />)
        }),
    }
}


export default compose(
    connect(mapStateToProps, {updateNewMassageText,sendMassage}),
    withAuthNavigate
    )(Dialogs)
