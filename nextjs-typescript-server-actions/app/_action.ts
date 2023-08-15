'use server'

import { createTodo } from "@/lib/todos"
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