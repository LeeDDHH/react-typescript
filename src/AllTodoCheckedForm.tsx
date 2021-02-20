import React from 'react';
import styled from 'styled-components';

interface Props {
  changeAllTodoChecked: ChangeAllTodoChecked;
}

export const AllTodoCheckedForm: React.FC<Props> = ({ changeAllTodoChecked }) => {
  return (
    <ChangeAllTodoToCheckedBtn
      onClick={changeAllTodoChecked}
    >
      📝 ▶ ✅
    </ChangeAllTodoToCheckedBtn>
  )
}

const ChangeAllTodoToCheckedBtn = styled.button`
  background-color: skyblue;
  border-radius: 3px;
  width: 70px;
  height: 43px;
  border: 1px solid #999999;
`
