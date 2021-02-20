import React from 'react';
import styled from 'styled-components';
import { ToolSetBtn } from './Util/ToolSetBtn';

interface Props {
  changeAllTodoChecked: NoReturn;
}

export const AllTodoCheckedForm: React.FC<Props> = ({ changeAllTodoChecked }) => {
  return (
    <ChangeAllTodoToCheckedBtn
      onClick={changeAllTodoChecked}
    >
      ☑️ ↔ ✅
    </ChangeAllTodoToCheckedBtn>
  )
}

const ChangeAllTodoToCheckedBtn = styled(ToolSetBtn)`
  background-color: skyblue;
`
