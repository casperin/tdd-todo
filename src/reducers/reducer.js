// @flow

const initialState = {
  todos: [],
  filter: ''
}

export default (state : State = initialState, action : Action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          action.todo,
          ...state.todos
        ]
      }

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.index)
      }

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, i) => i === action.index ? {...todo, done: !todo.done} : todo)
      }

    case 'FILTER_TODOS':
      return {
        ...state,
        filter: action.filter
      }

    default:
      return state
  }
}

