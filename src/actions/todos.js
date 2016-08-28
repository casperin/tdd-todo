// @flow

export const addTodo = (text: string) =>
  ({type: 'ADD_TODO', todo: {done: false, text}})

export const deleteTodo = (todo: Todo, index: number) =>
  ({type: 'DELETE_TODO', index})

export const toggleDone = (todo: Todo, index: number) =>
  ({type: 'TOGGLE_TODO', index})

export const filterTodos = (filter: string) =>
  ({type: 'FILTER_TODOS', filter})
