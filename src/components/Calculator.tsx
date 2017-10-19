import * as React from 'react'
import PropTypes from 'prop-types'
import * as CalculatorActions from '../actions/index'

export namespace Calculator {
  export interface Props {
    actions: typeof CalculatorActions,
  }

  export interface State {

  }
}

let styles = require('../styles.scss');

export default class Calculator extends React.Component<Calculator.Props, Calculator.State> {


  render() {
    return (
      <div>
        <div>
          <button className="buttonTopRow" onClick={ () => { this.props.actions.clear('AC'); } }><div>AC</div></button>
          <button className="buttonTopRow" onClick={ () => { this.props.actions.negativepositive('+/-'); } }><div>+/-</div></button>
          <button className="buttonTopRow" onClick={ () => { this.props.actions.percent('%'); } }><div>%</div></button>
          <button className="buttonRight" onClick={ () => { this.props.actions.math('/'); } }><div>/</div></button>
        </div>
        <div>
          <button className="buttonMain" onClick={ () => { this.props.actions.addNumber(7); } }><div>7</div></button>
          <button className="buttonMain" onClick={ () => { this.props.actions.addNumber(8); } }><div>8</div></button>
          <button className="buttonMain" onClick={ () => { this.props.actions.addNumber(9); } }><div>9</div></button>
          <button className="buttonRight" onClick={ () => { this.props.actions.math('*'); } }><div>x</div></button>
        </div>
        <div>
          <button className="buttonMain" onClick={ () => { this.props.actions.addNumber(4); } }><div>4</div></button>
          <button className="buttonMain" onClick={ () => { this.props.actions.addNumber(5); } }><div>5</div></button>
          <button className="buttonMain" onClick={ () => { this.props.actions.addNumber(6); } }><div>6</div></button>
          <button className="buttonRight" onClick={ () => { this.props.actions.math('-'); } }><div>-</div></button>
        </div>
        <div>
          <button className="buttonMain" onClick={ () => { this.props.actions.addNumber(1); } }><div>1</div></button>
          <button className="buttonMain" onClick={ () => { this.props.actions.addNumber(2); } }><div>2</div></button>
          <button className="buttonMain" onClick={ () => { this.props.actions.addNumber(3); } }><div>3</div></button>
          <button className="buttonRight" onClick={ () => { this.props.actions.math('+'); } }><div>+</div></button>
        </div>
        <div>
          <button className="zero" onClick={ () => { this.props.actions.addNumber(0); } }><div>0</div></button>
          <button className="buttonMain" onClick={ () => { this.props.actions.addNumber('.'); } }><div>.</div></button>
          <button className="equals" onClick={ () => { this.props.actions.equals('='); } }><div>=</div></button>
        </div>
      </div>
    )
  }

}
