import React from 'react';
import './App.scss';
import {Main} from "./components/Main";
import {Title} from "./components/Title";
import {HistoryList} from "./components/HistoryList";


function App() {
    return (
        <div className="container">
            <Title/>
            <Main/>
            <HistoryList/>
            {/*<WeatherList/> Оказалось что чтобы вывести погоду на несколько дней то нужно платить за API :( */}
        </div>
    );
}

export default App;
