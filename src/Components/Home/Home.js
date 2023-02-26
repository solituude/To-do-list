import React, {useState} from "react";
import s from './home.module.css'
import Task from "./Task/Task";
import addTaskIcon from '../Header/img/addTask.svg';
import AddTask from "../AddTask/AddTask";
import CurrentDate from "./CurrentDate/CurrentDate";

const Home = (props) => {
    const [show, setShow] = useState(false);
    let taskElements = props.homePage.taskData.map(t => <Task textTask={t.task}/>);

    return (
        <div className={s.content}>
            <CurrentDate/>

            <div className={s.container_task}> {taskElements} </div>

            <div>
                <button onClick={() => setShow(true)}
                        className={s.btn_add_task}>
                    <img src={addTaskIcon} alt='Add task' className={s.img_add_task}/>
                </button>
                <AddTask dispatch={props.dispatch}
                         onClose={() => setShow(false)} show={show}/>
            </div>
        </div>
    );
}

export default Home;