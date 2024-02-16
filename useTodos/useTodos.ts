import React, { useEffect, useReducer } from 'react'
import { todoReducer, Todo, Cases } from './todoReducer'

const init = () => {
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos) : []
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const totalTodos = todos.length
    const pendingTodos = todos.filter(todo => !todo.done).length

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])


    const handleNewTodo = (todo: Todo) => {
        dispatch({
            type: Cases.ADD,
            payload: todo
        })
    }

    const handleDeleteTodo = (todoId: number) => {
        dispatch({
            type: Cases.DELETE,
            payload: todoId
        })
    }

    const onToggleTodo = (id: number) => {
        dispatch({
            type: Cases.TOOGLE,
            payload: id
        })
    }


    return {

        todos,
        handleNewTodo,
        handleDeleteTodo,
        onToggleTodo,
        totalTodos,
        pendingTodos,

    }

}
