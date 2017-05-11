import { ADD_NUMBER, DELETE_NUMBER, ADD_NUMBER_ROW, DELETE_NUMBER_ROW } from
'./constants';

export function addNumber(val) {
  // todo: determine whether logic goes inside here or elsewhere?
  return { type: ADD_NUMBER, val }
}

export function deleteNumber(num) {
  return { type: DELETE_NUMBER, num }
}

export function addNumberRow(index) {
  return { type: ADD_NUMBER_ROW, index }
}

export function deleteNumberRow(index) {
  return { type: DELETE_NUMBER_ROW, index }
}
