'use server'

import { createTodo, updateTodo } from "@/lib/todos"
import { revalidatePath } from "next/cache"

export async function createTodoAction(title: string){
    try {
        const data = await createTodo(title)
        revalidatePath('/')
        return (data)
    } catch (error) {
        console.log(error);
    }
}

export async function updateTodoAction(id:string, isCompleted:boolean){
    //perform update prisma client
    try {
        await updateTodo(id, isCompleted)
    } catch (error) {
        return(error)
    }

    //revalidate
    revalidatePath('/')
}