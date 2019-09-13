import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map( dialogData => <DialogItem key={dialogData.id} name={dialogData.name} id={dialogData.id}/> );
    let messagesElements = props.dialogsPage.messagesData.map( messageData => <Message key={messageData.id} message={messageData.message} /> );
  
    let addMessage = (message) => {
        props.addMessage(message.textareaMessage);
    }

    if (!props.isAuth) return <Redirect to='/login' />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            {messagesElements}
            <AddMessageFormRedux onSubmit={addMessage} />
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit} className={classes.messages}>
        <Field placeholder={'text'} component={'textarea'} name={'textareaMessage'} />
        <button>Hello</button>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;