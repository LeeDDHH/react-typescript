import React, { useState } from 'react';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('');

  const textChange: TextChange = (todo: TodoText) => {
    setText(todo);
  }

  const addTodoText = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={e => { textChange(e.target.value) }}
      />
      <button
        type="submit"
        onClick={addTodoText}
      >
        Add Todo
      </button>
    </form>
  )
}
