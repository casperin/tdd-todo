type Todo = {
  done: boolean,
  text: string
}

type Action = {
  type: string,
  todo: Todo,
  index: number,
  filter: string
}

type State = {
  todos: [Todo],
  filter: string
}

