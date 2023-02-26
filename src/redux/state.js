const ADD_TASK_STATE = 'ADD-TASK-STATE';
const UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT';

let store = {
    _state: {
        homePage: {
            taskData: [
                {task: "doing a homework"},
                {task: "buy food"},
                {task: "do research in the physics"}
            ],
            newTaskText: "meow ^._.^"
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() { // присваиваем чему-то чтобы потом переприсвоить (оно равно observer т.е. ререндер страницы)
    },

    subscribe(observer) {  // переприсваиваем чтобы использовать исходную функцию дальше
        this._callSubscriber = observer;
    },

    _addTaskState () {
        let newTask = {
            task: this._state.homePage.newTaskText
        };
        this._state.homePage.taskData.push(newTask);
        this._state.homePage.newTaskText = '';
        this._callSubscriber(this._state);
    },

    _updateNewTaskText(newText) {
        this._state.homePage.newTaskText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action){
        if (action.type === ADD_TASK_STATE){
            this._addTaskState();
        } else if (action.type === UPDATE_NEW_TASK_TEXT){
            this._updateNewTaskText(action.text);
        }
    }
}

export const addTaskStateActionCreator = () => {
    return {type: ADD_TASK_STATE};
}

export const updateNewTaskTextActionCreator = (text) => {
    return {type: UPDATE_NEW_TASK_TEXT, text: text};
}

export default store;