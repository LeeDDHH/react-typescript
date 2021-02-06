import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem';

const initialTodos: Todo[] = [
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
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]}/>
    </div>
  )
}

export default App;
