import type { ICreateTodo } from "./createTodo"

export const todoListStub = [] as string[]

export const createTodoStub : ICreateTodo = (value: string)=>{
    todoListStub.push(value)
    return true
}

