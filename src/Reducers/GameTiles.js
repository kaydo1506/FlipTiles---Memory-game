import createTiles from '../Helpers/createTiles';

const gameTile = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_TILE':
            // If this tile is not the same one that was selected
            // by the player, or is already matched, leave the
            // current state the same
            if (state.key !== action.tileKey || state.matched) {
                return state;
            }

            // Otherwise, mark the tile as selected
            return Object.assign({}, state, {
                selected: true,
            });

        default:
            return state;
    }
};

const gameTiles = (state = [], action) => {
    switch (action.type) {
        case 'START_GAME':
            return createTiles(16);

        case 'SELECT_TILE':
            let selectedTiles = state.filter((tile) => tile.selected);

            // We can only have two selected tiles at a time, so
            // if there are already two selected, deselect all tiles
            if (selectedTiles.length === 2)
                return state.map((t) => {
                    t.selected = false;
                    return t;
                });

            // Find and mark the selected tile
            let tiles = state.map((t) => gameTile(t, action));

            selectedTiles = tiles.filter((tile) => tile.selected);

            // If two tiles are selected and are a match, mark
            // them as matched
            if (selectedTiles.length === 2) {
                if (selectedTiles[0].tileimage === selectedTiles[1].tileimage) {
                    tiles.map((t) => {
                        if (selectedTiles.indexOf(t) !== -1) t.matched = true;

                        return t;
                    });
                }
            }

            return tiles;

        default:
            return state;
    }
};

export default gameTiles;
