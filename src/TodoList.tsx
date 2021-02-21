import React, { Fragment } from 'react';
import styled from 'styled-components';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteSelectedTodo: DeleteSelectedTodo;
  selectEditableTodo: SelectEditableTodo;
  editableTodo: Todo | {};
  changeTodoText: ChangeTodoText;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteSelectedTodo, selectEditableTodo, editableTodo, changeTodoText }) => {

  const generateTodoList = (todos: Todo[]) => {
    if (todos.length < 1) {
      return (
        <EmptyList>
          <h1>
            Todoがないカモ
          </h1>
        </EmptyList>
      )
    }

    return (
      <TodoListItems>
        {todos.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteSelectedTodo={deleteSelectedTodo}
            selectEditableTodo={selectEditableTodo}
            isEditable={editableTodo === todo}
            changeTodoText={changeTodoText}
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

const EmptyList = styled.div`
  width: 100%;
  text-align: center;
  color: #666666;

  @media (min-width: 768px) {
    width: 600px;
  }
`

const TodoListItems = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0px;
  margin: 0.5rem 0px;

  @media (min-width: 768px) {
    width: 600px;
  }

  li {
    padding: 10px 0px;
    border-bottom: 1px solid #555555;
  }

  li:first-child {
    border-top: 1px solid #555555;
  }
`
