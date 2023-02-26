import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Help from "./Components/Help/Help";
import Week from "./Components/Week/Week";
import Month from "./Components/Month/Month";

const App = (props) => {
    return (
        <div className='content'>
            <BrowserRouter>
                <Header dispatch={props.dispatch}/>
                <Routes>
                    <Route path='/' element={<Home homePage={props.state.homePage}
                                                   dispatch={props.dispatch}/>}/>

                    <Route path='/home' element={<Home homePage={props.state.homePage}
                                                       dispatch={props.dispatch}/>}/>

                    <Route path='/currentWeek' element={<Week/>}/>
                    <Route path='/currentMonth' element={<Month/>}/>
                    <Route path='/help' element={<Help/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
