const { sum } = require("../simple_operations")

/**
 * 1- Matchers - toEqual - toBe differences
 * 2- Code coverage
 * 3- Test suite
 */

describe('Simple Operations Test Suite', () => {

    // beforeEach(() => {
    //     console.log('Before script')
    // })

    it('Should add two numbers properly', () => {
        expect(sum(1,3)).toEqual(4)
        expect(sum(1,3)).not.toEqual(6)
    })

    // afterAll(() => {
    //     console.log('After script')
    // })

})