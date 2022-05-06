import React, { Component } from 'react';
import './GameBoard.css';
import GameTile from './GameTile/GameTile';

class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.state = { size: Math.min(window.innerWidth, window.innerHeight) };
        this.handleResize = this.handleResize.bind(this);
    }

    handleResize(e) {
        this.setState({
            size: Math.min(window.innerWidth, window.innerHeight),
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        let boardStyle = {
            // width: this.state.size,
            height: this.state.size,
        };

        let tileSize = 100 / Math.sqrt(this.props.tiles.length + 1) + '%';

        let tiles = this.props.tiles.map((tile, index) => {
            return (
                <GameTile
                    size={tileSize}
                    onClick={() => {
                        this.props.onSelectTileClick(tile);
                    }}
                    tile={tile}
                    key={index}
                />
            );
        });

        return (
            <div className='GameBoard' style={boardStyle}>
                {tiles}
            </div>
        );
    }
}

export default GameBoard;
