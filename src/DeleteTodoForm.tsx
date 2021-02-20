import React from 'react';
import styled from 'styled-components';
import { ToolSetBtn } from './Util/ToolSetBtn';

interface Props {
  deleteTodo: NoReturn;
}

export const DeleteTodoForm: React.FC<Props> = ({ deleteTodo }) => {
  return (
    <CheckedItemDelBtn
      onClick={deleteTodo}
    >
      ✅ → 🗑️
    </CheckedItemDelBtn>
  )
}

const CheckedItemDelBtn = styled(ToolSetBtn)`
  background-color: pink;
`
