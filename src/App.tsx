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

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }
  return (
    <div>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}/>
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>
    </div>
  )
}

export default App;
