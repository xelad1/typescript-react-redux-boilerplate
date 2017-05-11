import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.css'
// import connect from 'react-redux'

// todo: abstract away button into smaller components

export default class Calculator extends Component {

  render() {
    return (
      <div>
        <div>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.clear('AC'); } }><div>AC</div></button>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.negativepositive('+/-'); } }><div>+/-</div></button>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.percent('%'); } }><div>%</div></button>
          <button className="buttonRight" style={styles.buttonRight} onClick={ () => { this.props.actions.divide('divide'); } }><div>divide</div></button>
        </div>
        <div>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.addNumber(7); } }><div>7</div></button>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.addNumber(8); } }><div>8</div></button>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.addNumber(9); } }><div>9</div></button>
          <button className="buttonRight" style={styles.buttonRight} onClick={ () => { this.props.actions.multiply('X'); } }><div>x</div></button>
        </div>
        <div>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.addNumber(4); } }><div>4</div></button>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.addNumber(5); } }><div>5</div></button>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.addNumber(6); } }><div>6</div></button>
          <button className="buttonRight" style={styles.buttonRight} onClick={ () => { this.props.actions.subtract('-'); } }><div>-</div></button>
        </div>
        <div>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.addNumber(1); } }><div>1</div></button>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.addNumber(2); } }><div>2</div></button>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.addNumber(3); } }><div>3</div></button>
          <button className="buttonRight" style={styles.buttonRight} onClick={ () => { this.props.actions.add('+'); } }><div>+</div></button>
        </div>
        <div>
          <button className="zero" style={styles.zero} onClick={ () => { this.props.actions.addNumber(0); } }><div>0</div></button>
          <button className="button" style={styles.button} onClick={ () => { this.props.actions.addNumber('.'); } }><div>.</div></button>
          <button className="buttonRight" style={styles.buttonRight} onClick={ () => { this.props.actions.equals('='); } }><div>=</div></button>
        </div>
      </div>
    )
  }

}
