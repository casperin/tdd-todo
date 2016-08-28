import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions/todos'
import NewTodo_ from './newTodo_'

const NewTodo = props => <NewTodo_ {...props} />

export default connect(null, {onNew: addTodo})(NewTodo)
