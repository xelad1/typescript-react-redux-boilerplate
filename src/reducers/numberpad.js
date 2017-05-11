import {
  ADD_NUMBER,
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  NEGATIVEPOSITIVE,
  CLEAR,
  EQUALS,
} from '../constants/ActionTypes';

const initialState = {
  displayString: '',
  total: 0,
  entries: [],
  decimal: false,
};

// let evaluate = function () {
//
//
// }

export default function counter(state = initialState, action = {}) {
  console.log('state inside counter behind current', state);
  switch(action.type) {
    case ADD_NUMBER:
      let displayString = state.displayString;
      if (action.val === '.') {
        state.decimal = true;
      }

      let tempEntries = state.entries;

      if (displayString[displayString.length - 3] === '.') {
        // todo: develop error handler here to let user know they can't add
        // anymore numbers
        return state;
      } else {
        return {
          ...state,
          displayString: displayString + action.val,
      }
    }
    case ADD:
      let tempArrayAdd = state.entries;
      let tempAddDisplay = state.displayString;
      tempArrayAdd.push('+');
      return {
        ...state,
        entries: tempArrayAdd,
    }
    case SUBTRACT:
      let tempArraySubtract = state.entries;
      let tempSubtractDisplay = state.displayString;
      tempArraySubtract.push('-');
      return {
        ...state,
        entries: tempArraySubtract,
    }
    case MULTIPLY:
      let tempArrayMultiply = state.entries;
      tempArrayMultiply.push('*');
      return {
        ...state,
        entries: tempArrayMultiply,
    }
    case DIVIDE:
      let tempArrayDivide = state.entries;
      tempArrayDivide.push('/');
      return {
        ...state,
        entries: tempArrayDivide,
    }
    case EQUALS:
      let tempArrayEquals = state.entries;
      tempArrayEquals.push('=');

      let nt = Number(tempArrayEquals[0])

      for (let i = 0; i < nt.length; i ++) {
        let next = Number(tempArrayEquals[i + 1]);

        if (tempArrayEquals[i] === '+') {
          nt += next;
        } else if (tempArrayEquals[i] === '-') {
          nt -= next;
        } else if (tempArrayEquals[i] === '*') {
          nt *= next;
        } else if (tempArrayEquals[i] === '/') {
          nt /= next;
        }

        i++;
      }

      return {
        ...state,
        displayString: nt + "",
        total: nt,
        entries: tempArrayEquals,
    }
    case NEGATIVEPOSITIVE:
      return {
        ...state,
    }
    case CLEAR:
      return {
        ...state,
    }
    default:
      return state;
  }
}
