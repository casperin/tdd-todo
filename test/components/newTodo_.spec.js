import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import NewTodo from '../../src/components/newTodo_'

const noop = () => {}

describe('<NewTodo />', () => {
  it('renders', () => {
    const wrapper = shallow(<NewTodo onNew={noop} />)
    expect(wrapper.some('.new-todo')).to.equal(true)
    expect(wrapper.state('text')).to.equal('')
  })

  it('Input shows state.text', () => {
    const wrapper = shallow(<NewTodo onNew={noop} />)
    wrapper.setState({text: 'foo'})
    expect(wrapper.find('input').props().value).to.equal('foo')
  })

  it('Changing input changes text', () => {
    const wrapper = shallow(<NewTodo onNew={noop} />)
    wrapper.find('input').simulate('change', {target: {value: 'bar'}})
    expect(wrapper.state('text')).to.equal('bar')
  })

  it('Pressing enter calls onNew with text', () => {
    const onNew = text => {
      expect(text).to.equal('foo')
    }
    const wrapper = shallow(<NewTodo onNew={onNew} />)
    const input = wrapper.find('input')
    input.simulate('change', {target: {value: 'foo'}})
    input.simulate('keypress', {key: 'Enter'})
  })

  it('Pressing enter does not call onNew if no text', () => {
    const onNew = text => {
      expect(true).to.equal(false)
    }
    const wrapper = shallow(<NewTodo onNew={onNew} />)
    const input = wrapper.find('input')
    input.simulate('keypress', {key: 'Enter'})
  })
})

