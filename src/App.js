import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Help from "./Components/Help/Help";
import {addTask} from "./redux/state";

const App = (props) => {

    return (
        <div className='content'>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home taskData={props.state.homePage.taskData} addTask={addTask}/>}/>
                    <Route path='/home' element={<Home taskData={props.state.homePage.taskData} addTask={addTask}/>}/>
                    <Route path='/help' element={<Help/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
