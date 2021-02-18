import React, { useState } from 'react';

interface Props {
  deleteTodo: DeleteTodo;
}

export const DeleteTodoForm: React.FC<Props> = ({ deleteTodo }) => {
  return (
    <button
      onClick={deleteTodo}
    >
      Delete checked todo
    </button>
  )
}
