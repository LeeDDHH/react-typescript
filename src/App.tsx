import React, { useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid'
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { ToolSet } from './ToolSet';

const initialTodos: Todo[] = [];

const useLocalStorage: UseLocalStorage = () => {
  const [storedValue, setStoredValue]: [Todo[], React.Dispatch<React.SetStateAction<Todo[]>>] = useState<Todo[]>(() => {
    try {
      const todoList: InitialTodos = window.localStorage.getItem("todoList")
      return todoList ? JSON.parse(todoList) : initialTodos
    } catch(e) {
      console.log(e);
      return initialTodos
    }
  })

  const setTodoList: SetTodoList = (todoList: Todo[]) => {
    try {
      setStoredValue(todoList);
      window.localStorage.setItem("todoList", JSON.stringify(todoList));
    } catch (e) {
      console.log(e);
      alert("保存に失敗しました。\nリロード後、再度試してみてください");
    }
  }

  return [storedValue, setTodoList]
}

const App = () => {
  const [todos, setTodos]: InitialLocalStorage = useLocalStorage();
  const [editableTodo, setEditableTodo] = useState({});

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos: Todo[] = todos.map((todo: Todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (text: TodoText) => {
    const newTodo = { id: nanoid(),text, complete: false }
    setTodos([...todos, newTodo]);
  }

  const changeAllTodoChecked: NoReturn = () => {
    const newTodos: Todo[] = todos.map((todo: Todo) => {
      return {...todo, complete: !todo.complete}
    })
    setTodos(newTodos);
  }

  const deleteTodo: NoReturn = () => {
    const newTodo: Todo[] = todos.filter((todo: Todo) => {
      return todo.complete === false;
    });
    setTodos(newTodo);
  }

  const deleteSelectedTodo: DeleteSelectedTodo = (selectedTodo: Todo) => {
    const newTodo: Todo[] = todos.filter((todo: Todo) => {
      return todo !== selectedTodo;
    });
    setTodos(newTodo);
  }

  const selectEditableTodo: SelectEditableTodo = (selectedTodo: Todo) => {
    const EditableTodo = todos.filter((todo) => { return todo === selectedTodo })[0]
    setEditableTodo(EditableTodo);
  }

  const changeTodoText: ChangeTodoText = (selectedTodo: Todo, modifiedText: string) => {
    const newTodos: Todo[] = todos.map((todo: Todo) => {
    if (todo === selectedTodo) {
        return {
          ...todo,
          text: modifiedText
        }
      }
      return todo;
    })
    setTodos(newTodos);
    setEditableTodo({});
  }

  const initEditableTodo: NoReturn = () => {
    setEditableTodo({});
  }

  const initializeTodoList: NoReturn = () => {
    const result = window.confirm("todoListをすべて消しますか？\n※一度削除すると戻せません。");

    if (result) setTodos(initialTodos);
  }

  return (
    <MainContainer>
      <AddTodoForm addTodo={addTodo} />
      <ToolSet
        changeAllTodoChecked={changeAllTodoChecked}
        deleteTodo={deleteTodo}
        initializeTodoList={initializeTodoList}
      />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteSelectedTodo={deleteSelectedTodo}
        selectEditableTodo={selectEditableTodo}
        editableTodo={editableTodo}
        changeTodoText={changeTodoText}
        initEditableTodo={initEditableTodo}
      />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
