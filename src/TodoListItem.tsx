import React, { Fragment, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteSelectedTodo: DeleteSelectedTodo;
  selectEditableTodo: SelectEditableTodo;
  isEditable: boolean;
  changeTodoText: ChangeTodoText;
  initEditableTodo: NoReturn;
}

export const TodoListItem: React.FC<Props> = ({
  todo,
  toggleTodo,
  deleteSelectedTodo,
  selectEditableTodo,
  isEditable,
  changeTodoText,
  initEditableTodo
}) => {

  const [text, setText]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.value = todo.text;
      inputRef.current.focus();
    }
  });

  const textChange = (text: string): void => {
    setText(text);
  }

  const addTodoText = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
    if (text.length < 1) return;
    changeTodoText(todo, text);
    setText('');
  }

  const keyDownEvent = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') addTodoText(e);
  }

  const cancelEdit: NoReturn = () => {
    setText('');
    initEditableTodo();
  }

  const generateItem = () => {
    if (isEditable === true) {
      return (
        <EditableTodo
          ref={inputRef}
          type="text"
          value={text}
          onChange={e => { textChange(e.target.value) }}
          onKeyDown={e => { keyDownEvent(e) }}
          onBlur={() => { cancelEdit() } }
        />
      )
    }

    return (
      <Fragment>
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
          <EditBtn
            className="hoverAppear"
            onClick={() => {
              selectEditableTodo(todo)
            }}
          >
            ✏️
          </EditBtn>
          <DelBtn
            className="hoverAppear"
            onClick={() => {
              deleteSelectedTodo(todo)
            }}
          >
            🗑️
          </DelBtn>
        </ItemToolContainer>
      </Fragment>
    )
  }

  return (
    <TodoItem>
      {generateItem()}
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

const EditableTodo = styled.input`
  width: 86%;
  border: 0px;
  border-radius: 5px;
  margin-left: 41px;
  font-size: 18px;
  background-color: palegoldenrod;
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
