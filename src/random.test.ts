// const { it } = require('@jest/globals');
const { getRandomInt } = require('./getRandom');

it ( 'should extract random number more than 0', () => {
    let min = 1;
    let max = 37;
    expect(getRandomInt(min, max)).toBeGreaterThan(0);
})

it ( 'should extract random number less than 37', () => {
    let min = 1;
    let max = 37;
    expect(getRandomInt(min, max)).toBeLessThanOrEqual(37);;
})
