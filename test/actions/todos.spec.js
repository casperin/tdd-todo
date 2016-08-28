import {addTodo, deleteTodo, toggleDone, filterTodos} from '../../src/actions/todos'
import { expect } from 'chai'
import tape from 'tape'

describe('Todo actions', () => {
  it('Can create a new todo action', () => {
    const {type, todo} = addTodo('Walk the dog')
    expect(todo.text).to.equal('Walk the dog')
    expect(todo.done).to.equal(false)
    expect(type).to.equal('ADD_TODO')
  })

  it('Can create delete todo action', () => {
    const {index, type} = deleteTodo(null, 2)
    expect(index).to.equal(2)
    expect(type).to.equal('DELETE_TODO')
  })

  it('Can create toggle done action', () => {
    const {index, type} = toggleDone(null, 3)
    expect(index).to.equal(3)
    expect(type).to.equal('TOGGLE_TODO')
  })

  it('Can create filter action', () => {
    const {filter, type} = filterTodos('foo')
    expect(filter).to.equal('foo')
    expect(type).to.equal('FILTER_TODOS')
  })
})
