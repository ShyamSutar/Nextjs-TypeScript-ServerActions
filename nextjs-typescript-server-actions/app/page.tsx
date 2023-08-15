import { getTodos } from "@/lib/todos"

export default async function Home() {

  const { todos } = await getTodos()

  return (
    <div className="py-20">
      <div className="container">
        
        <h1>Hello</h1>

        <h2>Previous Todos</h2>

        <ul>
          {todos?.map(todo => {
            <li key={todo.id}>{todo.title}</li>
          })}
        </ul>

      </div>
    </div>
  )
}
