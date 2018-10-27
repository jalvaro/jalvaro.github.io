import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import Navigation from "./Navigation";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to my space of creation</h1>
                </header>
                <p className="App-intro">
                    Some ongoing stuff:
                </p>
                <Navigation/>
            </div>
        );
    }
}

export default App;
