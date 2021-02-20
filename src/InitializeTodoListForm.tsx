import React from 'react';
import styled from 'styled-components';
import { ToolSetBtn } from './Util/ToolSetBtn';

interface Props {
  initializeTodoList: NoReturn;
}

export const InitializeTodoListForm: React.FC<Props> = ({ initializeTodoList }) => {
  return (
    <AllItemDelBtn
      onClick={initializeTodoList}
    >
      📝 → 📃
    </AllItemDelBtn>
  )
}

const AllItemDelBtn = styled(ToolSetBtn)`
  background-color: red;
`
