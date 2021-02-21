interface Todo {
  id: string;
  text: string;
  complete: boolean;
}

// type ToggleTodo = (selectedTodo: Todo) => void;

interface UseLocalStorage {
  (): [Todo[],Function]
}

type InitialTodos = string | null;

type InitialLocalStorage = [Todo[],Function];

interface SetTodoList {
  (todoList: Todo[]): void;
}

interface ToggleTodo {
  (selectedTodo: Todo): void;
}

interface DeleteSelectedTodo {
  (selectedTodo: Todo): void;
}

interface SelectEditableTodo {
  (selectedTodo: Todo): void;
}
// type AddTodo = (text: string) => void;

interface AddTodo {
  (text: string): void;
}

// interface ChangeAllTodoChecked {
//   (): void;
// }

// interface DeleteTodo {
//   (): void;
// }

// interface InitializeTodoList {
//   (): void;
// }

interface NoReturn {
  (): void;
}

type TodoText = string;

interface TextChange {
  (todo: TodoText): void;
}

interface ChangeTodoText {
  (selectedTodo: Todo, modifiedText: string): void;
}
