let initialState = {
    mondayData: [{task: ""}],
    tuesdayData: [{task: ""}],
    wednesdayData: [{task: ""}],
    thursdayData: [{task: ""}],
    fridayData: [{task: ""}],
    saturdayData: [{task: ""}],
    sundayData: [{task: ""}]
}

const currentWeekReducer = (state = initialState, action) => {
    return state;
}

export default currentWeekReducer;