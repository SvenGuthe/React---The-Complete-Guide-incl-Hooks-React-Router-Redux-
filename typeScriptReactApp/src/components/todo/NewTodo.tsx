import React, { useContext, useRef } from "react";
import TodoItem from "../../models/TodoItem";
import { TodosContext } from "../../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = (props) => {

    const todosCtx = useContext(TodosContext);

    const textRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const inputText = textRef.current!.value;

        if(inputText.trim().length === 0) {
            return;
        }
        
        todosCtx.addTodo(new TodoItem(inputText));

    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='text'>Todo Text</label>
        <input type='text' id='text' ref={textRef}></input>
        <button type='submit'>Add Todo</button>
    </form>

}

export default NewTodo;