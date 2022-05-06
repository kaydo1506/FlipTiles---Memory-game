import React from 'react';
import './GameTile.css';

const GameTile = (props) => {
    let flipperClass = 'flipper';
    let containerClass = 'container';

    if (props.tile.selected || props.tile.matched) flipperClass += ' flipped';

    if (props.tile.matched && !props.tile.selected)
        containerClass += ' matched';

    let tileSize = {
        width: props.size,
        height: props.size,
    };

    return (
        <div className='GameTile' style={tileSize} onClick={props.onClick}>
            <div className={containerClass}>
                <div className={flipperClass}>
                    <div className='front'></div>
                    <div
                        className='back'
                        style={{ backgroundtileimage: props.tile.tileimage }}
                    >
                        {' '}
                        <img
                            src={props.tile.tileimage}
                            alt='tile'
                            className='tileimage'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameTile;
