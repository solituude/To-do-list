
import React, {useState} from "react";
import AddTaskContainer from "../AddTask/AddTaskContainer";
import CurrentDay from "./CurrentDay";
import {deleteTaskActionCreator} from "../../redux/homeReducer";
// сюда передается store
const CurrentDayContainer = (props) => {
    const [show, setShow] = useState(false);

    let deleteCurrTask = (index) => {
        props.store.dispatch(deleteTaskActionCreator(index));
    }

    return (
        <div>
            <CurrentDay show={show}
                        setShow={setShow}
                        deleteTask={deleteCurrTask}
                        tasks={props.store.getState().homePage.taskData}/>

            <AddTaskContainer store={props.store}
                              onClose={() => setShow(false)}
                              show={show}/>
        </div>
    )
}

export default CurrentDayContainer;



// import React, {useState} from "react";
// import s from "../Home/home.module.css";
// import addTaskIcon from "../Header/img/addTask.svg";
// import AddTaskContainer from "../AddTask/AddTaskContainer";
// import Task from "../Home/Task/Task";
// // сюда передается store
// const CurrentDayContainer = (props) => {
//     const [show, setShow] = useState(false);
//     let taskElements = props.store.getState().homePage.taskData.map(t => <Task textTask={t.task}/>);
//
//
//     return (
//         <div>
//             <div className={s.container_task}> {taskElements} </div>
//
//             <div>
//                 <button onClick={() => setShow(true)}
//                         className={s.btn_add_task}>
//                     <img src={addTaskIcon} alt='Add task' className={s.img_add_task}/>
//                 </button>
//             </div>
//             <AddTaskContainer store={props.store}
//                               onClose={() => setShow(false)} show={show}/>
//         </div>
//     )
// }
//
// export default CurrentDayContainer;
