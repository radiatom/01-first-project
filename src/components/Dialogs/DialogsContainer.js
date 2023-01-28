import React from 'react';
import { sendMassage, setMassageText } from '../../redux/dialogReducer';
import Dialog from './Dialog/Dialog';
import Massage from './Massage/Massage';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../hoc/withAuthNavigate';
import { reduxForm } from 'redux-form';


const PostsReduxForm = reduxForm({ form: 'massageText' })(Dialogs)

withAuthNavigate(PostsReduxForm)

const DialogsContainer = (props) => {
    const onSubmit = (formData) => {
        props.setMassageText(formData.massageText)
        props.sendMassage()
    }
    return (
        <div>
            <PostsReduxForm onSubmit={onSubmit} {...props} />
        </div>
    );
}

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
export default connect(mapStateToProps, { setMassageText, sendMassage })(DialogsContainer)


