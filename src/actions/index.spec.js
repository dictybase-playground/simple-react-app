import * as actions from './index'

describe('hobbie actions', () => {
  it('addHobbie should create ADD_HOBBIE action', () => {
    expect(actions.addHobbie('Use Redux')).toEqual({
      type: 'ADD_HOBBIE',
      id: 0,
      text: 'Use Redux'
    })
  })

