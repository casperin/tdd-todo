import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import Filter from '../../src/components/filter_'

const noop = () => {}

describe('<Filter />', () => {
  it('renders', () => {
    const wrapper = shallow(<Filter filter={'hello'} onChange={noop} />)
    expect(wrapper.some('.filter')).to.equal(true)
    expect(wrapper.find('input').props().value).to.equal('hello')
  })

  it('Changing input calls onChange with new Text', done => {
    const onChange = filter => {
      expect(filter).to.equal('hello')
      done()
    }
    const wrapper = shallow(<Filter filter={'hell'} onChange={onChange} />)
    wrapper.find('input').simulate('change', {target: {value: 'hello'}})
  })
})
