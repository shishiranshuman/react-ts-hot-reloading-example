
import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import {DemoComponentTwo} from './DemoComponentTwo';
import {DemoComponentOne} from './DemoComponentOne';
import {hot} from 'react-hot-loader'



class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    Hello this is a test app for hot reloading.
                    <DemoComponentOne />
                    <DemoComponentTwo />
                </p>
            </div>
        );
    }
}

export default hot(module)(App);
