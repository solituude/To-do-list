import React from "react";
import s from "./addTask.module.css";
import {NavLink} from "react-router-dom";
import {addTaskStateActionCreator, updateNewTaskTextActionCreator} from "../../redux/homeReducer";



const addTask = (props) => {
    if (!props.show) {
        return null;
    }
    let newText = React.createRef();

    let onChangeTask = () => {
        let text = newText.current.value;
        props.dispatch(updateNewTaskTextActionCreator(text));

    }
    let addTaskWindow = () => {
        props.dispatch(addTaskStateActionCreator())
        props.onClose();
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
                    <button onClick={addTaskWindow} className={s.btnAddTask}>Add task</button>
                </NavLink>

                <div className={s.modalFooter}>

                </div>
            </div>
        </div>
    );
}



export default addTask;