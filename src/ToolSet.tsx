import React from 'react';
import styled from 'styled-components';
import { DeleteTodoForm } from './DeleteTodoForm';
import { AllTodoCheckedForm } from './AllTodoCheckedForm';
import { InitializeTodoListForm } from './InitializeTodoListForm';

interface Props {
  changeAllTodoChecked: NoReturn;
  deleteTodo: NoReturn;
  initializeTodoList: NoReturn;
}

export const ToolSet: React.FC<Props> = ({ changeAllTodoChecked, deleteTodo, initializeTodoList }) => {
  return (
    <ToolSetContainer>
      <AllTodoCheckedForm changeAllTodoChecked={changeAllTodoChecked} />
      <DeleteTodoForm deleteTodo={deleteTodo} />
      <InitializeTodoListForm initializeTodoList={initializeTodoList} />
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
