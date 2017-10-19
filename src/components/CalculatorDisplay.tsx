import * as React from 'react';
import { connect } from 'react-redux';

export namespace CalculatorDisplay {
  export interface Props {
    display: {
      displayString: string,
    }
  }

  export interface State {
    // Empty
  }
}

export default class CalculatorDisplay extends React.Component<CalculatorDisplay.Props, CalculatorDisplay.State> {
  render() {
    console.log('this', this);
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
