import * as types from './action-types'

export const addPerson = (person) => ({
  type: types.ADD_PERSON,
  person
})
