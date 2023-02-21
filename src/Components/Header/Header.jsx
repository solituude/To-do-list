import React, {useState} from "react";
import './header.module.css';
import {NavLink} from "react-router-dom";
import s from './header.module.css';
import menuIcon from './img/menu.svg';
import homeIcon from './img/home.svg';
import addTaskIcon from './img/addTask.svg';
import helpIcon from './img/help.svg';
import zaglushkaProfileIcon from './img/zaglushkaAvaProfile.svg';
import AddTaskHeader from "../AddTaskHeader/AddTaskHeader";

const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <div className={s.top_bar}>

            <div className={s.left_bar}>
                <NavLink to='/menu'>
                    <img src={menuIcon} alt='Menu'/>
                </NavLink>

                <NavLink to='/home'>
                    <img src={homeIcon} alt='Home'/>
                </NavLink>
            </div>

            <div className={s.right_bar}>
                <div>
                    <button onClick={() => setShow(true)} className={s.btn_add_task}>
                        <img src={addTaskIcon} alt='Add task'/>
                    </button>

                    <AddTaskHeader onClose={() => setShow(false)} show={show}/>
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