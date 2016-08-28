import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import TodoItem from '../../src/components/todoItem'
import todos from '../fixtures/todos'

const noop = () => {}

describe('<TodoItem />', () => {
  it('Can render todo with text', () => {
    const component = shallow(<TodoItem todo={todos[0]} onDelete={noop} onToggle={noop} />)
    expect(component.some('.todo')).to.equal(true)
    expect(component.find('.text').text()).to.equal(todos[0].text)
  })

  it('Can render state of todo', () => {
    const doneTodo = shallow(<TodoItem todo={todos.find(t => t.done)} onDelete={noop} onToggle={noop} />)
    const notDoneTodo = shallow(<TodoItem todo={todos.find(t => !t.done)} onDelete={noop} onToggle={noop} />)

    expect(doneTodo.find('.status').text()).to.equal('done')
    expect(doneTodo.some('.done')).to.equal(true)
    expect(doneTodo.some('.not-done')).to.equal(false)

    expect(notDoneTodo.find('.status').text()).to.equal('not done')
    expect(notDoneTodo.some('.not-done')).to.equal(true)
    expect(notDoneTodo.some('.done')).to.equal(false)
  })

  it('Calls onDelete when user clicks delete button', done => {
    const index = 0
    const todo = todos[index]
    const onDelete = (t, i) => {
      expect(t).to.equal(todo)
      expect(i).to.equal(index)
      done()
    }
    shallow(<TodoItem todo={todo} index={index} onDelete={onDelete} onToggle={noop} />)
      .find('button.delete')
      .simulate('click')
  })

  it('Calls onToggle when user clicks toggle button', done => {
    const index = 1
    const todo = todos[index]
    const onToggle = (t, i) => {
      expect(t).to.equal(todo)
      expect(i).to.equal(index)
      done()
    }
    shallow(<TodoItem todo={todo} index={index} onDelete={noop} onToggle={onToggle} />)
      .find('button.toggle')
      .simulate('click')
  })
})
