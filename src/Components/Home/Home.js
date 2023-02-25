import React, {useState} from "react";
import s from './home.module.css'
import Task from "./Task/Task";
import addTaskIcon from '../Header/img/addTask.svg';

import AddTask from "../AddTask/AddTask";
import CurrentDate from "./CurrentDate/CurrentDate";

const Home = (props) => {
    const [show, setShow] = useState(false);
    let taskElements = props.homePage.taskData.map(t => <Task textTask={t.task}/>);
    let newTaskElement = React.createRef();
    let addTaskHome = () => {
        props.addTaskState();
    }
    let onChangeTask = () => {
        let text = newTaskElement.current.value;
        props.updateNewTaskText(text);
    }


    return (
        <div className={s.content}>
            <CurrentDate />



            {/*<div>*/}
            {/*    <textarea onChange={onChangeTask} ref={newTaskElement} value={props.homePage.newTaskText}/>*/}
            {/*    <button onClick={addTaskHome}>Add task</button>*/}
            {/*</div>*/}


            <div className={s.container_task}>
                {taskElements}
            </div>


            <div>
                <button onClick={() => setShow(true)}
                        className={s.btn_add_task}>
                    <img src={addTaskIcon} alt='Add task' className={s.img_add_task}/>
                </button>
                <AddTask addTaskState={props.addTaskState}
                         updateNewTaskText={props.updateNewTaskText}
                         onClose={() => setShow(false)} show={show}/>
            </div>
        </div>
    );
}

export default Home;