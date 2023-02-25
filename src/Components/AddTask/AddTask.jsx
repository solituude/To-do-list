import React from "react";
import s from "./addTask.module.css";
import {NavLink} from "react-router-dom";


const addTask = (props) => {
    if (!props.show) {
        return null;
    }

    let newText = React.createRef();

    let onChangeTask = () => {
        let text = newText.current.value;
        props.updateNewTaskText(text);
    }
    let addTaskWindow = () => {
        props.addTaskState();
        props.onClose();
    }

    return (
        <div className={s.modal} onClick={props.onClose}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                <div className={s.modalHeader}>
                    Add your new task here:
                </div>

                <textarea ref={newText} onChange={onChangeTask}/>
                <NavLink to='/home'>
                    <button onClick={addTaskWindow}>Add task</button>
                </NavLink>

                <div className={s.modalFooter}>
                    Good job!
                </div>
            </div>
        </div>
    );
}

export default addTask;