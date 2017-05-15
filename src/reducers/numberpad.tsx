import {
  ADD_NUMBER,
  ADD,
  SUBTRACT,
  MATH,
  MULTIPLY,
  DIVIDE,
  NEGATIVEPOSITIVE,
  CLEAR,
  EQUALS,
} from '../constants/ActionTypes';

import * as Actions from '../actions/index.js';

console.log('Actions', Actions);

const initialState = {
  displayString: '0',
  total: 0,
  entries: [],
  decimal: false,
  arithmeticOperator: false,
}

// Type checking here is throwing an error despite passing the type, needs a refactor

export default function counter(state = initialState, action : Actions ) {
  switch(action.type) {
    case ADD_NUMBER:
      debugger;
      let lastEntry = state.entries[state.entries.length - 1];
      // debugger;
      let displayString = state.displayString;
      if (action.val === '.') {
        state.decimal = true;
      }

      console.log('state.entries', state.entries[state.entries.length - 1]);

      if (displayString[displayString.length - 3] === '.') {
        // TODO: develop error handler here to let user know they can't add
        // anymore numbers

        // TODO: update conditional to not rely on last entry
        return state;
      } else if (state.arithmeticOperator === true) {
        return {
          ...state,
          displayString: "" + action.val,
          arithmeticOperator: false,
        }
      } else {
        return {
          ...state,
          displayString: displayString + action.val,
      }
    }
    case MATH:
      let tempArrayMath = state.entries.slice(0);
      let tempMathDisplay = state.displayString;

      console.log('tempMathDisplay', action.symbol);

      if (tempArrayMath[state.entries.length - 1] !== "+" || "-" || "/" || "*") {
        tempArrayMath.push(tempMathDisplay);
        tempArrayMath.push(action.symbol);
      }

      return {
        ...state,
        arithmeticOperator: true,
        entries: tempArrayMath,
    }
    case EQUALS:
      let tempArrayEquals = state.entries;
      tempArrayEquals.push(state.displayString);

      let nt = Number(tempArrayEquals[0]);

      for (let i = 0; i < tempArrayEquals.length; i ++) {
        // debugger;
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
      }

      console.log('total at the end', nt);

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
        displayString: '0',
        total: 0,
        entries: [],
        decimal: false,
    }
    default:
      return state;
  }
}
