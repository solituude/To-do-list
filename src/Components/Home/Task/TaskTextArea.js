import React from "react";
import s from './task.module.css';

const TaskTextArea = (props) => {
    return (
            <div className={s.text}>{props.textTask}</div>
    );
}

export default TaskTextArea;
