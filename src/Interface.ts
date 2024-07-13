
export interface Todo {
    id: number;
    text: string;
}

export interface AddTodoProps {
    addTodo: (text: string) => void
}

export interface TodoListPRops {
    todos: Todo[];
}