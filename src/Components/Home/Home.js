import React from "react";
import s from './home.module.css'
import Task from "./Task/Task";
const Home = () =>{
    return(
        <div className={s.content}>
            <div className={s.date}>
                <div className={s.today}>Today</div>
                <div className={s.week}>WEN</div>
                <div className={s.month}>1 Feb</div>
            </div>

            <div>
                <textarea></textarea>
                <button>Add task</button>
            </div>
            <div className={s.container_task}>
                <Task info='kfdlklfkl'/>
                <Task info='fldkfslfksdfjosijfojfojjfiojweofpwjfndjfnoejefwksjfkndsoifjsdnfsdlfkjfnkjsdnf  fsjdkfjksdjfk ksjdfkljsl dkjfksdfs skdflkskfksf
                kfsdkflskdf kfsdflsdkflskldflsd flskfl;kskdfo fowefodm sdfkslflsmflk flfl;sfnsdmnjwef kefjklsdfsiofe flksejfklsndmnsdjd fds'/>
            </div>
        </div>
    );
}

export default Home;