import React from 'react';
import './styles/App.css';
import MainView from "./MainView.js";
import "./styles/MainView.css";
import NavigationView from "./NavigationView.js";
const App = () => {
    return (
        <div className ="MainView">
            <NavigationView />
        </div>
    )

}


export default App;
