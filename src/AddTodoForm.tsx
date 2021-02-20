import React, { useState } from 'react';
import styled from 'styled-components';

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
    if (text.length < 1) return;
    addTodo(text);
    setText('');
  }

  return (
    <Form>
      <TextInput
        type="text"
        value={text}
        onChange={e => { textChange(e.target.value) }}
      />
      <AddButton
        type="submit"
        onClick={addTodoText}
      >
        ＋
      </AddButton>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    width: 600px;
  }
`

const TextInput = styled.input`
  border: 1px solid #999999;
  border-radius: 3px;
  background-color: ghostwhite;
  width: 70%;
  height: 40px;
  margin-right: 5px;
  font-size: 36px;
  font-weight: bold;
  text-indent: 0.5rem;
`

const AddButton = styled.button`
  background-color: gold;
  border-radius: 3px;
  width: 50px;
  height: 43px;
  border: 1px solid #999999;
  font-weight: bold;
`
