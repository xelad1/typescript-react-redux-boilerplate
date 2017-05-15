import * as types from '../constants/ActionTypes'

export function addNumber(val) {
  return { type: types.ADD_NUMBER, val }
}

export function deleteNumber(num) {
  return { type: types.DELETE_NUMBER, num }
}

export function addNumberRow(index) {
  return { type: types.ADD_NUMBER_ROW, index }
}

export function negativepositive(sign) {
  return { type: types.NEGATIVEPOSITIVE, sign }
}

export function clear(index) {
  return { type: types.CLEAR, index }
}

export function equals(index) {
  return { type: types.EQUALS, index }
}

export function percent(index) {
  return { type: types.PERCENT, index }
}

export function math(symbol) {
  return { type: types.MATH, symbol }
}
