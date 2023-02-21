import React from "react";
import s from './task.module.css';

import editIcon from './img/edit.svg';
import moreIcon from './img/more.svg';

const Task = (props) => {
    return (
        <div className={s.container}>
            <button className={s.scroll}></button>
            <button className={s.done}></button>

            <div className={s.text}>{props.textTask}</div>

            <button className={s.edit}><img src={editIcon} alt='edit'/></button>

            <button className={s.btn_more}>
                <img src={moreIcon} alt='more'/>
            </button>
        </div>
    );
}

export default Task;
