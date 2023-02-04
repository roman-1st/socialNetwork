import React from "react";
import s from "./Dialogs.module.css"

import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Messages";
import { 
    sendMessageCreator, 
    updateNewMessageBodyCreator, 
} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> ) ;
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} key={m.id}  /> )
    
    let newMessageBody = props.dialogsPage.newMessageBody

    let newMessageElement = React.createRef();

    let omSendMessageClick = () => {
        props.dispatch( sendMessageCreator() )
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.dispatch( updateNewMessageBodyCreator (body) )
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems }>
                { dialogsElements }
            </div>
            <div className={s.messages }>
                <div> { messagesElements } </div>
                <div> 
                    <textarea 
                        placeholder="Enter you'r message!"
                        ref={ newMessageElement }
                        value={ newMessageBody }
                        onChange={ onNewMessageChange } /> 
                </div>
                <div> 
                    <button onClick={ omSendMessageClick }> Add message </button>
                </div>
            </div>
         </div>
    )
}

export default Dialogs