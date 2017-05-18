import * as React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Calculator from '../components/Calculator'
import CalculatorDisplay from '../components/CalculatorDisplay'
import * as CalculatorActions from '../actions'
import { RouteComponentProps } from 'react-router'

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    actions: typeof CalculatorActions;
  }

  export interface State {
    /* empty */
  }
}

const App = ({todos, actions, display}) => (
  <div>
    <CalculatorDisplay display={display}/>
    <Calculator actions={actions}/>
  </div>
)

const mapStateToProps = state => ({
  todos: state.todos,
  display: state.numberpad
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CalculatorActions as any, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
