import { Todo } from "./Interface";

const LOCAL_STORAGE_KEY = 'todoItem'

export const loadTodos = (): Todo[] =>{
  const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
  return savedTodos ? JSON.parse(savedTodos) : []
}

export const saveTodos = (todos: Todo[]) =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}