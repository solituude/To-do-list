import React from "react";
import s from "./currentDate.module.css";

const CurrentDate = () => {
    let now = new Date();
    let hour = now.getHours();
    let date = now.getDate();
    let day = now.getDay();
    let month = now.getMonth();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let message;

    if (hour <= 6) {
        message = 'Good night';
    } else if (hour <= 12) {
        message = 'Good morning';
    } else if (hour <= 18) {
        message = 'Good day';
    } else {
        message = 'Good evening';
    }

    return (
        <div>
            <div className={s.message}>{message}</div>
            <div className={s.date}>
                <div className={s.today}>Today</div>
                <div className={s.week}>{weeks[day]}</div>
                <div className={s.month}>{date} {months[month]}</div>
            </div>
        </div>
    );
}

export default CurrentDate;