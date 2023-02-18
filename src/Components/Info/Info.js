import React from "react";
import s from './info.module.css'
const Info = (props) => {
    return (
        <div className={s.content}>
            <b>Какая-то информация: {props.information}</b>
        </div>
    )
}

export default Info;