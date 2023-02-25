import React from "react";
import s from './mainMenu.module.css'
import {NavLink} from "react-router-dom";

const MainMenu = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <div onClick={props.onClose} className={s.modal}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                <NavLink to='/home' onClick={props.onClose}>
                    <div className={s.par}> day</div>
                </NavLink>

                <NavLink to='/currentWeek' onClick={props.onClose}>
                    <div className={s.par}> week </div>
                </NavLink>

                <NavLink to='/currentMonth' onClick={props.onClose}>
                    <div className={s.par}> month </div>
                </NavLink>

            </div>
        </div>
    )
}

export default MainMenu;