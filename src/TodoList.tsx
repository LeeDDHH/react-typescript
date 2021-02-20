import React, { Fragment } from 'react';
import styled from 'styled-components';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {

  const generateTodoList = (todos: Todo[]) => {
    if (todos.length < 1) {
      return (
        <div>
          There's nothing to Todo
        </div>
      )
    }

    return (
      <TodoListItems>
        {todos.map(todo => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
          />
        ))}
      </TodoListItems>
    )
  }
  return (
    <Fragment>
      { generateTodoList(todos)}
    </Fragment>
  );
}

const TodoListItems = styled.ul`
  list-style: none;
`
