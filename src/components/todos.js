import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo, toggleDone} from '../actions/todos'
import Todos_ from './todos_'

const Todos = props => <Todos_ {...props} />

export default connect(({todos, filter}) => ({todos, filter}), {onDelete: deleteTodo, onToggle: toggleDone})(Todos)
