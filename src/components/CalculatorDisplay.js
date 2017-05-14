import React, { Component, Proptypes } from 'react';
import { connect } from 'react-redux';
import initialState from '../reducers/numberpad';
import styles from '../styles.css'

console.log('this', this);


export default class CalculatorDisplay extends Component {

  render() {
    return (
      <div className="display">
        <div className="displayText">
          {this.props.display.displayString}
        </div>
      </div>
    )
  }

}
