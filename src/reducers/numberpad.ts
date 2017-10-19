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
  PERCENT,
} from '../constants/ActionTypes';

import { Action } from '../actions/index';

const initialState = {
  displayString: '0',
  total: 0,
  entries: [],
  decimal: false,
  arithmeticOperator: false,
  timesPercentPressed: 2,
}

export default function counter(state = initialState, action: Action) {
  switch(action.type) {
    case ADD_NUMBER:
      // debugger;
      let lastEntry = state.entries[state.entries.length - 1];
      let displayString = state.displayString;

      if (displayString[displayString.length - 3] === '.') {
        // TODO: update conditional to not rely on last entry
        console.log('entries', state.entries);
        return state;
      } else if (state.arithmeticOperator === true) {
        return {
          ...state,
          displayString: "" + action.val,
          arithmeticOperator: false,
          timesPercentPressed: 2,
        }
      } else if (state.displayString.length === 1 && state.displayString === "0") {
        return {
          ...state,
          displayString: "" + action.val,
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
      let lastItem = tempArrayMath[tempArrayMath.length - 1]

      if (lastItem !== "+" &&
          lastItem !== "-" &&
          lastItem !== "/" &&
          lastItem !== "*") {
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

      return {
        ...state,
        displayString: nt + "",
        total: nt,
        entries: tempArrayEquals,
    }
    case NEGATIVEPOSITIVE:
      let switchedSign = Number(state.displayString) * -1;

      return {
        ...state,
        total: state.total * -1,
        displayString: switchedSign + "",
    }
    case CLEAR:
      return {
        ...state,
        displayString: '0',
        total: 0,
        entries: [],
        decimal: false,
        timesPercentPressed: 2,
    }
    case PERCENT:
      let numberConvertedToPercent = (Number(state.displayString) * .1).toFixed(state.timesPercentPressed);

      return {
        ...state,
        displayString: numberConvertedToPercent + "",
        timesPercentPressed: state.timesPercentPressed += 1,
    }
    default:
      return state;
  }
}
