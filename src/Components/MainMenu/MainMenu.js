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

                <div className={s.par}>
                    week
                </div>

                <div className={s.par}>
                    month
                </div>
            </div>
        </div>
    )
}

export default MainMenu;