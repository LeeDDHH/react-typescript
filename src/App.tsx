import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { ToolSet } from './ToolSet';

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

  const changeAllTodoChecked: ChangeAllTodoChecked = () => {
    const newTodos: Todo[] = todos.map((todo: Todo) => {
      return {...todo, complete: true}
    })
    setTodos(newTodos);
  } 

  const deleteTodo: DeleteTodo = () => {
    const newTodo: Todo[] = todos.filter((todo: Todo) => {
      return todo.complete === false;
    });
    setTodos(newTodo);
  }

  return (
    <MainContainer>
      <AddTodoForm addTodo={addTodo} />
      <ToolSet
        changeAllTodoChecked={changeAllTodoChecked}
        deleteTodo={deleteTodo}
      />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
