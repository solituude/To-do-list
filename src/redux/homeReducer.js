const ADD_TASK_STATE = 'ADD-TASK-STATE';
const UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT';

const homeReducer = (state, action) => {
    switch (action.type){
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
        default: return state;
    }
}

export default homeReducer;