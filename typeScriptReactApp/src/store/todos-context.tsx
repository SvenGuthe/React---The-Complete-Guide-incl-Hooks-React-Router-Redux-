import React, { useState } from "react";

import TodoItem from "../models/TodoItem";

type todoContextObj = {
    items: TodoItem[],
    addTodo: (todo: TodoItem) => void,
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<todoContextObj>({
    items: [],
    addTodo: (todo: TodoItem) => { },
    removeTodo: (id: string) => { }
});

const TodosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodoHandler = (todo: TodoItem): void => {

        setTodos((oldTodos) =>
            oldTodos.concat(todo)
        );

    }

    const removeTodoHandler = (id: string): void => {

        setTodos((oldTodos) => oldTodos.filter(todo => todo.id !== id));

    }

    const contextValue: todoContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;