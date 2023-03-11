import React from "react";
import s from './home.module.css'
import CurrentDate from "./CurrentDate/CurrentDate";
import CurrentDayContainer from "../Day/CurrentDayContainer";

const Home = (props) => {

    return (
        <div className={s.content}>
            <CurrentDate/>
            {/*<CurrentDay tasks={props.homePage.taskData}*/}
            {/*            dispatch={props.dispatch}/>*/}
            <CurrentDayContainer store={props.store}/>
        </div>
    );
}

export default Home;