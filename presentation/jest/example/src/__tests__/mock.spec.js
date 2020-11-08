const {sum} = require('../simple_operations')

it('Mock implementation of add function', () => {
    const mockedSum = jest.fn(sum)
    expect(mockedSum(1, 3)).toEqual(4)
    expect(mockedSum).toHaveBeenCalledWith(1, 3)
})


it('Spy example', () => {
    const user = {
        name: (n) => {
            return `Hello ${n}`
        }
    }
    const spyer = jest.spyOn(user, 'name');
    user.name('Matin')
    user.name('Ali')
    expect(spyer).toHaveBeenCalledWith('Matin')
    // expect(spyer).toHaveBeenLastCalledWith('Matin')
})