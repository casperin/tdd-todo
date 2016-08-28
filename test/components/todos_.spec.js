import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import Todos from '../../src/components/todos_'
import todos from '../fixtures/todos'

const noop = () => {}

describe('<Todos />', () => {
  it('Can render a list', () => {
    const list = shallow(<Todos todos={todos} onDelete={noop} onToggle={noop} filter='' />)
    expect(list.find('ul').children()).to.have.length(todos.length)
  })

  it('Can propagate onDelete events', done => {
    const index = 0
    const onDelete = (t, i) => {
      expect(t).to.equal(todos[index])
      expect(i).to.equal(index)
      done()
    }
    const list = mount(<Todos todos={todos} onDelete={onDelete} onToggle={noop} filter='' />)
    list.find('li').at(index).find('.delete').simulate('click')
  })

  it('Can propagate onToggle events', done => {
    const index = 0
    const onToggle = (t, i) => {
      expect(t).to.equal(todos[index])
      expect(i).to.equal(index)
      done()
    }
    const list = mount(<Todos todos={todos} onDelete={noop} onToggle={onToggle} filter='' />)
    list.find('li').at(index).find('.toggle').simulate('click')
  })

  it('Filters todos', () => {
    const list = mount(<Todos todos={todos} onDelete={noop} onToggle={noop} filter='' />)
    list.setProps({filter: 'Wash'})
    expect(list.find('ul').children()).to.have.length(1)
  })
})
