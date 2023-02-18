import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainMenu from "./Components/MainMenu/MainMenu";
import Home from "./Components/Home/Home";
import Help from "./Components/Help/Help";

const App = () => {
    return (
    <div className='content'>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<MainMenu />} />
                <Route path='/home' element={<Home />} />
                <Route path='/help' element={<Help />} />

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
