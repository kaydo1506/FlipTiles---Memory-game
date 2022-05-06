import GameBoard from './GameBoard';
import { connect } from 'react-redux';
import { selectTile } from './../../Actions/SelectTile';

// Define the props/dispatch mapping for the Redux store
const mapDispatchToProps = (dispatch) => {
    return {
        onSelectTileClick: (item) => {
            dispatch(selectTile(item.key));
        },
    };
};

// Connect the GameBoard to the Redux store
const TileGameBoard = connect(null, mapDispatchToProps)(GameBoard);

export default TileGameBoard;
