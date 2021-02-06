import React from 'react';
import { TodoListItem } from './TodoListItem';

const todos: Todo[] = [
  {
    text: 'Walk the Dog',
    complete: false
  },
  {
    text: 'Write app',
    complete: true
  }
];

const App = () => {
  return (
    <div>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]}/>
    </div>
  )
}

export default App;
