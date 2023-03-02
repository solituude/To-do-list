import homeReducer from "./homeReducer";
import currentWeekReducer from "./currentWeekReducer";
import currentMonthReducer from "./currentMonthReducer";

let store = {
    _state: {
        homePage: {
            taskData: [
                {task: "doing a homework"},
                {task: "buy food"},
                {task: "do research in the physics"}
            ],
            newTaskText: ""
        },
        currentWeek: {
            mondayData: [{task: ""}],
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

    dispatch(action) {
        this._state.homePage = homeReducer(this._state.homePage, action);
        this._state.currentWeek = currentWeekReducer(this._state.currentWeek, action);
        this._state.currentMonth = currentMonthReducer(this._state.currentMonth, action);
        this._callSubscriber(this._state);
    }
}


export default store;