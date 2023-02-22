import {rerenderEntireTree} from "../render";

let state = {
    homePage: {
        taskData: [
            {task: "doing a homework"},
            {task: "walk in the park"},
            {task: "buy food"},
            {task: "do research in the physics"}
        ]
    }
}

export let addTask = (textTask) => {
    let newTask = {
        task: textTask
    };

    state.homePage.taskData.push(newTask);
    rerenderEntireTree(state);
}

export default state;