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
  const [todos, setTodos]: [Todo[], React.Dispatch<React.SetStateAction<Todo[]>>] = useState<Todo[]>(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos: Todo[] = todos.map((todo: Todo) => {
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

  const addTodo: AddTodo = (text: TodoText) => {
    const newTodo = { text, complete: false }
    setTodos([...todos, newTodo]);
  }

  return (
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </Fragment>
  );
}

export default App;
