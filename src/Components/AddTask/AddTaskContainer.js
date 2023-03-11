import React from "react";
import {addTaskStateActionCreator, updateNewTaskTextActionCreator} from "../../redux/homeReducer";
import AddTask from "./AddTask";

const addTaskContainer = (props) => {
    if (!props.show) {
        return null;
    }
    let onChangeTask = (text) => {
        props.store.dispatch(updateNewTaskTextActionCreator(text));
    }
    let addTaskWindow = () => {
        props.store.dispatch(addTaskStateActionCreator())
        props.onClose();
    }

    return (
        <AddTask onClose={props.onClose} updateNewTaskText={onChangeTask} addTaskWindow={addTaskWindow} show={props.show}/>
    );
}



export default addTaskContainer;