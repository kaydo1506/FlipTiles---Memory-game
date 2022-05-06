import Game from './Game';
import { connect } from 'react-redux';
import { startGame } from './../../Actions/StartGame';

// Define the props/dispatch mapping for our Redux store
const mapStateToProps = (state) => {
    return {
        tiles: state.gameTiles,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGameClick: () => {
            dispatch(startGame);
        },
    };
};

// Connect the GameBoard to our Redux store
const TileGame = connect(mapStateToProps, mapDispatchToProps)(Game);

export default TileGame;
