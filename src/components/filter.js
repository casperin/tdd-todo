import React, {Component} from 'react'
import {connect} from 'react-redux'
import {filterTodos} from '../actions/todos'
import Filter_ from './filter_'

const Filter = props => <Filter_ {...props} />

export default connect(null, {onChange: filterTodos})(Filter)
