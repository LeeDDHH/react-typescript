import React, { useState, Fragment } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

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
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm />
    </Fragment>
  );
}

export default App;
