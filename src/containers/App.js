import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Calculator from '../components/Calculator'
import CalculatorDisplay from '../components/CalculatorDisplay'
import * as TodoActions from '../actions'

const App = ({todos, actions, display}) => (
  <div>
    <CalculatorDisplay display={display}/>
    <Calculator actions={actions}/>
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  display: state.numberpad
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
