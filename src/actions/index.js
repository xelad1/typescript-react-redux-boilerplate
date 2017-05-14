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

export function add(symbol) {
  return { type: types.ADD, symbol }
}

export function subtract(symbol) {
  return { type: types.SUBTRACT, symbol }
}

export function multiply(symbol) {
  return { type: types.MULTIPLY, symbol }
}

export function divide(symbol) {
  return { type: types.DIVIDE, symbol }
}

export function negativepositive(index) {
  return { type: types.NEGATIVEPOSITIVE, index }
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
