import React from "react";
import s from "./addTask.module.css";

const addTask = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <div className={s.modal} onClick={props.onClose}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                <div className={s.modalHeader}>
                    header
                </div>

                <div className={s.modalBody}>
                    body
                </div>

                <div className={s.modalFooter}>
                    footer
                    <button onClick={props.onClose}>Add task</button>
                </div>

            </div>
        </div>
    );
}

export default addTask;