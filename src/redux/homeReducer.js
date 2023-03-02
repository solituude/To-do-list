const ADD_TASK_STATE = 'ADD-TASK-STATE';
const UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT';

let initialState = {
    taskData: [
        {task: "doing a homework"},
        {task: "buy food"},
        {task: "do research in the physics"}
    ],
    newTaskText: ""
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK_STATE:
            let newTask = {
                task: state.newTaskText
            };
            state.taskData.push(newTask);
            state.newTaskText = '';
            return state;
        case UPDATE_NEW_TASK_TEXT:
            state.newTaskText = action.text;
            return state;
        default:
            return state;
    }
}

export const addTaskStateActionCreator = () => {
    return {type: ADD_TASK_STATE};
}

export const updateNewTaskTextActionCreator = (text) => {
    return {type: UPDATE_NEW_TASK_TEXT, text: text};
}

export default homeReducer;