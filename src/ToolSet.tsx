import React from 'react';
import styled from 'styled-components';
import { DeleteTodoForm } from './DeleteTodoForm';
import { AllTodoCheckedForm } from './AllTodoCheckedForm';

interface Props {
  changeAllTodoChecked: ChangeAllTodoChecked;
  deleteTodo: DeleteTodo;
}

export const ToolSet: React.FC<Props> = ({ changeAllTodoChecked, deleteTodo }) => {
  return (
    <ToolSetContainer>
      <AllTodoCheckedForm changeAllTodoChecked={changeAllTodoChecked} />
      <DeleteTodoForm deleteTodo={deleteTodo} />
    </ToolSetContainer>
  )
}

const ToolSetContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: center;
  margin-bottom: 10px;

  button {
    margin-right: 5px;
  }

  button:last-child {
    margin-right: 0px;
  }
`
