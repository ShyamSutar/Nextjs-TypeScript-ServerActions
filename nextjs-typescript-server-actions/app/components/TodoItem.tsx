'use client'

import { Todo } from "@prisma/client"
import { useTransition } from "react"
import { updateTodoAction } from "../_action"

type TodoItemProps = {
    todo: Todo
}

const TodoItem = ({todo}:TodoItemProps) => {

  const [isPending, startTransition] = useTransition()

  return (
    <li>
        <input type="checkbox" id={todo.id} 
        defaultChecked={todo.isCompleted}
        onChange={(e)=> startTransition(()=>{updateTodoAction(todo.id, e.target.checked)})}
        className="peer h-4 w-4 cursor-pointer rounded border-gray-300"
        />
        
        <label htmlFor={todo.id}
        className="cursor-pointer peer-checked:text-slate-500 peer-checked:line-through"
        >
          {todo.title}
        </label>
    </li>
  )
}

export default TodoItem