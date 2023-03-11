import {combineReducers, createStore} from "redux";
import homeReducer from "./homeReducer";
import currentWeekReducer from "./currentWeekReducer";
import currentMonthReducer from "./currentMonthReducer";


let reducers = combineReducers({
    homePage: homeReducer,
    weekPage: currentWeekReducer,
    monthPage: currentMonthReducer

});
let store = createStore(reducers);

export default store;
