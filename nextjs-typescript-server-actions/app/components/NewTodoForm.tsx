'use client'

import { createTodoAction } from "../_action"

async function action (data: FormData){
    const title  = data.get('title')
    if(!title || typeof title !== 'string'){return}
    // call a server action to create a todo
    const data2 = await createTodoAction(title)
console.log(data2);


    // reset the form

}

const NewTodoForm = () => {
  return (
    <form action={action}>
        <h2>Create a new Todo</h2>

        <input className="shadow appearance-none border rounded mr-4 mt-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Todo" name='title'/>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add Todo
        </button>

    </form>
  )
}

export default NewTodoForm