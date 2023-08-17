import { getTodos } from "@/lib/todos"
import { Todo } from "@prisma/client"
import NewTodoForm from "./components/NewTodoForm"
import TodoItem from "./components/TodoItem"

export default async function Home() {
  
  const todos = await getTodos()
  console.log(todos + " ye hai");
  

  return (
    <div className="py-20">
      <div className="container">
        
        <h1 className="mb-10 w-fit bg-slate-100 px-2 text-3xl font-bold">Todos</h1>

        <NewTodoForm/>

        <h2 className="mt-10 border-b pb-2 text-xl ">Previous Todos</h2>

        <ul className="mt-4 flex flex-col gap-1">
          {todos.map((todo:Todo) => (
            <TodoItem key={todo.id} todo={todo}/>
          ))}
        </ul>
        

      </div>
    </div>
  )
}
