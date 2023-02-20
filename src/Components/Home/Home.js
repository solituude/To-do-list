import React from "react";
import s from './home.module.css'
import Task from "./Task/Task";
import addTaskIcon from '../Header/img/addTask.svg';
const Home = () =>{
    return(
        <div className={s.content}>
            <div className={s.date}>
                <div className={s.today}>Today</div>
                <div className={s.week}>WEN</div>
                <div className={s.month}>1 Feb</div>
            </div>
            {/*<div>
                <input className={s.textarea}></input>
                <button>Add task</button>
            </div>*/}
            <div className={s.container_task}>
                <Task info='kfdlklfkl'/>
                <Task info='fldkfslfksdfjosijfojfojjfijwef kndmnsdjd fds'/>
            </div>
            <div className={s.btn_add_task}>
                <img src={addTaskIcon} alt='Add task' className={s.img_add_task} />
                <button className={s.btn_style}>

                </button>
            </div>
        </div>
    );
}

export default Home;