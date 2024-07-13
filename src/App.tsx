
import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import { Todo } from './Interface'
import TodoList from './components/TodoList'
function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
    }
    setTodos([...todos, newTodo])
  }
  localStorage.setItem('todoItem', JSON.stringify(todos))
  return (
    <>  
      <CreateTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  )
}

export default App


