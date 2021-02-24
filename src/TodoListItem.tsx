import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import { EditableTodo } from './EditableTodo';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteSelectedTodo: DeleteSelectedTodo;
  selectEditableTodo: SelectEditableTodo;
  isEditable: boolean;
  changeTodoText: ChangeTodoText;
  initEditableTodo: NoReturn;
}

const initialCompositionState = false;

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
  // IMEで入力中の判定（true: 入力中、false: 非入力）
  const [isOnComposition, setIsOnComposition]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(initialCompositionState);

  const textChange = (text: string): void => {
    setText(text);
  }

  // IME入力中の処理
  const handleComposition = (e: React.CompositionEvent<HTMLInputElement>): void => {
    if (e.type === 'compositionend') {
      // IME変換が終了したら現在のIME入力判定をfalseにする
      setIsOnComposition(false);
    } else {
      // IME変換が認識されたら、直前のキー入力として現在のIME入力の判定を代入する(trueに変わる)
      setIsOnComposition(true);
    }
  }

  const handleSelectEditableTodo = (todo: Todo): void => {
    // 編集ボタンを押したら、Todoの内容をstateに書き込む
    setText(todo.text);
    selectEditableTodo(todo);
  }

  const addTodoText = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
    if (text.length < 1) return;
    changeTodoText(todo, text);
    setText('');
  }

  const keyDownEvent = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    // IME入力中ではなく、Enter/returnが押されたら、書かれているTodo内容を保存する
    if (!isOnComposition && e.key === 'Enter') {
      addTodoText(e);
      // 現在のIME状態/直前のIME状態を初期化する
      setIsOnComposition(initialCompositionState);
    }
  }

  const cancelEdit: NoReturn = () => {
    // フォーカスが外れたらTodoで保持していた状態を初期化する
    setText('');
    initEditableTodo();
    setIsOnComposition(initialCompositionState);
  }


  const generateItem = () => {
    if (isEditable === true) {
      return (
        <EditableTodo
          value={text}
          textChange={textChange}
          handleComposition={handleComposition}
          keyDownEvent={keyDownEvent}
          cancelEdit={cancelEdit}
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
              handleSelectEditableTodo(todo)
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
