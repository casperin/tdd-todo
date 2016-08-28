import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import App from '../../src/components/app'

const component = mount(<App />);
const ul = component.find('ul')
const input = component.find('.new-todo input')

describe('<App />', () => {
  it('Can render the container', () => {
    expect(shallow(<App />).find('.app').some('.app')).to.equal(true)
  })

  it('Can add a todo', () => {
    expect(ul.children()).to.have.length(0)
    input.simulate('change', {target: {value: 'foo'}})
    input.simulate('keypress', {key: 'Enter'})
    expect(ul.children()).to.have.length(1)
  })

  it('Can delete a todo', () => {
    input.simulate('change', {target: {value: 'one'}})
    input.simulate('keypress', {key: 'Enter'})
    input.simulate('change', {target: {value: 'two'}})
    input.simulate('keypress', {key: 'Enter'})
    expect(ul.children()).to.have.length(3)
    ul.children().at(1).find('.delete').simulate('click')
    expect(ul.children()).to.have.length(2)
  })

  it('Can toggle a todo', () => {
    expect(ul.children().at(1).find('.status').text()).to.equal('not done')
    ul.children().at(1).find('.toggle').simulate('click')
    expect(ul.children().at(1).find('.status').text()).to.equal('done')
  })

  it('Can filter a todos', () => {
    component.find('.filter input').simulate('change', {target: {value: 'foo'}})
    expect(ul.children()).to.have.length(1)
  })
})

