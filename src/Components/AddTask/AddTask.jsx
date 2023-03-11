import React from "react";
import s from "./addTask.module.css";
import {NavLink} from "react-router-dom";

const addTask = (props) => {
    if (!props.show) {
        return null;
    }

    let newText = React.createRef();

    let addTask = () => {
        props.addTaskWindow();
        props.onClose();
    }

    let onChangeTask = () => {
        let text = newText.current.value;
        props.updateNewTaskText(text);
    }

    return (
        <div className={s.modal} onClick={props.onClose}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                <div className={s.modalHeader}>
                    Your new task
                </div>

                <div className={s.containerTextarea}>
                   <textarea ref={newText} onChange={onChangeTask} className={s.textarea}
                             rows="8" cols="60" placeholder="Text your new task here" autoFocus/>
                </div>


                <NavLink to='/home'>
                    <button onClick={addTask} className={s.btnAddTask}>Add task</button>
                </NavLink>

                <div className={s.modalFooter}>

                </div>
            </div>
        </div>
    );
}



export default addTask;