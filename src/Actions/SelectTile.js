export const selectTile = (key) => {
    return {
        type: 'SELECT_TILE',
        tileKey: key,
    };
};
