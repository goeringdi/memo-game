let card = 0;
const getRandomInt = (min, max) => {
    min = 1;
    max = 37;
    card = Math.floor(Math.random() * (max - min)) + min;
    return card;
};
module.exports = { getRandomInt };
