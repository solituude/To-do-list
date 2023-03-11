import React from "react";
import s from "../Home/home.module.css";
import addTaskIcon from "../Header/img/addTask.svg";

import Task from "../Home/Task/Task";

const CurrentDay = (props) => {
    let taskElements = props.tasks.map(t => <Task textTask={t.task}/>);
    return (
        <div>
            <div className={s.container_task}> {taskElements} </div>
            <div>
                <button onClick={() => props.setShow(true)}
                        className={s.btn_add_task}>
                    <img src={addTaskIcon} alt='Add task' className={s.img_add_task}/>
                </button>
            </div>

        </div>
    )
}

export default CurrentDay;