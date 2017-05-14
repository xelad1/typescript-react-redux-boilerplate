import * as React from 'react';
import { connect } from 'react-redux';
import initialState from '../reducers/numberpad';
// import styles from '../styles.css'

console.log('this', this);
export namespace CalculatorDisplay {
  export interface Props {
    display: object,
  }

  export interface State {

  }
}

// TODO: How do we get displayString to be properly recognized in props validation?
export default class CalculatorDisplay extends React.Component<CalculatorDisplay.Props, CalculatorDisplay.State> {

  render() {
    return (
      <div className="display">
        <div className="displayText">
          { this.props.display.displayString }
        </div>
      </div>
    )
  }

}
