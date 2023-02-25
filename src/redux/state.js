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

    _callSubscriber() { // присваиваем чему-то чтобы потом переприсвоить)))0)000
    },

    subscribe(observer) {  // переприсваиваем чтобы использовать исходную функцию дальше
        this._callSubscriber = observer;
    },

    addTaskState () {
        let newTask = {
            task: this._state.homePage.newTaskText
        };
        this._state.homePage.taskData.push(newTask);
        this._state.homePage.newTaskText = '';
        this._callSubscriber(this._state);
    },

    updateNewTaskText(newText) {
        this._state.homePage.newTaskText = newText;
        this._callSubscriber(this._state);
    }
}

export default store;