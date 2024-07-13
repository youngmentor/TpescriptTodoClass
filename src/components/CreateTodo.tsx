import React, { useState } from "react"
import { AddTodoProps } from "../Interface"


const CreateTodo = ({addTodo}: AddTodoProps) => {
    const [text, setText] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim()){
            addTodo(text)
            setText('')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Add your todo"
                    type="text"
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                />
                <button>Add Todo</button>
            </form>
        </>
    )
}

export default CreateTodo