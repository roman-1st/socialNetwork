import React from "react";
import s from "./Dialogs.module.css"

import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Messages";
import { 
    addMessageActionCreator, 
    updateNewMessageText, 
} from "../../redux/State";



const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> ) ;
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} key={m.id}  /> )

    let newMessageElement = React.createRef();

    let addMessageElement = () => {
        props.dispatch( addMessageActionCreator() )
    }

    let onTextChange = () => {
        let text = newMessageElement.current.value
        console.log(text);
        props.dispatch( updateNewMessageText (text) )
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems }>
                { dialogsElements }
            </div>
            <div className={s.messages }>
                { messagesElements }
                <textarea 
                    ref={newMessageElement}
                    value={ props.dialogsPage.newMessageText }
                    onChange={ onTextChange } /> 
                <button onClick={ addMessageElement }> Add message </button>
            </div>
         </div>
    )
}

export default Dialogs