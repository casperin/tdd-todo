// @flow

type Props = {
  todos: [Todo],
  onDelete: (todo: Todo, index: number) => void,
  onToggle: (todo: Todo, index: number) => void,
  filter: string
}

import React, {PropTypes} from 'react'
import TodoItem from './todoItem'

const Todos_ = ({todos, onDelete, onToggle, filter} : Props) => (
  <div className='todos'>
    <ul>
      {todos
        .filter(todo => todo.text.includes(filter))
        .map((todo : Todo, i : number) => (
          <li key={i}>
            <TodoItem
              todo={todo}
              index={i}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          </li>)
        )}
    </ul>
  </div>
)

Todos_.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default Todos_
