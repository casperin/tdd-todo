// @flow

type Props = {
  todo: Todo,
  index: number,
  onDelete: (todo: Todo, index: number) => void,
  onToggle: (todo: Todo, index: number) => void
}

import React from 'react'

export default ({todo, index, onDelete, onToggle} : Props) => (
  <div className={`todo ${todo.done ? 'done' : 'not-done'}`}>
    <div className='text'>{todo.text}</div>
    <mark className='status'>{todo.done ? 'done' : 'not done'}</mark>
    <div className='actions'>
      <button className='delete' onClick={e => onDelete(todo, index)}>Delete</button>
      <button className='toggle' onClick={e => onToggle(todo, index)}>Toggle</button>
    </div>
  </div>
)

