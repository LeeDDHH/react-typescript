import React from 'react';
import styled from 'styled-components';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <TodoItem>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            toggleTodo(todo)
          }}
        />
        {todo.text}
      </label>
    </TodoItem>
  );
}

const TodoItem = styled.li`
  label {
    display: block;
    width: 100%;
    text-indent: 0.5rem;
    font-size: 18px;
  }

  input[type=checkbox] {
    transform: scale(2);
    margin-right: 1rem;
  }
`
