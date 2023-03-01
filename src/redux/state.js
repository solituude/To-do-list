import homeReducer from "./homeReducer";
import currentWeekReducer from "./currentWeekReducer";
import currentMonthReducer from "./currentMonthReducer";

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
        },
        currentWeek: {
            mondayData : [{task: ""}],
            tuesdayData: [{task: ""}],
            wednesdayData: [{task: ""}],
            thursdayData: [{task: ""}],
            fridayData: [{task: ""}],
            saturdayData: [{task: ""}],
            sundayData: [{task: ""}]
        },
        currentMonth: {}
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.homePage = homeReducer(this._state.homePage, action);
        this._state.currentWeek = currentWeekReducer(this._state.currentWeek, action);
        this._state.currentMonth = currentMonthReducer(this._state.currentMonth, action);
        this._callSubscriber(this._state);
    }
}

export const addTaskStateActionCreator = () => {
    return {type: ADD_TASK_STATE};
}

export const updateNewTaskTextActionCreator = (text) => {
    return {type: UPDATE_NEW_TASK_TEXT, text: text};
}

export default store;