const sample = require('../data/sample.json')

it('sample json should match snapshot', () => {
    expect(sample).toMatchSnapshot()
})