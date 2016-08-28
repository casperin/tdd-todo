import React from 'react'
import Todos from './todos'
import Filter from './filter'
import NewTodo from './newTodo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/reducer'

const App = () => (
  <Provider store={createStore(reducer)}>
    <div className='app'>
      <NewTodo />
      <Filter />
      <Todos />
    </div>
  </Provider>
);

export default App;
