import reducer from '../../src/reducers/reducer'
import { expect } from 'chai'
import todos from '../fixtures/todos'

describe('Reducer', () => {
  it('Can add todo to nothing', () => {
    const [todo] = reducer(undefined, {todo: {done: false, text: 'foo'}, type: 'ADD_TODO'}).todos
    expect(todo && todo.text).to.equal('foo')
  })

  it('Can add todo to list of todos', () => {
    const [todo, ...rest] = reducer({todos}, {todo: {done: false, text: 'bar'}, type: 'ADD_TODO'}).todos
    expect(todo && todo.text).to.equal('bar')
    expect(rest.length).to.equal(todos.length)
  })

  it('Can delete todo', () => {
    const index = 1
    const newTodos = reducer({todos}, {type: 'DELETE_TODO', index}).todos
    expect(newTodos.length).to.equal(todos.length - 1)
    expect(newTodos[index].text).to.not.equal(todos[index].text)
    expect(newTodos[index].text).to.equal(todos[index + 1].text)
  })

  it('Can toggle done state of todo', () => {
    const index = 1
    const newTodos = reducer({todos}, {type: 'TOGGLE_TODO', index}).todos
    expect(newTodos[index].done).to.equal(true)
    expect(todos[index].done).to.equal(false)
  })

  it('Can update filter', () => {
    const action = {type: 'FILTER_TODOS', filter: 'foo'}
    const {filter} = reducer(undefined, action)
    expect(filter).to.equal('foo')
  })
})

