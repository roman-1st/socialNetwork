import React from "react";
import s from "./Dialogs.module.css"

import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Messages";



const Dialogs = (props) => {

    // debugger

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> ) ;
    let messagesElements = props.state.messages.map( m => <Message message={m.message} key={m.id}  /> )

    let newMessageElement = React.createRef();

    let addMessageElement = () => {
        let message = newMessageElement.current.value
        alert(message)
        newMessageElement.current.value = ''
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems }>
                { dialogsElements }
            </div>
            <div className={s.messages }>
                { messagesElements }
                <textarea ref={newMessageElement} /> 
                <button onClick={addMessageElement}> Add message </button>
            </div>
         </div>
    )
}

export default Dialogs