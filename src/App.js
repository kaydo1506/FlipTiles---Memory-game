import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import flipitApp from './Reducers/index';
import TileGame from './Components/TileGame/TileGame';

let store = createStore(flipitApp);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='App'>
                    <TileGame />
                </div>
            </Provider>
        );
    }
}

export default App;
