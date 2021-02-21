import React from 'react';
import styled from 'styled-components';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteSelectedTodo: DeleteSelectedTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, deleteSelectedTodo }) => {
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
      <ItemToolContainer>
        <EditBtn className="hoverAppear">✏️</EditBtn>
        <DelBtn
          className="hoverAppear"
          onClick={() => {
            deleteSelectedTodo(todo)
          }}
        >
          🗑️
        </DelBtn>
      </ItemToolContainer>
    </TodoItem>
  );
}

const TodoItem = styled.li`
  display: flex;

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

  button {
    display: none;
  }

  :hover {
    background-color: gold;
  }

  :hover > div .hoverAppear {
    display: block;
  }
`

const ItemToolContainer = styled.div`
  display: flex;
  margin-right: 0.5rem;
`

const ItemToolBtn = styled.button`
  border: 1px solid #666666;
  border-radius: 5px;
  margin-right: 5px;
  
  :last-child {
    margin-right: 0;
  }
`

const EditBtn = styled(ItemToolBtn)`
  background-color: mediumseagreen;
`

const DelBtn = styled(ItemToolBtn)`
  background-color: pink;
`
