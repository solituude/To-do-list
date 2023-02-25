import React, {useState} from "react";
import './header.module.css';
import {NavLink} from "react-router-dom";
import s from './header.module.css';
import menuIcon from './img/menu.svg';
import homeIcon from './img/home.svg';
import addTaskIcon from './img/addTask.svg';
import helpIcon from './img/help.svg';
import zaglushkaProfileIcon from './img/zaglushkaAvaProfile.svg';
import MainMenu from "../MainMenu/MainMenu";
import AddTask from "../AddTask/AddTask";

const Header = (props) => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [showMainMenu, setShowMainMenu] = useState(false);


    return (
        <div className={s.top_bar}>

            <div className={s.left_bar}>
                <div>
                    <img src={menuIcon} alt='Menu' onClick={() => setShowMainMenu(true)}/>
                    <MainMenu onClose={() => setShowMainMenu(false)} show={showMainMenu}/>
                </div>

                <NavLink to='/home'>
                    <img src={homeIcon} alt='Home'/>
                </NavLink>
            </div>

            <div className={s.right_bar}>
                <div>
                    <img src={addTaskIcon} alt='Add task' onClick={() => setShowAddTask(true)}/>
                    <AddTask addTaskState={props.addTaskState}
                             updateNewTaskText={props.updateNewTaskText}
                             onClose={() => setShowAddTask(false)} show={showAddTask}/>
                </div>

                <NavLink to='/help'>
                    <img src={helpIcon} alt='Help' className={s.img_help_icon}/>
                </NavLink>

                <img src={zaglushkaProfileIcon} alt='Profile'/>
            </div>

        </div>
    );
}

export default Header;