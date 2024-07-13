
import { Todo, TodoListPRops } from "../Interface"
const TodoList = ({todos}: TodoListPRops) => {
  return (
    <div>
        {
            todos?.map((i:Todo )=>(
                <>
                 <p>{i.text}</p>
                </>
            ))
        }
    </div>
  )
}

export default TodoList