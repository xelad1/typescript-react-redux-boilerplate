import * as React from 'react';
import { connect } from 'react-redux';
import initialState from '../reducers/numberpad';

export namespace CalculatorDisplay {
  export interface Props {
    display: object,
    calculatorDisplay: string,
  }

  export interface State {

  }
}

// TODO: How do we get displayString to be properly recognized in props validation?
export default class CalculatorDisplay extends React.Component<CalculatorDisplay.Props, CalculatorDisplay.State> {

  render() {

    let calculatorDisplay = this.props.display.displayString;
    return (
      <div className="display">
        <div className="displayText">
          { calculatorDisplay }
        </div>
      </div>
    )
  }

}
