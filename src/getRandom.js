/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
let card = 0;
// eslint-disable-next-line prettier/prettier
const getRandomInt = (min, max) => {
    // eslint-disable-next-line prettier/prettier
    min = 1;
    // eslint-disable-next-line prettier/prettier
    max = 37;
    // eslint-disable-next-line prettier/prettier
    card = Math.floor(Math.random() * (max - min)) + min;
    // eslint-disable-next-line prettier/prettier
    return card;
// eslint-disable-next-line prettier/prettier
};
module.exports = { getRandomInt };
