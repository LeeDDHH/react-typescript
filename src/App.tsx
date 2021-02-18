import React, { useState, Fragment } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { DeleteTodoForm } from './DeleteTodoForm';

const initialTodos: Todo[] = [];

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

  const deleteTodo: DeleteTodo = () => {
    const newTodo: Todo[] = todos.filter((todo: Todo) => {
      return todo.complete === false;
    });
    setTodos(newTodo);
  }

  return (
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
      <DeleteTodoForm deleteTodo={deleteTodo}/>
    </Fragment>
  );
}

export default App;
