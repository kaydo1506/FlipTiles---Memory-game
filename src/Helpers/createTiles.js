import shuffle from './shuffle';
import blue from '../imgs/blue.png';
import circle from '../imgs/circle.webp';
import doll from '../imgs/doll.jpeg';
import fman from '../imgs/fman.jpeg';
import square from '../imgs/square.jpg';
import triangle from '../imgs/triangle.jpeg';
import yoda from '../imgs/yoda.jpeg';
import girl from '../imgs/067.png';

const createTiles = (amount) => {
    let tiles = [];
    const tileimages = [
        blue,
        circle,
        doll,
        fman,
        square,
        triangle,
        yoda,
        girl,
        blue,
        circle,
        doll,
        fman,
        square,
        triangle,
        yoda,
        girl,
    ];

    while (tiles.length < amount)
        tiles.push({
            key: tiles.length,
            tileimage: tileimages[tiles.length],
            selected: false,
            matched: false,
        });

    shuffle(tiles);

    return tiles;
};

export default createTiles;
