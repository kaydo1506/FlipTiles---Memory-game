import { combineReducers } from 'redux';
import gameTiles from './GameTiles';

const flipitApp = combineReducers({
    gameTiles,
});

export default flipitApp;
