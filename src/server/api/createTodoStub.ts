import type { ICreateTodo } from "./createTodo"

export const todoListStub = [] as string[]

export const createTodoStub : ICreateTodo = (value: string)=>{
    console.log(value)
    todoListStub.push(value)
    return true
}

