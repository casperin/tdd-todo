import React, {Component} from 'react'

export default class NewTodo extends Component {
  state = {text: ''}
  render () {
    return <div className='new-todo'>
      <input
        autoFocus
        placeholder='What do you need to do?'
        value={this.state.text}
        onChange={e => this.setState({text: e.target.value})}
        onKeyPress={e => {
          if (e.key === 'Enter' && this.state.text) {
            this.props.onNew(this.state.text)
            this.setState({text: ''})
          }
        }}
      />
    </div>
  }
}

