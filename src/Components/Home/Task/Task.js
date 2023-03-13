import React from "react";
import s from './task.module.css';

import editIcon from './img/edit.svg';
import moreIcon from './img/more.svg';
import TaskTextArea from "./TaskTextArea";


const Task = (props) => {
    let deleteThisTask = () => {
        let currInd = props.index;
        props.deleteTask(currInd);
    }
    return (
        <div className={s.container}>
            <button className={s.scroll}></button>
            <button className={s.done} onClick={deleteThisTask}></button>
            {props.index}

            <TaskTextArea textTask={props.textTask}/>

            <button className={s.edit}><img src={editIcon} alt='edit'/></button>

            <button className={s.btn_more}>
                <img src={moreIcon} alt='more'/>
            </button>
        </div>
    );
}

export default Task;
