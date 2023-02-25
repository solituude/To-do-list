import {rerenderEntireTree} from "../render";

let state = {
    homePage: {
        taskData: [
            {task: "doing a homework"},
            {task: "buy food"},
            {task: "do research in the physics"}
        ],
        newTaskText: "meow ^._.^"
    }
}

export let addTaskState = () => {
    let newTask = {
        task: state.homePage.newTaskText
    };
    state.homePage.taskData.push(newTask);
    state.homePage.newTaskText = '';
    rerenderEntireTree(state);
}

export let updateNewTaskText = (newText) => {
    state.homePage.newTaskText = newText;
    rerenderEntireTree(state);
}

export default state;