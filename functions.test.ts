const {shuffleArray} = require('./utils')
const {bots} = require('./data')

describe('shuffleArray testing', () => {
    test('test to see of shuffleArray returns an array',  () => { let shuffleReturn = shuffleArray(bots);
        expect(shuffleReturn.isArray).toBeTruthy;
    })

    test('test to see if bots and shuffleArray return have the same length',  () => {
        let shuffleReturn = shuffleArray(bots);
        expect(bots.length).toBe(shuffleReturn.length);
    })

    test('test to see if bots and shuffleArray return are in fact shuffled',  () => {
        let shuffleReturn = shuffleArray(bots);
        expect(bots).not.toEqual(shuffleReturn);
    })
})
       