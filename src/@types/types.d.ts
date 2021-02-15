interface Todo {
  text: string;
  complete: boolean;
}

// type ToggleTodo = (selectedTodo: Todo) => void;

interface ToggleTodo {
  (selectedTodo: Todo): void;
}

// type AddTodo = (text: string) => void;

interface AddTodo {
  (text: string): void;
}
