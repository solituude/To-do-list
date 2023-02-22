import React, {useState} from "react";
import s from './home.module.css'
import Task from "./Task/Task";
import addTaskIcon from '../Header/img/addTask.svg';
import AddTaskHeader from "../AddTask/AddTask";

const Home = (props) => {
    const [show, setShow] = useState(false);
    let taskElements = props.taskData.map(t => <Task textTask={t.task}/>);

    let newTaskElement = React.createRef();

    let addTask = () => {
        let text = newTaskElement.current.value;
        props.addTask(text)
    }

    return (
        <div className={s.content}>
            <div className={s.date}>
                <div className={s.today}>Today</div>
                <div className={s.week}>WEN</div>
                <div className={s.month}>1 Feb</div>
            </div>

            <div>
                <textarea ref={newTaskElement}></textarea>
                <button onClick={ addTask }>Add task</button>
            </div>

            <div className={s.container_task}>
                {taskElements}
            </div>

            <div>
                <button onClick={() => setShow(true)}
                        className={s.btn_add_task}>
                    <img src={addTaskIcon} alt='Add task' className={s.img_add_task}/>
                </button>
                <AddTaskHeader onClose={() => setShow(false)} show={show}/>
            </div>
        </div>
    );
}

export default Home;