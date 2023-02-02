import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css"


const DialogItem = (props) => {

    let link = "dialogs/" + props.id
    
        return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink  to={link}> {props.name}  </NavLink>
            </div>
        )
}

export default DialogItem