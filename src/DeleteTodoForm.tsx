import React from 'react';
import styled from 'styled-components';

interface Props {
  deleteTodo: DeleteTodo;
}

export const DeleteTodoForm: React.FC<Props> = ({ deleteTodo }) => {
  return (
    <CheckedItemDelBtn
      onClick={deleteTodo}
    >
      ✅ ▶ 🗑️
    </CheckedItemDelBtn>
  )
}

const CheckedItemDelBtn = styled.button`
  background-color: pink;
  border-radius: 3px;
  width: 70px;
  height: 43px;
  border: 1px solid #999999;
`
